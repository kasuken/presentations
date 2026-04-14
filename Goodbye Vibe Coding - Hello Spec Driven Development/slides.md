---
theme: the-unnamed
background: https://cover.sli.dev
title: Goodbye Vibe Coding, Hello Spec Driven Development
class: text-center
transition: slide-left
comark: true
duration: 50min
---

# Goodbye Vibe Coding, <br /> Hello Spec Driven Development

Emanuele Bartolesi

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Are you ready? <carbon:arrow-right />
</div>

<div class="abs-br m-6 text-xl">
  <a href="https://github.com/slidevjs/slidev" target="_blank" class="slidev-icon-btn">
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

# What is Vibe Coding?

- **February 2025**: Andrej Karpathy coined the term **"vibe coding"**
- The idea: describe in plain English what you want, AI builds the code
- No planning, no research, no tradeoff evaluation
- Platforms emerged promising **everyone** can create apps
- Karpathy himself noted: *"this is not really coding"*

---
layout: section
---

# Demo: Vibe Coding in Action

---

# Vibe Coding Limitations

- AI doesn't always respect instructions
- Replit Agent deleted a live production database despite code-freeze instructions
- Code quality, readability & maintenance suffer
- 29.5% of Python snippets had security issues (study)
- Missing parameter validation / injection risks
- Skips planning, architecture, risk-analysis
- Difficult to debug when things break
- Great for prototyping, **NOT** for production

---

# From Vibe Coding to AI Native Engineering

- What if instead of abandoning AI, we use it as a **real engineering tool**?
- Think of AI as "the friendly intern who can whip up drafts, but you're still the senior engineer"

---

# AI Native Engineering Principles

- **Context-rich input** instead of simple prompts (architecture, coding standards, dependencies)
- **Human-in-the-loop (HITL)** — humans remain accountable, AI is a collaborator
- **Divide & conquer** — break systems into modules, assign AI-assisted tasks per scope

---
layout: section
---

# Demo: AI Native Engineering Workflow

---
layout: section
---

# Spec-Driven Development (SDD)

---

# SDD: The Core Idea

- Flip the "code first, document later" approach
- The **specification** becomes the driving artifact
- Treat the spec (what + why + constraints) as the **source of truth**

---

# SDD: How It Works

- Give AI the spec + context → AI generates code, tests, tasks
- Humans validate, evolve the spec, steer the AI
- **No full autonomous control** — review everything
- Core workflow: **Specify → Plan → Tasks → Implement**

---
layout: section
---

# Spec Kit by GitHub

---

# What is Spec Kit?

- A **flexible, open-source** command-based framework for Spec-Driven Development
- A lightweight shell around your favorite AI coding assistant
- **Tool-agnostic**: works with GitHub Copilot, Claude Code, and other AI agents
- No vendor lock-in — no proprietary platform required
- Install a small CLI (`specify-cli`), use slash-commands in your IDE
- Scaffolds **specs → plans → tasks** instead of diving straight into code

---

# Spec Kit Workflow: Setup & Define

1. Install `specify-cli` into your environment
2. Run `specify init <PROJECT_NAME>` and pick your coding agent
3. Define your "constitution" with `/speckit.constitution` — non-negotiable project rules
4. Write the spec with `/speckit.specify` — declare what & why (not how)

---

# Spec Kit Workflow: Plan & Execute

5. Generate implementation plan with `/speckit.plan` — tech stack, architecture, dependencies
6. Break into tasks with `/speckit.tasks` — granular actionable items
7. Execute with `/speckit.implement` — AI drafts code/tests/docs for each task
8. You review, test, merge, and integrate like normal

---
layout: section
---

# Demo: Spec Kit in Action

---

# Step 1: Installation & Project Setup

- **GitHub repo**: [github.com/github/spec-kit](https://github.com/github/spec-kit)
- Install with `uvx` or download the template from **Releases** on GitHub
- After init, your project gets two key folders:
  - **`.github/`** — contains a set of prompts used by Spec Kit
  - **`.specify/`** — contains the important files for Spec Kit (specs, plans, tasks)
- Everything is file-based and version-controllable

---

# Step 2: The Constitution File

- The **constitution** defines your **non-negotiable principles** for the project
- Examples: _"always write tests"_, _"use HTTP calls for APIs instead of SDKs"_, _"follow accessibility standards"_
- Use Agent Mode to fill it from a prompt:

> "Fill the constitution file with the bare minimum requirements for a static web app based on the template."

- Run the command:

```
/speckit.constitution
```

- Review and adjust — this becomes the guardrail for all AI-generated code

---

# Step 3: Write the Spec

- Use `/speckit.specify` to declare **what** you want and **why** — not the technical how
- Example prompt:

> "I am building a modern podcast website. Should have a landing page with a featured episode, an Episodes page, an About page and a FAQ page. All the data is mocked."

```
/speckit.specify
```

- No technologies are described here — just the **feature requirements**
- For things that need clarification: _"use the best guess you think is reasonable. Update acceptance checklist after."_

---

# Step 4: Create the Plan

- Use `/speckit.plan` to define the **how** — tech stack, architecture, dependencies
- Now you bring in the technical choices:

> "I am gonna use Blazor Server (.NET 10) and MudBlazor for the UI, mock data everywhere. App is responsive and ready for mobile."

```
/speckit.plan
```

- The plan converts your spec into architecture decisions, module breakdown, and dependency choices
- Review and edit before moving to tasks

---

# Step 5: Break Down into Tasks

- Use `/speckit.tasks` to create **granular, actionable work items**

```
/speckit.tasks
```

> "Break this down into tasks"

- Each task links back to the spec and plan
- Tasks include: component creation, data mocking, page layouts, tests, docs

---

# Step 6: Implement

- **Start a new chat session** for implementation
- Select a strong coding model (e.g., **Claude Sonnet 4.6**)

```
/speckit.implement
```

- The AI drafts code, tests, and docs for each task — within the context of your spec + plan + tasks
- You still **review, test, merge, and integrate** like normal

---

# Spec Kit for Existing Projects

- Run `/speckit.constitution` for existing projects too — establish your guardrails
- Run `/speckit.analyse` after creating a spec — validates against your constitution
- Tell the AI to **update the spec** after iterating on it

---

# Brownfield Considerations

- For complex existing projects, a single constitution may not capture enough context
- Without existing `/specification` files, future specs may lack important constraints
- `/analyse` compares against the constitution — if the constitution isn't context-aware enough, the analysis may miss gaps
- **Start with the constitution, iterate, and enrich it over time**

---

# Other SDD Tools: Kiro (AWS)

- An "Agentic AI" IDE from AWS
- Write a goal → Kiro helps plan, design, and build
- Generates `requirements.md`, `design.md`, `tasks.md`
- Supervised or autopilot modes
- Agent hooks for automation + Steering files for conventions
- Great visual UI/UX, easy learning curve

---

# Other SDD Tools: BMAD Method

- Full end-to-end open-source SDD workflow
- Distinct AI agents: Analyst, PM, Architect, Developer, Scrum Master
- Analysis → Planning → Solutioning → Implementation
- Highest flexibility and customization
- No vendor lock-in
- Steeper learning curve, but most powerful

---

# What Should I Use?

- **Kiro** — Best for guided, visual experience inside an IDE. Great guardrails, friendly interface. Tradeoff: new IDE environment
- **Spec Kit** — Simple to install, easy to layer on existing AI agent. Low vendor lock-in, gentle learning curve. Perfect "lightweight SDD starter kit"
- **BMAD** — Full power, complete customizable workflow. Manages entire lifecycle with custom agents. Highest flexibility, but requires most discipline
- Choose based on: **UI/UX preference, vendor lock-in tolerance, learning curve, customization needs**

---
layout: section
---

# Current Limitations of SDD

---

# SDD Challenges: Scaling & Teams

- Spec overhead doesn't scale for small tasks — no "lightweight spec" path yet
- Most tools are oriented toward individual devs, not full team workflows
- Who owns the spec? How do multiple members collaborate?
- Integration with sprints, agile, CI/CD still immature

---

# SDD Challenges: Technical & Cultural

- Legacy/brownfield systems are harder — SDD works best for greenfield
- Reproducibility issues: same spec → different code from different agents
- Context window limitations with large codebases
- Writing good, actionable specs is a new skill teams need to learn
- Risk of tool fatigue with rapidly evolving ecosystem

---

# Key Takeaways

- **Vibe coding** is fun for prototyping, but not production-ready
- **AI Native Engineering** = AI as collaborator, not magic box
- **SDD** = Specify → Plan → Tasks → Implement with human review
- **Spec Kit** brings lightweight, tool-agnostic SDD to your existing workflow
- The methodology is emerging — expect rapid improvements
- Start small: try SDD on your next feature, iterate from there

---
layout: quote
---

# "Move fast and break things" was the old motto. "Specify first, build right" is the new one.

Stop vibing. Start specifying.

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

---
layout: center
class: text-center
---

<div class="w-full flex items-center justify-center">
  <img
    src="./feedback/goodbye-vibe-coding-hello-spec-driven-development_bartolesi_1053444_feedback-code.png"
    alt="Feedback code"
    class="max-w-full max-h-[80vh] object-contain"
  />
</div>