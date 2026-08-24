---
theme: the-unnamed
background: https://cover.sli.dev
title: Goodbye Vibe Coding, Hello Spec-Driven Development
class: text-center
transition: slide-left
duration: 50min
---

# Goodbye Vibe Coding, <br /> Hello Spec-Driven Development

Emanuele Bartolesi

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Are you ready? <carbon:arrow-right />
</div>

<div class="abs-br m-6 text-xl">
  <a href="https://github.com/github/spec-kit" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: section
---

# The Rise of Vibe Coding

---

# Vibe coding optimizes for flow, not understanding

- In **February 2025**, Andrej Karpathy named a workflow where you describe, run, and adjust without reading much of the generated code
- Natural-language feedback replaces most direct code manipulation
- The fast loop is useful when the output is disposable and the risk is low
- The danger begins when a prototype quietly becomes a product

<!--
[Sources]
- https://x.com/i/status/1886192184808149383
-->

---
layout: section
---

# Demo: Vibe Coding in Action

---

# Fast feedback does not remove engineering work

- Hidden assumptions surface late because they were never made explicit
- Generated dependencies, architecture, and failure modes still need ownership
- Tests, security review, observability, and maintainability return the moment users depend on the result
- Use vibe coding deliberately for exploration; use an engineering process for software you intend to keep

---

# The answer is more engineering, not less AI

- What if instead of abandoning AI, we use it as a **real engineering tool**?
- Think of AI as "the friendly intern who can whip up drafts, but you're still the senior engineer"

---

# AI-native engineering makes intent reviewable

- Provide architecture, standards, constraints, and dependencies as durable context
- Keep humans accountable for decisions, evidence, and release quality
- Break work into bounded units that can be reviewed and tested independently

---
layout: section
---

# Demo: AI Native Engineering Workflow

---
layout: section
---

# Spec-Driven Development (SDD)

---

# The specification becomes the primary artifact

- Flip the "code first, document later" approach
- The **specification** becomes the driving artifact
- Treat the spec (what + why + constraints) as the **source of truth**

<!--
[Sources]
- https://github.com/github/spec-kit/blob/main/spec-driven.md
-->

---

# SDD turns a prompt into a reviewable chain

- Write down the behavior, value, constraints, and acceptance criteria
- Derive technical decisions and executable tasks from that intent
- Implement in small steps, then compare the code with the artifacts
- Humans review the chain; the agent accelerates the transformations

<!--
[Sources]
- https://github.com/github/spec-kit/blob/main/spec-driven.md
-->

---
layout: section
---

# Spec Kit by GitHub

---

# Spec Kit makes SDD executable in your repository

- An open-source toolkit for building software with **any AI coding agent**
- The `specify` CLI installs shared templates, scripts, workflows, and an adapter for your chosen agent
- Specs, plans, tasks, and supporting artifacts remain plain files you can diff and review
- **30+ built-in integrations**, plus a generic integration for other agents
- Current stable release at review time: **v1.0.1**

<!--
[Sources]
- https://github.com/github/spec-kit
- https://github.com/github/spec-kit/releases/tag/v1.0.1
- https://github.github.io/spec-kit/reference/integrations.html
-->

---

# Use the process that matches the risk

**Shorter path for smaller features**

`Specify → Plan → Tasks → Implement ⇄ Converge`

**Full path for production features**

`Constitution → Specify → Clarify → Plan`

`Checklist → Tasks → Analyze → Implement ⇄ Converge`

The extra steps are quality gates, not ceremony to perform by default.

<!--
[Sources]
- https://github.com/github/spec-kit/blob/main/docs/quickstart.md
-->

---

# The process is portable; the invocation syntax is not

- Official documentation uses `/speckit.*` as the generic command form
- GitHub Copilot now defaults to **Agent Skills** in `.github/skills/` and invokes `/speckit-*`
- Copilot's opt-in commands mode creates `.github/agents/`, `.github/prompts/`, and VS Code settings
- Other skills-based integrations may use `$speckit-*` or their own native form

> The following demo uses the default **GitHub Copilot skills** syntax.

<!--
[Sources]
- https://github.github.io/spec-kit/reference/integrations.html
- https://github.com/github/spec-kit/blob/main/src/specify_cli/integrations/copilot/__init__.py
- https://github.com/github/spec-kit/blob/main/docs/quickstart.md
-->

---
layout: section
---

# Demo: Spec Kit in Action

---

# Install a pinned release, then select an integration

```bash
uv tool install specify-cli \
  --from git+https://github.com/github/spec-kit.git@v1.0.1

specify init podcast-site --integration copilot
cd podcast-site
```

- Pinning the release makes a live demo repeatable
- `specify integration list` shows the integrations available in your installed version
- PyPI installation is also supported: `uv tool install specify-cli`

<!--
[Sources]
- https://github.com/github/spec-kit/releases/tag/v1.0.1
- https://github.com/github/spec-kit#-get-started
- https://github.github.io/spec-kit/reference/integrations.html
-->

---

# Init separates shared tooling from feature artifacts

```text
.specify/                       shared templates, scripts, state
  memory/constitution.md        project principles
  integration.json              installed/default integration
.github/skills/                 Copilot adapter (default mode)
  speckit-*/SKILL.md

specs/<feature>/                created by the feature workflow
  spec.md  plan.md  tasks.md
```

The active feature is tracked in `.specify/feature.json`. Git branches are optional and belong to the opt-in `git` extension.

<!--
[Sources]
- https://github.com/github/spec-kit/blob/main/docs/quickstart.md
- https://github.com/github/spec-kit/blob/main/AGENTS.md
- https://github.com/github/spec-kit/tree/main/src/specify_cli
-->

---

# A constitution turns agreed principles into guardrails

```text
/speckit-constitution

Preserve public API compatibility. Follow the existing service
boundaries. Require automated tests and accessible UI states.
```

- Run it once per project, then evolve it deliberately
- Use rules the team already follows or has explicitly agreed to adopt
- Later planning, analysis, and convergence treat its `MUST` rules as authoritative

<!--
[Sources]
- https://github.com/github/spec-kit/blob/main/docs/quickstart.md
- https://github.com/github/spec-kit/blob/main/templates/commands/constitution.md
- https://github.com/github/spec-kit/blob/main/docs/guides/existing-projects.md
-->

---

# Specify behavior and value before technology

```text
/speckit-specify

Build a podcast website with a featured episode, searchable episode
archive, About page, and FAQ. Use mocked content for the first release.
```

- Describe user outcomes, boundaries, edge cases, and measurable success
- Keep frameworks, databases, and code structure out of the feature spec
- The command creates `specs/<feature>/spec.md`

<!--
[Sources]
- https://github.com/github/spec-kit/blob/main/docs/quickstart.md
- https://github.com/github/spec-kit/blob/main/templates/commands/specify.md
- https://github.com/github/spec-kit/blob/main/templates/spec-template.md
-->

---

# Clarify ambiguity before it becomes architecture

```text
/speckit-clarify

Focus on search behavior, empty states, and mobile navigation.
```

- Asks up to five targeted questions about underspecified behavior
- Encodes the answers back into `spec.md`
- Optional for a small experiment; valuable before production planning

<!--
[Sources]
- https://github.com/github/spec-kit/blob/main/docs/quickstart.md
- https://github.com/github/spec-kit/blob/main/templates/commands/clarify.md
-->

---

# Planning is where the technical choices belong

```text
/speckit-plan

Use Blazor Server on .NET 10 with MudBlazor. Keep content mocked,
make the UI responsive, and preserve a clear path to a real API.
```

- Converts the spec into architecture and implementation decisions
- May add `research.md`, `data-model.md`, `contracts/`, and `quickstart.md`
- Review the decisions and trade-offs before generating tasks

<!--
[Sources]
- https://github.com/github/spec-kit/blob/main/docs/quickstart.md
- https://github.com/github/spec-kit/blob/main/templates/commands/plan.md
- https://github.com/github/spec-kit/blob/main/spec-driven.md
-->

---

# Tasks turn the plan into an executable sequence

```text
/speckit-tasks
```

- Generates a dependency-ordered `tasks.md`
- Uses concrete file paths and marks safe parallel work with `[P]`
- Organizes work so each user story can be implemented and tested independently
- Becomes the execution ledger for implementation and convergence

<!--
[Sources]
- https://github.com/github/spec-kit/blob/main/docs/quickstart.md
- https://github.com/github/spec-kit/blob/main/templates/commands/tasks.md
- https://github.com/github/spec-kit/blob/main/templates/tasks-template.md
-->

---

# Optional gates catch different classes of mistakes

- `/speckit-checklist` creates reviewer-owned checks for requirement quality
- `/speckit-analyze` reports gaps and conflicts across `spec.md`, `plan.md`, and `tasks.md` without changing files
- `/speckit-taskstoissues` can convert the task list into GitHub Issues

Use each gate where its failure would change the decision to implement.

<!--
[Sources]
- https://github.com/github/spec-kit#available-slash-commands
- https://github.com/github/spec-kit/blob/main/templates/commands/checklist.md
- https://github.com/github/spec-kit/blob/main/templates/commands/analyze.md
- https://github.com/github/spec-kit/blob/main/templates/commands/taskstoissues.md
-->

---

# Implementation is a loop, not the finish line

```text
/speckit-implement
        ↓
/speckit-converge
        ↘ gaps found → append tasks → implement again
```

- `implement` executes the dependency-ordered task file
- `converge` compares the current code with the spec, plan, tasks, and constitution
- When gaps remain, it appends traceable work to `tasks.md`; when none remain, it leaves the file unchanged

<!--
[Sources]
- https://github.com/github/spec-kit/blob/main/docs/quickstart.md
- https://github.com/github/spec-kit/blob/main/templates/commands/implement.md
- https://github.com/github/spec-kit/blob/main/templates/commands/converge.md
-->

---

# Spec Kit 1.0 can grow without a core fork

- **Extensions** add commands and workflows; bundled examples cover bug fixing, idea assessment, Git, and agent context
- **Presets** override templates, terminology, or governance; a built-in `lean` preset supports lighter-weight use
- **Bundles** package versioned extensions, presets, steps, and workflows for a role or team setup
- **Project-local overrides** take precedence when one repository needs a specific variation

<!--
[Sources]
- https://github.com/github/spec-kit#-making-spec-kit-your-own-extensions--presets
- https://github.com/github/spec-kit#-bundles-role-based-setups
- https://github.com/github/spec-kit/blob/main/pyproject.toml
-->

---

# Adopt brownfield with one bounded change

```bash
specify init --here --force --integration copilot
```

1. Commit or stash first, initialize on a branch, and review the generated diff
2. Build the constitution from repository evidence, not aspirational boilerplate
3. Choose a feature, fix, or modernization slice that can be reviewed independently
4. Plan against the existing architecture, then decide how completed specs should age

<!--
[Sources]
- https://github.com/github/spec-kit/blob/main/docs/guides/existing-projects.md
-->

---

# Traceability is not proof of correctness

- A complete artifact chain can still encode the wrong product decision
- `analyze` checks artifact consistency; `converge` assesses implementation coverage
- Neither replaces automated tests, security review, observability, CI, or code review
- Agent portability does not define team ownership: decide who approves specs, plans, and completion

<!--
[Sources]
- https://github.com/github/spec-kit/blob/main/templates/commands/analyze.md
- https://github.com/github/spec-kit/blob/main/templates/commands/converge.md
- https://github.com/github/spec-kit/blob/main/docs/guides/existing-projects.md
-->

---

# Kiro integrates specs across IDE, CLI, and Web

- A unified agent harness with IDE, CLI, and Web surfaces
- Feature Specs produce `requirements.md`, `design.md`, and `tasks.md` under `.kiro/specs/`
- Choose requirements-first, design-first, or a lighter **Quick Spec** flow
- Steering, hooks, MCP servers, and custom agents share the same `.kiro/` context

<!--
[Sources]
- https://kiro.dev/docs/
- https://kiro.dev/docs/specs/feature-specs/
- https://kiro.dev/docs/specs/quick-spec/
-->

---

# BMAD provides a role-rich delivery methodology

- Four phases: optional Analysis, Planning, Solutioning, and Implementation
- Named agents and skills cover product, architecture, UX, development, and review
- Full planning tracks for complex work; Quick Flow for small, understood changes
- Rich workflow customization, with more concepts and operating discipline to learn

<!--
[Sources]
- https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/reference/workflow-map.md
- https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/explanation/named-agents.md
- https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/tutorials/getting-started.md
-->

---

# Choose the operating model before the feature list

- **Kiro** — integrated experience across its IDE, CLI, and Web surfaces
- **Spec Kit** — repository-first, open-source workflow that adapts to many agents
- **BMAD** — role-rich methodology with multiple planning tracks and specialized workflows

Choose based on the control surface, artifact model, team workflow, and customization you are prepared to maintain.

<!--
[Sources]
- https://kiro.dev/docs/
- https://github.com/github/spec-kit
- https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/tutorials/getting-started.md
-->

---
layout: section
---

# Current Limitations of SDD

---

# SDD Challenges: Scaling & Teams

- Workflow overhead must match the change; Spec Kit now offers a shorter path and a `lean` preset, but teams still need judgment
- Repository artifacts enable collaboration, but they do not decide who owns or approves each artifact
- Supporting many agents improves portability, not reproducibility
- Issues, CI gates, releases, and incident feedback still belong to your delivery system

<!--
[Sources]
- https://github.com/github/spec-kit/blob/main/docs/quickstart.md
- https://github.com/github/spec-kit/tree/main/presets/lean
- https://github.github.io/spec-kit/reference/integrations.html
-->

---

# SDD Challenges: Technical & Cultural

- Brownfield adoption is supported, but hidden constraints still require evidence and a bounded first change
- The same spec can still yield different code across models, tools, and runs
- Large repositories can exceed the useful context an agent can reason over at once
- Specs drift unless the team chooses and follows a persistence model
- Writing precise, testable intent is an engineering skill, not a prompt trick

<!--
[Sources]
- https://github.com/github/spec-kit/blob/main/docs/guides/existing-projects.md
- https://github.com/github/spec-kit/blob/main/docs/concepts/spec-persistence.md
-->

---

# Key Takeaways

- **Vibe coding** is an exploration mode, not a delivery lifecycle
- **SDD** makes intent and acceptance criteria the primary artifacts
- **Spec Kit** offers a shorter path and a full path with explicit quality gates
- GitHub Copilot uses skills by default; the artifacts still live in your repository
- **Implement ⇄ Converge** improves traceability, but humans still verify correctness
- Start with one bounded feature and review the entire chain

<!--
[Sources]
- https://github.com/github/spec-kit
- https://github.com/github/spec-kit/blob/main/docs/quickstart.md
- https://github.com/github/spec-kit/blob/main/docs/guides/existing-projects.md
-->

---
layout: quote
---

# The goal is not more documents.

A reviewable chain from intent to evidence.

**Specify → Plan → Tasks → Implement ⇄ Converge**

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
social3: emanueleb@outlook.com

---

---
layout: center
class: text-center
---

<div class="w-full flex items-center justify-center">
  <img
    src="./feedback/goodbye-vibe-coding-hello-spec-driven-development_bartolesi_1053444_feedback-code.png"
    alt="Feedback code"
    class="max-w-full max-h-[470px] object-contain"
  />
</div>
