---
name: push-to-dual-repos
description: "**WORKFLOW SKILL** — Push project changes to both personal and company GitHub repositories. USE FOR: dual-repo deployments, maintaining separate personal and company codebases. DO NOT USE FOR: single repo pushes, initial repo setup. INVOKES: git commands for staging, committing, and pushing to multiple remotes."
---

# Push to Dual Repositories

## Overview

This skill guides you through pushing your project changes to both your personal GitHub repository and the company repository, handling the differences in their policies (direct push vs. pull request).

## Prerequisites

- Git repository initialized with remotes set up:
  - `origin`: https://github.com/07Dhaval/Exotic-Infotech.git (personal)
  - `company`: https://github.com/Exotic9297/Company-website.git (company)
- All changes committed locally

## Step-by-Step Process

### 1. Stage and Commit Changes

```bash
git add -A
git commit -m "Your commit message"
```

### 2. Push to Personal Repository

```bash
git push origin main
```

This pushes directly to your personal repo's main branch.

### 3. Create Feature Branch for Company Repository

```bash
git checkout -b feature/your-feature-name
```

Replace `your-feature-name` with a descriptive name for your changes.

### 4. Push Feature Branch to Company Repository

```bash
git push company feature/your-feature-name -u
```

### 5. Create Pull Request

Visit: https://github.com/Exotic9297/Company-website/pull/new/feature/your-feature-name
Fill out the PR details and submit for review.

## Handling Large Files

If you encounter "file too large" errors:

1. Remove large files from Git history:
   ```bash
   git filter-branch --force --index-filter 'git rm -r --cached --ignore-unmatch large-file.zip' --prune-empty --tag-name-filter cat -- --all
   git reflog expire --expire=now --all
   git gc --prune=now --aggressive
   ```
2. Re-push to both repositories following the steps above.

## Common Issues

- **Rejected push to company/main**: Company repo requires PRs. Always use feature branches.
- **Unrelated histories**: If repos have diverged, use `git pull --allow-unrelated-histories` or rebase.
- **Large files**: Use Git LFS for large assets or remove them from history.

## Example Usage

After making changes to your website:

1. Commit: `git commit -m "Add new homepage section"`
2. Push to personal: `git push origin main`
3. Create branch: `git checkout -b add/homepage-section`
4. Push to company: `git push company add/homepage-section -u`
5. Create PR on GitHub

This ensures your personal repo stays up-to-date while company changes go through proper review.
