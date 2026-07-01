---
theme: the-unnamed
title: Stop Using GitHub Copilot Like a Toy
transition: slide-left
drawings:
  persist: false
---

# Stop Using GitHub Copilot Like a Toy

GitHub Copilot is easy to love in a demo. Real projects are different.

<!-- notes:
- Set the frame: this talk is about production usage, not toy examples.
-->

---
layout: center
---

# What happens when your best Copilot demo meets your messiest production repo?

---
layout: section
---

# The gap is not just model quality

It is **workflow quality**.

---

# Real projects break the demo illusion

<v-clicks>

- Legacy code with hidden assumptions
- Inconsistent patterns across teams and years
- Half-written requirements
- Pressure to ship without widening risk

</v-clicks>

---
layout: two-cols
---

# Demo world

- Clean files
- Obvious task
- Curated context
- One right answer

::right::

# Production world

- Legacy surfaces
- Missing context
- Local conventions
- Tradeoffs everywhere

---

# Autocomplete is not the interesting part

The leverage starts when Copilot understands:

<v-clicks>

- Repository context
- Team constraints
- Validation steps
- Repeatable workflows

</v-clicks>

---
layout: center
---

# Example 1: Copilot Instructions in a frontend monorepo

Scenario: a React team keeps getting tests, stories, and accessibility details wrong in `apps/storefront/**`.

---
layout: two-cols
---

# The instruction file

```md
---
description: "Use when editing React storefront
  code, checkout UI, or component tests.
  Follow accessibility and test conventions."
applyTo: "apps/storefront/**/*.{ts,tsx}"
---
# Storefront UI Rules

- Use React Testing Library, not Enzyme
- Prefer `screen.getByRole()` over test IDs
- Never remove analytics events
  from checkout steps
- Match existing design tokens
  from `ui/theme.ts`
```

::right::

# Why this is real value

<v-clicks>

- It removes repeated prompt boilerplate
- It keeps Copilot aligned with local rules
- It prevents subtle regressions in high-risk flows

</v-clicks>

<!-- notes:
- Emphasize that this is useful because the repo has hidden rules.
- This is not about style bikeshedding.
-->

---
layout: center
---

# Example 2: Instructions for a migration-heavy backend

Scenario: a platform team ships database migrations weekly and wants Copilot to stop suggesting unsafe shortcuts.

---
layout: two-cols
---

# The instruction file

```md
---
description: "Use when writing database
  migrations, backfills, or schema changes
  in billing services."
applyTo: "services/billing/db/migrations/**/*.ts"
---
# Migration Safety Rules

- All migrations must be reversible
- Never drop a column in the same
  release as code removal
- Backfills must be batched and resumable
- Add a rollback note in the PR summary
```

::right::

# Why teams care

<v-clicks>

- Safer defaults in a dangerous part of the codebase
- Better first drafts under deadline pressure
- Fewer reviewer comments on repeated mistakes

</v-clicks>

---
layout: center
---

# Example 3: A custom agent for incident follow-up

Scenario: after a Sev 2 incident, engineers need help tracing logs, finding the owning service, and drafting a narrow fix plan.

---
layout: two-cols
---

# The custom agent

```md
---
description: "Use for incident follow-up,
  log-driven debugging, or narrowing
  rollback-safe fixes in backend services."
tools: [read, search, execute, todo]
model: "GPT-5 (copilot)"
user-invocable: true
---
You are an incident follow-up specialist.

1. Start from logs, alerts, or a failing
   endpoint
2. Find the owning code path
3. Propose the smallest rollback-safe change
4. Suggest the fastest validation check
```

::right::

# Why not just use chat?

<v-clicks>

- It creates a reusable specialist role
- It narrows the toolset to the job
- It makes post-incident work more consistent

</v-clicks>

---
layout: center
---

# Example 4: A skill for legacy bug fixing

Scenario: a Java service has years of patch layers, unclear ownership, and weak docs. The hard part is finding the real control point.

---
layout: two-cols
---

# The skill structure

```text
.github/skills/legacy-bugfix/
├── SKILL.md
├── references/checklist.md
└── assets/bug-report-template.md
```

```md
---
name: legacy-bugfix
description: "Use for tracing legacy bugs,
  finding the owning abstraction,
  and validating a minimal safe fix."
---
```

::right::

# What the skill adds

<v-clicks>

- A repeatable investigation procedure
- A checklist for disconfirming bad hypotheses
- Reusable assets for under-specified bug reports

</v-clicks>

---
layout: center
---

# Example 5: A prompt for upgrading weak requests

Scenario: developers keep typing vague asks like "optimize this" or "add error handling" in a huge repository.

---
layout: two-cols
---

# The prompt file

```md
---
name: "Upgrade Copilot Request"
agent: "ask"
description: "Turn a weak Copilot request
  into a repository-aware task brief
  with constraints and validation."
---

Rewrite this request so it works
in a real repo:
- add missing local context
- state key constraints
- ask for tradeoffs if underspecified
- end with the fastest useful
  validation step
```

::right::

# Where this helps

<v-clicks>

- Onboarding junior developers
- Reducing noisy prompt habits
- Standardizing higher-signal Copilot usage

</v-clicks>

---
layout: center
---

---
layout: section
---

# Instructions, agents, skills, prompts, and CLI are not "extra features"

They are how Copilot starts fitting real engineering work.

---

# What good usage looks like in production

<v-clicks>

- Repo-aware guidance instead of generic prompts
- Specialist workflows instead of improvisation
- Small changes plus fast validation
- Team patterns that survive beyond one power user

</v-clicks>

---
layout: center
---

# "Stop judging Copilot by the demo version. Judge it by whether it helps you ship in the messy version of reality."

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