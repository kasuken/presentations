---
# try also 'default' to start simple
theme: the-unnamed
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Software Delivery is about to get uncomfortable
class: text-center
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


# Software Delivery is about to get uncomfortable

AI agents, platforms, policy, security automation, and the next DevOps shift


<!-- notes:
Set expectation: this will move quickly from thesis to demos.
-->

---
layout: center
class: text-center
---

<div class="text-5xl leading-tight font-light">
Software delivery is no longer just about faster pipelines.
</div>

<v-click>
<div class="mt-10 text-3xl opacity-75">
It is becoming the decision system between idea and impact.
</div>
</v-click>

<!-- notes:
Pause after the first sentence.
-->

---
layout: center
---

# The new map

<div class="mt-8 grid grid-cols-7 gap-2 text-center text-sm">
  <div class="border rounded p-3">Idea</div>
  <div class="border rounded p-3">Agent</div>
  <div class="border rounded p-3">Platform</div>
  <div class="border rounded p-3">Policy</div>
  <div class="border rounded p-3">Security</div>
  <div class="border rounded p-3">Deploy</div>
  <div class="border rounded p-3">Feedback</div>
</div>

<div class="mt-10 text-2xl opacity-70">
The SDLC becomes a connected decision system.
</div>

---
layout: two-cols
---

# Old frame

<div class="mt-6 text-3xl font-light">How fast can code move?</div>

- Build speed
- Pipeline speed
- Deployment speed
- Recovery speed

::right::

# New frame

<div class="mt-6 text-3xl font-light">Which decisions can we trust?</div>

- Intent
- Constraints
- Guardrails
- Feedback

---
layout: center
class: text-center
---

<div class="text-4xl font-light leading-tight">
One change. Four demos. One uncomfortable question.
</div>

<v-click>
<div class="mt-10 text-4xl">
Who gets to decide?
</div>
</v-click>

---
layout: center
---

# Demo 1: AI agents change implementation

<div class="mt-10 text-3xl font-light">
Start with intent, not code.
</div>

<!-- notes:
Demo target: prompt/task -> generated change -> reviewable PR.
Fallback: screenshots of prompt, diff, and PR checks.
-->

---
layout: center
class: text-center
---

<div class="text-5xl font-light leading-tight">
With agents, you always have a team.
</div>

<v-click>
<div class="mt-10 text-3xl opacity-75 leading-snug">
A team whose development style, defaults, and decision patterns you can make explicit.
</div>
</v-click>

<v-click>
<div class="mt-8 text-3xl opacity-75 leading-snug">
Not a team shaped by mood, hype, or whoever had the strongest opinion today.
</div>
</v-click>

---

# The agent needs a decision brief

- Outcome
- Constraints
- Repository context
- Definition of done
- Validation expectations

---
layout: center
class: text-center
---

<div class="text-6xl font-light">
Plausible is not trusted.
</div>

<div class="mt-8 text-xl opacity-70">
The review moves from "does it compile?" to "which decisions are still hidden?"
</div>

---
layout: center
class: text-center
---

<div class="text-5xl font-light leading-tight">
Agents don't fail.
</div>

<v-click>
<div class="mt-8 text-5xl font-light leading-tight">
Your SDLC fails them.
</div>
</v-click>

<v-click>
<div class="mt-10 text-2xl opacity-75">
Only 35.7% of rejected agentic PRs were actual agent failures.
</div>
</v-click>

<!-- notes:
Most teams stop at upgrading the model. That is the wrong lever.
-->

---
layout: two-cols
---

# What the evidence says

<div class="mt-6 text-6xl font-light">35.7%</div>

Actual agent failures in rejected agentic PRs.

::right::

# What else was happening

<div class="mt-6 text-6xl font-light">31.2%</div>

Workflow and process closures:

- Duplicates
- Superseded work
- Inactivity
- Test PRs
- Incorrect submission context

<!-- notes:
Peralta et al. (2026) manually inspected 717 representative agentic PR cases, including 353 rejected PRs, with two independent reviewers and strong agreement.
-->

---
layout: center
class: text-center
---

<div class="text-5xl font-light leading-tight">
That second category is worth sitting with.
</div>

<v-click>
<div class="mt-10 text-2xl opacity-75">
Duplicates, stale submissions, and coordination noise are pipeline problems.
</div>
</v-click>

<v-click>
<div class="mt-8 text-2xl opacity-75">
A stronger model does not fix your coordination layer.
</div>
</v-click>

---
layout: center
---

# Demo 2: Platform engineering changes the path

<div class="mt-10 text-3xl font-light">
The paved road is delivery infrastructure.
</div>

<!-- notes:
Demo target: service template, golden path, developer portal, or self-service workflow.
Fallback: static platform walkthrough.
-->

---
layout: center
---

# A good platform encodes decisions

<div class="grid grid-cols-3 gap-4 mt-8 text-center">
  <div class="border rounded p-4">Repo shape</div>
  <div class="border rounded p-4">CI defaults</div>
  <div class="border rounded p-4">Environments</div>
  <div class="border rounded p-4">Observability</div>
  <div class="border rounded p-4">Ownership</div>
  <div class="border rounded p-4">Deployment path</div>
</div>

---
layout: center
class: text-center
---

<div class="text-5xl font-light leading-tight">
Developer experience changes behavior.
</div>

<v-click>
<div class="mt-10 text-2xl opacity-75">
If the right path is painful, teams route around it.
</div>
</v-click>

---
layout: center
---

# Demo 3: Policy-as-code and security automation change the gates

<div class="mt-10 text-3xl font-light">
Governance becomes executable feedback.
</div>

<!-- notes:
Demo target: policy check, security scan, and exception path.
Fallback: screenshots of pass/fail/exception outputs.
-->

---
layout: two-cols
---

# Late gate

- Manual approval
- Security review after the work
- Hidden rules
- Release pressure

::right::

# Executable feedback

- Policy check
- Security signal
- Clear reason
- Traceable exception

---
layout: center
class: text-center
---

<div class="text-5xl font-light leading-tight">
Automation does not remove judgment.
</div>

<div class="mt-8 text-2xl opacity-70">
It changes where judgment happens.
</div>

---
layout: center
---

# Demo 4: Deployment and feedback change decisions

<div class="mt-10 text-3xl font-light">
Deployment is not the end of delivery.
</div>

<!-- notes:
Demo target: guarded release plus production signal.
Fallback: static progressive-delivery timeline and dashboard screenshot.
-->

---
layout: center
---

# Guarded release

<div class="grid grid-cols-4 gap-4 mt-8 text-center">
  <div class="border rounded p-4">Feature flag</div>
  <div class="border rounded p-4">Canary</div>
  <div class="border rounded p-4">Health check</div>
  <div class="border rounded p-4">Rollback</div>
</div>

<div class="mt-10 text-xl opacity-70">
The release path becomes part of the decision design.
</div>

---
layout: center
---

# Feedback must change the next decision

<div class="grid grid-cols-4 gap-4 mt-8 text-center">

  <div class="border rounded p-4">Update the backlog</div>
  <div class="border rounded p-4">Improve the agent context</div>
  <div class="border rounded p-4">Adjust the platform template</div>
  <div class="border rounded p-4">Tune the policy</div>
</div>

---
layout: center
class: text-center
---

<div class="text-5xl font-light leading-tight">
The next DevOps shift is not only technical.
</div>

---
layout: center
---

# Responsibilities move

<div class="grid grid-cols-3 gap-4 mt-8 text-center text-lg">
  <div class="border rounded p-5">Developers shape intent and review decisions</div>
  <div class="border rounded p-5">DevOps teams design guardrails and feedback loops</div>
  <div class="border rounded p-5">Platform teams encode the paved road</div>
</div>

---
layout: center
class: text-center
---

<div class="text-4xl font-light leading-tight">
Tools are not just tools anymore.
</div>

<v-click>
<div class="mt-10 text-4xl">
They encode engineering decisions.
</div>
</v-click>

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