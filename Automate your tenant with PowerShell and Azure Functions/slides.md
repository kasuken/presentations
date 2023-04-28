---
# try also 'default' to start simple
theme: slidev-theme-dotnet-junkie
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
# use UnoCSS
css: unocss
---

# Automate your tenant with PowerShell and Azure Functions

Microsoft MVP & GitHub Star ⭐

Emanuele Bartolesi

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Let'start <carbon:arrow-right class="inline"/>
  </span>
</div>

---
transition: slide-left
---

# What is an Azure Function?

Azure Functions are serverless applications that run on-demand in response to events or triggers. They are great for building microservices, integrations, or automation tasks.

---
transition: slide-left
---

# Pre-requisites

- Azure Subscription
- Azure Functions Core Tools
- PowerShell 7.2
- .NET 6.0 runtime
- Visual Studio Code
- PowerShell extension for Visual Studio Code
- Azure Functions extension
- Azurite Extension for Visual Studio Code


---

# References

- https://learn.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-powershell
- https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-powershell
- https://learn.microsoft.com/en-us/azure/azure-functions/functions-develop-local
- https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azurite?tabs=visual-studio-code
- https://arminreiter.com/2017/02/azure-functions-time-trigger-cron-cheat-sheet/

---
transition: slide-up
layout: speaker-info

headerMessage: Thanks for all the fish.
speakerName: Emanuele Bartolesi
imageSrc: https://bit.ly/3V4bBPA
jobTitle: Microsoft 365 Architect
info1: Microsoft MVP & GitHub Star ⭐
info2: 
social1: kasuken
social2: emanuelebartolesi.com
social3: emanueleb@outolook.com
---