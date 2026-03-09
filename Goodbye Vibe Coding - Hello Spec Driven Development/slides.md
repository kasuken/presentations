---
theme: the-unnamed
background: https://cover.sli.dev
title: Goodbye Vibe Coding, Hello Spec Driven Development
class: text-center
transition: slide-left
comark: true
duration: 50min
---

# Goodbye Vibe Coding, Hello Spec Driven Development

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
layout: two-cols
---

# Vibe Coding Limitations

**Problems:**

- AI doesn't always respect instructions
- Replit Agent deleted a live production database despite code-freeze instructions
- Code quality, readability & maintenance suffer
- 29.5% of Python snippets had security issues (study)

::right::

<br/><br/>

**More Problems:**

- Missing parameter validation / injection risks
- Skips planning, architecture, risk-analysis
- Difficult to debug when things break
- Great for prototyping, **NOT** for production

---

# From Vibe Coding to AI Native Engineering

- What if instead of abandoning AI, we use it as a **real engineering tool**?
- Key principles of AI Native Engineering:
  - **Context-rich input** instead of simple prompts (architecture, coding standards, dependencies)
  - **Human-in-the-loop (HITL)** — humans remain accountable, AI is a collaborator
  - **Divide & conquer** — break systems into modules, assign AI-assisted tasks per scope
- Think of AI as "the friendly intern who can whip up drafts, but you're still the senior engineer"

---
layout: section
---

# Spec-Driven Development (SDD)

---

# SDD: The Core Idea

- Flip the "code first, document later" approach
- The **specification** becomes the driving artifact
- Treat the spec (what + why + constraints) as the **source of truth**
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
layout: two-cols
---

# Spec Kit Workflow

**Setup & Define**

1. Install `specify-cli` into your environment
2. Run `specify init <PROJECT_NAME>` and pick your coding agent
3. Define your "constitution" with `/speckit.constitution` — non-negotiable project rules
4. Write the spec with `/speckit.specify` — declare what & why (not how)

::right::

**Plan & Execute**

5. Generate implementation plan with `/speckit.plan` — tech stack, architecture, dependencies
6. Break into tasks with `/speckit.tasks` — granular actionable items
7. Execute with `/speckit.implement` — AI drafts code/tests/docs for each task
8. You review, test, merge, and integrate like normal

---
layout: two-cols
---

# Other SDD Tools

**Kiro (AWS)**

- An "Agentic AI" IDE from AWS
- Write a goal → Kiro helps plan, design, and build
- Generates `requirements.md`, `design.md`, `tasks.md`
- Supervised or autopilot modes
- Agent hooks for automation + Steering files for conventions
- Great visual UI/UX, easy learning curve

::right::

**BMAD Method**

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
layout: two-cols
---

# Key SDD Challenges

**Scaling & Team Issues**

- Spec overhead doesn't scale for small tasks — no "lightweight spec" path yet
- Most tools are oriented toward individual devs, not full team workflows
- Who owns the spec? How do multiple members collaborate?
- Integration with sprints, agile, CI/CD still immature

::right::

<br>
<br>

**Technical & Cultural**

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