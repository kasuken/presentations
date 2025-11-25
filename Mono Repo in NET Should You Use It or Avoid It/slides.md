---
# try also 'default' to start simple
theme: the-unnamed
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Mono Repo in .NET - Should You Use It or Avoid It?
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# duration of the presentation
duration: 50min
---


# Mono Repo in .NET: Should You Use It or Avoid It?

### The good, the bad, and the ugly of .NET monorepos.

<div class="abs-br m-6 flex gap-2">
  <span class="text-xl">Emanuele Bartolesi</span>
</div>

---
layout: center
class: text-center
---

<div class="text-5xl font-light leading-tight">
  "Imagine this: you have to make a one-line change to a shared library.
  How many pull requests do you have to open?
  How many deployments do you have to coordinate?
  For many of us, the answer is 'too many'."
</div>

---
layout: default
---

# The Maintenance Trap

## Multi-repo setups often lead to:

-   Dependency conflicts
-   Code duplication
-   Huge effort for cross-cutting changes
-   Slowed developer velocity

---
layout: default
---

# Our Goal Today

## Empower you to make an informed decision:

-   Explore the monorepo approach
-   Understand its trade-offs
-   Decide if it's right for *your* team and projects

---
layout: default
---

# What is a Monorepo?

## A single repository containing multiple, distinct projects.

-   **Not a monolith:** Independent applications/services, separate deployments.
-   **Code lives together:** Dependencies are project references.

---
layout: image-right
image: /path/to/dependency-graph-comparison.png
---

# Monorepo vs. Multi-repo

## (Show 'Dependency Graph Comparison' visual)

-   **Multi-repo:** Complex web of external dependencies.
-   **Monorepo:** Cleaner, internal project references.

<div class="text-sm text-gray-500 mt-4">
  Proven strategy used by Google, Microsoft, Facebook for massive codebases.
</div>

---
layout: default
---

# The Good: Why Consider a Monorepo?

## Streamlined Development:

-   **Centralized Dependency Management:**
    -   Single version policy for NuGet packages.
    -   No more "dependency hell."
-   **Atomic Changes & Refactoring:**
    -   Update shared libraries and consumers in one commit.
    -   (Start 'Atomic Refactoring Demo')
-   **Enhanced Code Sharing & Collaboration:**
    -   Easy reuse of code, foster cross-team contributions.
    -   (Start 'Seamless Code Sharing Demo')
-   **Unified CI/CD:**
    -   Single pipeline for consistent builds, tests, and deployments.

---
layout: default
---

# The Bad: Scalability Challenges

## Performance Bottlenecks:

-   **Git Performance:**
    -   Slower clone, fetch, pull operations for large repos.
-   **IDE Performance:**
    -   Visual Studio/Rider can struggle with many projects.
-   **Build Times:**
    -   (Show 'Build Time Metrics' data)
    -   Building everything on every commit is slow.

---
layout: default
---

# The Bad: Scalability Challenges

## Mitigation with Smart Tooling:

-   **Intelligent CI/CD:**
    -   Build and test only affected projects.
    -   (Start 'Smart CI/CD Pipeline Demo')
-   **Investment Required:**
    -   Smart tooling is crucial for monorepo success at scale.

---
layout: default
---

# The Ugly: Hidden Complexities

## Unexpected Hurdles:

-   **Access Control & Ownership:**
    -   Harder to manage granular permissions.
    -   Reliance on `CODEOWNERS` and strong culture.
-   **Deployment Coupling:**
    -   Risk of distributed monoliths if not careful.
    -   Requires careful CI/CD design for independent deployments.
-   **Steeper Learning Curve:**
    -   (Tell 'New Developer Onboarding' story)
    -   Overwhelming for new team members.
-   **Cultural Shift:**
    -   Demands more collaboration and shared ownership.

---
layout: default
---

# Making the Right Choice

## It Depends: A Decision Framework

-   **No one-size-fits-all solution.**
-   **Key Factors:**
    -   **Team Size & Structure:** Overhead vs. benefits.
    -   **Project Coupling:** Interdependence of services.
    -   **Tooling Investment:** Readiness to invest in smart build systems.
-   **Assess your own context:** Make a deliberate, informed decision.

---
layout: default
---

# Conclusion & Q&A

## Core Message:

".NET monorepos simplify code sharing but require disciplined tooling to manage complexity and maintain performance at scale."

---
layout: default
---

# Key Takeaways

1.  **Evaluate monorepos as a powerful tool to simplify dependency management and unify development across multiple .NET projects.**
2.  **Invest in smart build tooling and code ownership strategies early to prevent performance bottlenecks and maintain team autonomy.**
3.  **Choose your repository strategy based on your team's size, project coupling, and willingness to invest in specialized tooling, not just on industry trends.**

---
layout: center
class: text-center
---

# Your Next Step:

## Re-evaluate your current repository strategy.

Don't just follow trends; make an informed decision based on your team's size, project coupling, and willingness to invest in tooling.

---
layout: default
---

# Thank You!