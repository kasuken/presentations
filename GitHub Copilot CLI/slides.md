---
# try also 'default' to start simple
theme: the-unnamed
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: "GitHub Copilot CLI: Your AI-Powered Terminal Companion"
# apply UnoCSS classes to the current slide
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

# GitHub Copilot CLI

## Your AI-Powered Terminal Companion

Build an app from your terminal. In 45 minutes.

<!-- notes:
- Welcome everyone
- Don't start with meta-talk
- Let the title slide breathe for a moment
-->

---
layout: center
---

# "What if you could build a **real** web app — not a todo list — in 45 minutes, entirely from your terminal?"

<!-- notes:
- Pause 2 seconds after reading
- Scan the room, make eye contact
- Let the audience sit with the question
-->

---
layout: section
---

# What is GitHub Copilot CLI?

AI-powered coding agent in your terminal

<!-- notes:
- "Before we dive in, let's make sure everyone knows what we're working with"
- "Copilot CLI is a standalone terminal tool — not just autocomplete"
-->

---
layout: default
---

### Installation

<v-clicks>

- **Prerequisites:** Node.js 18+ and a GitHub Copilot subscription
- Install globally via npm:

```bash
npm install -g @githubnext/github-copilot-cli
```

- Or download the standalone binary from [github.com/github/copilot-cli](https://github.com/github/copilot-cli)
- Authenticate with your GitHub account:

```bash
copilot auth login
```

</v-clicks>

<!-- notes:
- "Installation takes less than a minute"
- "Make sure you have an active Copilot license — Individual, Business, or Enterprise"
-->

---
layout: default
---

### Launching Copilot CLI

<v-clicks>

- Open any terminal (built-in or external)
- Run `copilot` to start an interactive session
- You'll see a prompt ready for natural language input
- Works on **Windows**, **macOS**, and **Linux**

</v-clicks>

```bash
copilot
```

<!-- notes:
- LIVE DEMO — open terminal and type `copilot`
- Show the welcome message and prompt
- "That's it — you're in. No config files, no setup wizard."
-->

---
layout: default
---

### Agents

<v-clicks>

- Agents define **how** Copilot responds and **what tools** it can use
- Default agent: **general-purpose coding assistant**
- Specialized agents for different tasks (e.g., code review, DevOps, security)
- Switch agents anytime during a session

</v-clicks>

<!-- notes:
- "Think of agents as different modes or personas"
- "Each one has access to different tools and follows different strategies"
-->

---
layout: default
---

### Selecting & switching agents

<v-clicks>

- **At launch:** choose an agent from the startup menu
- **During a session:** use the `/agent` command

```bash
/agent
```

- Browse available agents and select one
- Your conversation context carries over when switching
- Plugins can add **new agents** to the roster

</v-clicks>

<!-- notes:
- LIVE DEMO — run /agent and show the agent picker
- "You can start general and switch to a specialized agent when needed"
- "Plugins extend agents too — install a database plugin, get a database-aware agent"
-->

---
layout: default
---

### Key commands at a glance

| Command | What it does |
|---------|-------------|
| `/agent` | Switch between agents |
| `/ide` | Manage VS Code connection |
| `/fleet` | Run parallel subagents |
| `/tasks` | Monitor background tasks |
| `/clear` | Clear conversation history |
| **Shift+Tab** | Toggle plan mode |

<!-- notes:
- "These are the commands you'll see throughout the talk"
- "Don't memorize them now — we'll use each one live"
- Transition: "Now that we know our tool, let's talk about what we're building"
-->

---
layout: default
---

### Today's mission

<v-clicks>

- Scaffold a full-stack project
- Set up a database & API
- Build a UI with course catalog & payments
- **All from the terminal. With AI.**

</v-clicks>

<!-- notes:
- Click through each point
- Emphasize "All from the terminal" — this is the hook
-->

---
layout: default
---

### Three capabilities that make this possible

<v-clicks>

1. **Plugins** — extend what the CLI can do
2. **VS Code Connection** — share context between terminal & editor
3. **`/fleet`** — parallelize work across AI subagents

</v-clicks>

<!-- notes:
- These are the three pillars of the talk
- We'll cover each one, then put them all together in a live build
-->

---
layout: section
---

# 1. Plugins

Extend what Copilot CLI can do

<!-- notes:
- Section transition slide
- "Copilot CLI is extensible — like extensions in VS Code"
-->

---
layout: default
---

### Plugin ecosystem

<v-clicks>

- Plugins live in **marketplaces**
- Two built-in: `copilot-plugins` and `awesome-copilot`
- You can add your own marketplaces
- Community-contributed & team-internal plugins

</v-clicks>

<!-- notes:
- Explain the concept before showing the demo
- "Think of it like npm packages, but for CLI capabilities"
-->

---
layout: default
---

### Demo: Browse & install plugins

```bash
# List registered marketplaces
copilot plugin marketplace list

# Browse available plugins
copilot plugin marketplace browse awesome-copilot

# Install a plugin
copilot plugin install database-data-management@awesome-copilot
```

<!-- notes:
- LIVE DEMO — switch to terminal
- Run each command and explain the output
- Show the plugin list — "database management, frontend scaffolding, deployment..."
- Install the database plugin for TidaWave Academy
-->

---
layout: default
---

### Managing plugins

```bash
# Install from a Git repo
copilot plugin install OWNER/REPO

# List installed plugins
copilot plugin list

# Update a plugin
copilot plugin update PLUGIN-NAME

# Remove a plugin
copilot plugin uninstall PLUGIN-NAME
```

Stored locally at `~/.copilot/installed-plugins/`

<!-- notes:
- Show these quickly — no need to run each one live
- "You can also install directly from any Git repo"
- "Nothing magical — just packages on disk"
- Transition: "That's plugins. Now let's connect to our editor."
-->

---
layout: section
---

# 2. VS Code Connection

Terminal + Editor = One workflow

<!-- notes:
- Section transition slide
- "Here's where it gets interesting"
-->

---
layout: default
---

### Auto-connect at startup

<v-clicks>

- CLI detects open VS Code workspaces automatically
- Matches your terminal's working directory
- Shows **"Visual Studio Code connected"** at startup
- Works from built-in terminal or external terminal

</v-clicks>

<!-- notes:
- LIVE DEMO — start Copilot CLI from the project directory
- Point to the "Visual Studio Code connected" message
- "If auto-connect doesn't happen, use /ide"
-->

---
layout: default
---

### The `/ide` command

```
/ide
```

<v-clicks>

- View connection status
- Connect to a different workspace
- Disconnect from VS Code
- Toggle auto-connect & diff review settings

</v-clicks>

<!-- notes:
- LIVE DEMO — run /ide and show the menu
- Walk through each option briefly
-->

---
layout: center
---

# "Select code in VS Code. Reference it in a CLI prompt. No file paths. No line numbers."

Editor selection as context

<!-- notes:
- LIVE DEMO — select a block of code in VS Code
- Show the selection indicator in the CLI
- Type "Debug this" or "Add error handling"
- "Copilot knows exactly what code you're referring to"
-->

---
layout: two-cols
---

### Reviewing changes as diffs

<v-clicks>

- AI proposes file edits
- VS Code shows side-by-side diff
- Accept ✓ or reject ✗
- Same flow as a PR review

</v-clicks>

::right::

### Session continuity

<v-clicks>

- View CLI transcripts in VS Code
- Chat panel → Sessions icon
- Right-click → **Resume in Terminal**
- No context lost

</v-clicks>

<!-- notes:
- "This is not two separate tools — it's one workflow across two surfaces"
- Show the Sessions panel in VS Code if time permits
- Transition: "Last capability — and this one is a game changer."
-->

---
layout: section
---

# 3. `/fleet`

Parallel execution with subagents

<!-- notes:
- Section transition slide
- "This is where the magic happens"
-->

---
layout: default
---

### Plan first, build fast

<v-clicks>

1. Press **Shift+Tab** → enter plan mode
2. Describe what you want to build
3. Copilot creates an implementation plan
4. Choose: **"Accept plan + /fleet"**
5. Subagents execute in parallel

</v-clicks>

<!-- notes:
- Walk through the workflow conceptually
- "Plan mode is where you think WITH the AI before it acts"
- Transition: "Now let's put ALL three capabilities together — plugins, VS Code, and /fleet"
-->

---
layout: section
---

# Putting it all together

Plugins + VS Code Connection + /fleet

<!-- notes:
- Section transition slide
- "We've seen the three pillars. Now let's use them to build something real."
-->

---
layout: center
---

# Meet **TidaWave Academy**

An online platform for selling courses

<!-- notes:
- Introduce the app concept
- "Think Udemy or Teachable, but simplified"
-->

---
layout: two-cols
---

### Frontend

- Course catalog & search
- Course detail pages
- Purchase flow

::right::

### Backend

- REST API
- PostgreSQL database
- JWT authentication
- Payment integration

<!-- notes:
- Walk through the feature set quickly
- "This is not a toy project — database, API, frontend, auth, payments"
- "We'll use our database plugin, VS Code for diffs, and /fleet for parallel execution"
-->

---
layout: default
---

### Demo: Building TidaWave Academy

**Prompt to Copilot CLI (plan mode):**

> "Build TidaWave Academy — an online course-selling platform with Next.js frontend, Node.js API, PostgreSQL database, JWT auth, course catalog, course detail page, purchase flow, and instructor dashboard."

<!-- notes:
- LIVE DEMO — this is the main event
- Press Shift+Tab to enter plan mode
- Enter the prompt
- Let Copilot generate the plan
- Walk through the plan sections with the audience
-->

---
layout: center
---

# `/fleet implement the plan`

<!-- notes:
- THE MOMENT — select /fleet option or type the command
- "Watch what happens — Copilot spins up subagents"
- "One scaffolds Next.js. Another writes the schema. A third builds API routes."
- "They're working in PARALLEL"
-->

---
layout: default
---

### Monitor with `/tasks`

<v-clicks>

- Each subagent appears as a background task
- **Enter** → view details
- **K** → kill a process
- **R** → remove completed tasks
- **Esc** → return to prompt

</v-clicks>

<!-- notes:
- LIVE DEMO — run /tasks while subagents are working
- Navigate through the task list
- Show progress updates
- "Meanwhile, look at VS Code — diffs are appearing"
-->

---
layout: center
---

# "The CLI generates. VS Code shows the diffs. You review and approve."

A feedback loop between terminal and editor

<!-- notes:
- Accept a few diffs in VS Code while subagents work
- "Nothing ships without human judgment"
- Pause 3 seconds — let the demo land
-->

---
layout: section
---

# Review & Polish

AI generates. You decide.

<!-- notes:
- "Let's see what got built"
- Switch to VS Code file explorer
-->

---
layout: two-cols
---

### What was generated

<v-clicks>

- Next.js pages (catalog, detail, dashboard)
- API routes (courses, users, enrollments)
- Database schema + migrations
- Auth middleware (JWT)
- Project structure & config

</v-clicks>

::right::

### Review flow

<v-clicks>

- Walk through pending diffs
- Accept what works ✓
- Reject & refine ✗
- Check `/tasks` — all done
- Run the app

</v-clicks>

<!-- notes:
- LIVE DEMO — walk through the project in VS Code
- Show 2-3 diffs, accept some, reject one and explain why
- "Does it run?" — start the app and show it in the browser
-->

---
layout: center
---

# TidaWave Academy is **live**.

Built from scratch. In one session. From the terminal.

<!-- notes:
- Show the running app in the browser
- Click through: catalog, course detail, auth, dashboard
- Let the audience react
- "Let's step back and see the full picture"
-->

---
layout: default
---

### What made this possible

<v-clicks>

**Plugins** → Extended the CLI for database work
`copilot plugin marketplace browse` · `copilot plugin install`

**VS Code Connection** → Shared context, visual diffs, session continuity
`/ide` · editor selection · diff review

**`/fleet`** → Parallel execution with subagents
Plan mode → `/fleet` → `/tasks`

</v-clicks>

<!-- notes:
- Recap the three pillars
- One sentence per capability
- Keep it tight
-->

---
layout: default
---

### Try this week

<v-clicks>

1. **Install a plugin**
   `copilot plugin marketplace browse awesome-copilot`

2. **Connect to VS Code**
   Open a project → start CLI → select code → prompt

3. **Use `/fleet` on a real task**
   Plan mode → `/fleet implement the plan`

</v-clicks>

<!-- notes:
- Three concrete actions
- Each one takes minutes, not hours
- "If you do these three things, you'll see it"
-->

---
layout: default
---

### Learn more

<br>

**Plugins** — [Finding & installing plugins](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing)

**VS Code** — [Connecting to VS Code](https://docs.github.com/en/copilot/how-tos/copilot-cli/connecting-vs-code)

**/fleet** — [Speed up task completion](https://docs.github.com/en/copilot/how-tos/copilot-cli/speed-up-task-completion)

<!-- notes:
- Point to the QR code / links on screen
- "All three doc pages are here — scan and bookmark"
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