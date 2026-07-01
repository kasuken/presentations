---
theme: the-unnamed
title: GitHub Copilot SDK
info: |
  ## Bring GitHub Copilot to your app
  Build real agentic product experiences with the GitHub Copilot SDK.

layout: cover
themeConfig:
  color: "#E6EDF3"
  background: "#0D1117"
  accents-teal: "#3FB950"
  accents-yellow: "#D29922"
  accents-red: "#F85149"
  accents-lightblue: "#58A6FF"
  accents-blue: "#1F6FEB"
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
# duration of the presentation
duration: 35min
---

# Bring GitHub Copilot to your app

## The production agent runtime, from your own code

<div class="mt-10 text-sm opacity-80">Emanuele Bartolesi - Microsoft MVP (x12) - GitHub Star ⭐ (x4) - GitHub Star of the Year 2023</div>

<!-- notes:
- Open with the practical promise: this is not another chat-completions wrapper.
- The SDK exposes the Copilot CLI agent runtime programmatically.
- The current repo describes the SDK as generally available and semver-based.
-->

---
layout: section
class: text-center
---

# Your product does not need a chatbot.

## It needs an agentic workflow users can trust.

<!-- notes:
- The frame for the talk: workflows, not novelty.
- Copilot already knows how to plan, call tools, edit files, and stream events.
- Our job is to embed that safely into a product surface.
-->

---
layout: center
class: text-2xl
---

### What the SDK actually gives you

```text
Your app
  -> SDK client
  -> JSON-RPC
  -> Copilot runtime / CLI server
  -> tools, files, MCP, model, events
```

<div class="mt-6 text-sm opacity-80">The SDK manages the runtime process by default; you can also connect to an external server.</div>

<!-- notes:
- Use "runtime" and "CLI server" together: the docs still describe the architecture through the CLI server.
- Node.js, Python, and .NET bundle the CLI runtime automatically.
- Go, Java, and Rust need the CLI available unless using their bundling options.
-->

---
layout: two-cols
---


## Fit check

- You need Copilot inside an app or service
- Users already have Copilot or you use BYOK
- The workflow benefits from tool use
- You want events, policy, and session control

::right::

## .NET start

- Practical baseline: .NET 8+
- Package: `GitHub.Copilot.SDK`
- CLI runtime is bundled for .NET
- Auth: logged-in user, OAuth token, env token, or BYOK


<!-- notes:
- The older awesome-copilot C# instructions say technical preview and .NET 10 / CLI-on-PATH.
- The current official repo says GA, .NET Standard 2.0-compatible package, and bundled CLI for .NET.
- If someone asks, explain that the repo is the source of truth when docs conflict.
-->

---
layout: center
class: text-2xl
---

### First working session

```csharp
using GitHub.Copilot;

await using var client = new CopilotClient();
await client.StartAsync();

await using var session = await client.CreateSessionAsync(new SessionConfig
{
    Model = "gpt-5",
    OnPermissionRequest = PermissionHandler.ApproveAll,
});

var done = new TaskCompletionSource();

session.On<SessionEvent>(evt =>
{
    if (evt is AssistantMessageEvent msg) Console.WriteLine(msg.Data.Content);
    if (evt is SessionIdleEvent) done.SetResult();
});

await session.SendAsync(new MessageOptions { Prompt = "What is 2 + 2?" });
await done.Task;
```

<!-- notes:
- Keep the mental model: client, session, event stream, completion signal.
- Mention await using because both client and session are async disposable.
- ApproveAll is fine for demos, not for production.
-->

---
layout: center
class: text-2xl
---

### Sessions are the product boundary

<v-clicks>

- `SessionId` lets you resume work later
- `Model` and `ReasoningEffort` choose behavior
- `Tools`, `AvailableTools`, and `ExcludedTools` define capability
- `SystemMessage` shapes behavior without rebuilding the runtime
- `Streaming`, `Hooks`, and event handlers drive the UI

</v-clicks>

<!-- notes:
- Everything interesting is configured around the session.
- This is where product behavior, safety, observability, and UX meet.
-->

---
layout: two-cols
---

### Wait for complete output

- Subscribe to events
- Send the message
- Complete on `SessionIdleEvent`
- Read final `AssistantMessageEvent`

::right::

### Stream the experience

- Set `Streaming = true`
- Render `AssistantMessageDeltaEvent`
- Optionally handle reasoning deltas
- Still expect final message events


<!-- notes:
- The C# instructions strongly recommend TaskCompletionSource for event-based waiting.
- Final assistant events are always sent, even when streaming is enabled.
-->

---
layout: center
class: text-2xl
---

### The first serious feature: your tools

```csharp
using GitHub.Copilot;
using Microsoft.Extensions.AI;
using System.ComponentModel;

var lookupIssue = CopilotTool.DefineTool(
    async ([Description("Issue identifier")] string id) =>
        await FetchIssueAsync(id),
    factoryOptions: new AIFunctionFactoryOptions
    {
        Name = "lookup_issue",
        Description = "Fetch issue details from the product tracker",
    });

await using var session = await client.CreateSessionAsync(new SessionConfig
{
    Model = "gpt-5",
    Tools = [lookupIssue],
});
```

<!-- notes:
- Tools are where the SDK becomes product-specific.
- The official .NET README now favors CopilotTool.DefineTool while still building on Microsoft.Extensions.AI.
- Tool names and descriptions are part of the model interface; make them precise.
-->

---
layout: center
class: text-2xl
---

### Tool execution flow

<v-clicks>

1. Copilot decides it needs a capability
2. The runtime requests a tool call
3. Your process runs the handler
4. The SDK serializes the result
5. Copilot incorporates the result into the answer

</v-clicks>

<div class="mt-6 text-sm opacity-80">Return JSON-serializable values for the common case; use richer tool result objects when metadata matters.</div>

<!-- notes:
- This slide is deliberately simple: a lot of product teams overcomplicate tool calling.
- The handler can also receive invocation metadata if needed.
-->

---
layout: center
class: text-2xl
---

### Permission handling is not optional product design

```csharp
OnPermissionRequest = async (request, invocation) =>
{
    return request switch
    {
        PermissionRequestShell shell =>
            PermissionDecision.Reject($"Shell blocked: {shell.FullCommandText}"),
        _ => PermissionDecision.ApproveOnce(),
    };
}
```

<div class="mt-6 text-sm opacity-80">Use `ApproveAll` for demos. Use policy for products.</div>

<!-- notes:
- Permission requests cover built-in tools, shell commands, file writes, and custom tools.
- If no handler is supplied, permission requests become events and remain pending for the consumer.
- Per-tool SkipPermission exists for safe, read-only custom tools.
-->

---
layout: center
class: text-2xl
---

### Hooks turn the agent loop into a controllable workflow

<v-clicks>

- `OnPreToolUse`: allow, deny, ask, or modify args
- `OnPostToolUse`: add context after success
- `OnPostToolUseFailure`: guide recovery after failure
- `OnUserPromptSubmitted`: transform prompts before execution
- `OnSessionStart`, `OnSessionEnd`, `OnErrorOccurred`: lifecycle policy

</v-clicks>

<!-- notes:
- Hooks are the right place for audit, policy, telemetry breadcrumbs, and product-specific constraints.
- They are different from tools: hooks supervise the loop; tools extend capability.
-->

---
layout: cover
---

# Demo

<!-- notes:
- Keep the demo narrow and credible.
- Suggested flow: ask about a release issue, show lookup_issue running, then ask it to run a shell command and show denial.
-->

---
layout: section
class: text-center
---

# One session can become a real product surface.

## Then the question becomes: what should be reusable, external, or delegated?

<!-- notes:
- Bridge from basic SDK to features.
-->

---
layout: two-cols
---

### Skills

- Markdown instruction modules
- Loaded from `SkillDirectories`
- Disabled with `DisabledSkills`
- Best for reusable expertise

::right::

### MCP servers

- External tool providers
- Local or remote servers
- Great for GitHub, databases, docs, internal systems
- Can be scoped per session or agent

<!-- notes:
- Skills are instructions; MCP servers are capabilities.
- The combination is powerful: a database skill plus a Postgres MCP server, for example.
-->

---
layout: two-cols
---

```text
skills/
├── security-review/
│   └── SKILL.md
└── release-notes/
    └── SKILL.md
```

::right::

```markdown
---
name: security-review
description: Secure code review for web services
---

# Security review

Check auth boundaries, injection risks,
secret handling, and missing audit trails.
```

<!-- notes:
- The session points to the parent skills directory.
- Skills can also be preloaded per custom agent using the agent's skills list.
-->

---
layout: center
class: text-2xl
---

### Custom agents: specialists inside one session

<v-clicks>

- Each agent has a `name` and `prompt`
- `description` helps runtime delegation
- `tools` restrict what that agent can use
- `mcpServers` attach specialized external capability
- `skills` preload selected skill instructions
- `infer: false` keeps an agent explicit-only

</v-clicks>

<!-- notes:
- Custom agents are lightweight definitions attached to a parent session.
- A sub-agent runs in an isolated context and reports lifecycle events back to the parent session.
-->

---
layout: two-cols
---

### Researcher

- Read-only tools
- Codebase exploration
- Architecture answers
- No edits

::right::

### Implementer

- Read and edit tools
- Targeted code changes
- Compile and test checks
- Clear failure reporting

<!-- notes:
- This mirrors the official best-practice pattern: pair a researcher with an editor.
- Least privilege makes delegation safer and easier to explain in a UI.
-->

---
layout: center
class: text-2xl
---

### Delegation lifecycle

<v-clicks>

1. Intent matching against agent names and descriptions
2. Agent selection when `infer` allows it
3. Isolated execution with scoped tools and prompt
4. Lifecycle events stream to the parent session
5. The parent incorporates the sub-agent result

</v-clicks>

<div class="mt-6 text-sm opacity-80">Watch `subagent.selected`, `subagent.started`, `subagent.completed`, `subagent.failed`, and `subagent.deselected`.</div>

<!-- notes:
- These events are ideal for an agent tree UI or progress rail.
- Mention handling subagent.failed explicitly.
-->

---
layout: center
class: text-2xl
---

### Product signals you should surface

<v-clicks>

- Current session and resumability
- Streaming text and final answer
- Tool call started, completed, failed
- Permission request and decision
- Sub-agent selected and completed
- Error and retry state

</v-clicks>

<!-- notes:
- The official docs mention 40+ event types.
- Do not hide the agent loop completely; users trust what they can understand.
-->

---
layout: two-cols
---

### Remote sessions

- Work runs locally or on your server
- Mission Control exposes web and mobile access
- Requires auth and a GitHub repository working directory
- Surface the `session.info` remote URL in your UI

::right::

### Cloud sessions

- Work runs on GitHub-hosted compute
- Create with `CloudSessionOptions`
- Associate owner, repo, and branch when you can
- Wait for cloud `session.start` before first send

<!-- notes:
- Remote sessions promote a local/session-hosted runtime to Mission Control.
- Cloud sessions create hosted work through Mission Control.
- Both resume through the normal session resume path.
- Cloud session creation can fail because of entitlement or org policy; treat policy_blocked as an authorization outcome.
-->

---
layout: center
class: text-2xl
---

### Package repeatable capability as plugins

```text
code-reviewer-plugin/
├── plugin.json
├── hooks.json
├── .mcp.json
├── agents/
│   └── code-reviewer.md
└── skills/
    └── security-review/
        └── SKILL.md
```

<div class="mt-6 text-sm opacity-80">A plugin directory can bundle skills, hooks, MCP servers, custom agents, and LSP config behind one manifest.</div>

<!-- notes:
- Use inline config for one-off tools, hooks, MCP servers, or agents.
- Use plugin directories once related capabilities should ship together.
- SDK apps usually load them by passing --plugin-dir when spawning the runtime.
- For deterministic app behavior, prefer explicit plugin dirs over ambient machine state.
-->

---
layout: center
class: text-2xl
---

### Fleet mode: parallel workers for independent work

<v-clicks>

- Good for batch reviews, multi-package migrations, docs refreshes
- The parent session decomposes work into clear owned units
- Sub-agents run in parallel and report results back
- Avoid overlapping files and sequential dependencies
- Treat it as advanced: generated RPC surface and parent verification required

</v-clicks>

<!-- notes:
- Fleet mode is not a faster version of every task.
- It is for work that can be decomposed before execution.
- The official docs call out limitations and experimental generated bindings, so position this as advanced.
- Parent-agent review is still required after the workers finish.
-->

---
layout: center
class: text-2xl
---

### Production readiness checklist

<v-clicks>

- Replace demo `ApproveAll` with policy
- Use `SystemMessageMode.Append` or `Customize` before `Replace`
- Give every tool a narrow, descriptive name
- Add `SessionErrorEvent` handling
- Dispose event subscriptions and sessions
- Enable OpenTelemetry or JSONL trace export
- Decide where session state and memory live

</v-clicks>

<!-- notes:
- The C# instructions emphasize append mode, error events, TaskCompletionSource, and disposal.
- The official .NET README adds telemetry, infinite sessions, memory, and BaseDirectory for restricted environments.
-->

---
layout: section
class: text-center
---

# When direct SDK stops being enough

## Use Microsoft Agent Framework for cross-provider orchestration.

<!-- notes:
- Do not oversell MAF for simple Copilot-only apps.
- The official docs say standalone SDK is simpler when the app only uses Copilot.
-->

---
layout: center
class: text-2xl
---

### Copilot as a MAF agent provider

```csharp
using GitHub.Copilot;
using Microsoft.Agents.AI;

await using var copilotClient = new CopilotClient();
await copilotClient.StartAsync();

AIAgent agent = copilotClient.AsAIAgent();

string response = await agent.RunAsync(
    "Explain dependency injection in ASP.NET Core");

Console.WriteLine(response);
```

<div class="mt-4 text-sm opacity-80">Packages: `GitHub.Copilot.SDK` and `Microsoft.Agents.AI.GitHub.Copilot --prerelease`</div>

<!-- notes:
- MAF is the unified successor to Semantic Kernel and AutoGen.
- It provides a standard interface for .NET and Python multi-agent orchestration.
-->

---
layout: two-cols
---

### Direct SDK

- Copilot-only product surface
- Full session and event control
- Tools, hooks, MCP, skills, agents
- Fewer moving parts

::right::

### Add MAF

- Multiple agent providers
- Sequential or concurrent workflows
- Handoffs and A2A patterns
- Framework-level orchestration

<!-- notes:
- This is the architecture decision slide.
- Make it easy for the audience to choose.
-->

---
layout: section
class: text-center
---

# Do not start with the biggest agent architecture.

## Start with the smallest Copilot SDK workflow users can trust.

<div class="text-sm opacity-80 text-center mt-6">Then grow into tools, skills, sub-agents, MCP, and orchestration when the product earns them.</div>

<!-- notes:
- End on scope discipline.
- Reinforce the core message: embed Copilot's agent runtime, but design the product boundary carefully.
-->

---
layout: about-me

helloMsg: "git stash -m 💩"
name: Emanuele Bartolesi
imageSrc: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sdc2bpiftpadibi4h51c.gif
job: GitHub Tech Lead @Xebia
line1: "Microsoft MVP (12x)"
line2: "GitHub Star ⭐ (4x)"
social1: "@kasuken"
social2: emanuelebartolesi.com
social3: emanueleb@outolook.com

---