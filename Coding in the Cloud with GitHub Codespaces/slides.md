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

# Coding in the Cloud with GitHub Codespaces

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

# What is GitHub Codespaces?

GitHub Codespaces is a cloud-based development environment that lets you code from anywhere.

It's a fully-featured IDE that runs in the cloud, and it's free for public repositories.

- 🍔 Ready to use development environment
- 🌍 Accessible from anywhere
- 💻 You can develop from your cell phone!
- 📱 You can develop from iPad!
- 😱 Develop from your Chromebook!
- ⌛ Reduced configuration time
- 🦺 Don't keep sources local


---
transition: slide-left
---

# What you can do with Codespaces

- 🔒 Every developer can create their own Codespaces
- 🙅🏻‍♂️ No one can access your Codespaces
- 🐣 Each Codespaces is associated with a project or branch
- 👨🏻‍💻 You can work directly online
- 🦄 You can connect to Codespaces with Visual Studio Code
- 🚀 You can connect to Codespaces with Visual Studio 2019/2022
- 🤞 You can connect to Codespaces with JetBrains Rider
- 🎨 You can configure your container as you want

---
# Demo

---

# devcontainer.json
machine type

```json
"hostRequirements": {
   "cpus": 8,
   "memory": "8gb",
   "storage": "32gb"
}

```

---

# devcontainer.json
features

```json
"features": {
     "ghcr.io/devcontainers/features/terraform:1": {
         "version": "1.1",
         "tflint": "latest"
     },
}

```

---

# devcontainer.json
open files

```json
"customizations": {
  "codespaces": {
    "openFiles": [
      "README.md",
      "scripts/tsconfig.json",
      "docs/main/CODING_STANDARDS.md"
    ]
  }
}

```

---

# devcontainer.json

```json
{
  "name": "C# (.NET)",
  // Or use a Dockerfile or Docker Compose file. More info: https://containers.dev/guide/dockerfile
  "image": "mcr.microsoft.com/devcontainers/dotnet:0-7.0",
  "features": {
    "ghcr.io/devcontainers/features/dotnet:1": {}
  },

  // Use 'forwardPorts' to make a list of ports inside the container available locally.
  "forwardPorts": [5000],
  // "portsAttributes": {
  //   "5001": {
  //     "protocol": "https"
  //   }
  // }

  // Use 'postCreateCommand' to run commands after the container is created.
  "postCreateCommand": "dotnet restore",

  // Configure tool-specific properties.
  "customizations": {
    // Configure properties specific to VS Code.
    "vscode": {
      // Add the IDs of extensions you want installed when the container is created.
      "extensions": [
        "streetsidesoftware.code-spell-checker"
      ]
    }
  }
}

```

---

# References

- https://github.com/features/codespaces
- https://docs.github.com/en/free-pro-team@latest/github/developing-online-with-codespaces/about-codespaces
- https://github.com/microsoft/vscode-dev-containers/tree/master/containers/codespaces-linux
- https://code.visualstudio.com/docs/remote/devcontainerjson-reference
- https://github.com/microsoft/vscode-dev-containers

---
<!-- transition: slide-up
layout: image-left
image: https://media.licdn.com/dms/image/C4E22AQF3xVz48u-aZw/feedshare-shrink_2048_1536/0/1674116926286?e=1681948800&v=beta&t=IvluYJWS8Fj7FagnBzb6ozNjD_oeYtx3PrncCy6YW00
---

# About me

## Emanuele Bartolesi
Microsoft 365 Architect<br />
Microsoft MVP & GitHub Star ⭐

@kasuken<br />
emanueleb@outlook.com -->

---
transition: slide-up
layout: speaker-info

headerMessage: Thanks for all the fish.
speakerName: Emanuele Bartolesi
imageSrc: https://media.licdn.com/dms/image/C4E22AQF3xVz48u-aZw/feedshare-shrink_2048_1536/0/1674116926286?e=1681948800&v=beta&t=IvluYJWS8Fj7FagnBzb6ozNjD_oeYtx3PrncCy6YW00
jobTitle: Microsoft 365 Architect
info1: Microsoft MVP & GitHub Star ⭐
info2: 
social1: kasuken
social2: emanuelebartolesi.com
social3: emanueleb@outolook.com
---