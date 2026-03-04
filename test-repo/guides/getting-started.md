---
title: Getting Started
description: Everything you need to go from zero to a published Statir site in minutes.
date: 2026-01-10
---

# Getting Started

This guide walks you through publishing your first site with Statir.

## Prerequisites

- A Git repository (GitHub, GitLab, Bitbucket, or any public/private Git host)
- At least one `.md` file in your repo
- A Statir account (sign up at [statir.osir.com](https://statir.osir.com))

## Step 1 — Prepare your repository

Your repository only needs Markdown files. Statir discovers them automatically. A minimal structure looks like this:

```
my-repo/
├── README.md
├── guides/
│   └── getting-started.md
└── changelog.md
```

> **Tip:** The first `# heading` in `README.md` becomes the site title if you don't set one in `_config.yml`.

## Step 2 — Open Statir and publish

1. Navigate to **Publish a Site** in the Statir dashboard.
2. Paste your repository URL (e.g. `https://github.com/you/my-repo.git`).
3. Give your project a name — lowercase letters, numbers and hyphens only.
4. Choose a layout:
   - **Classic** — searchable doc grid with rich per-page TOC
   - **Sidebar** — persistent sidebar navigation
   - **Cleanpack** — home + blog + docs bundle
   - **Bare** — plain file list, no JavaScript
5. Click **Publish Site**.

## Step 3 — View your site

Once the status indicator turns **green** in **My Sites**, click **View Site** to open the deployed URL. Share it with anyone — no login required to read.

## Next steps

- See [Configuration](configuration.md) to customise your site title, description and base URL.
- Check the [API Reference](../api/reference.md) if you want to automate publishing.

