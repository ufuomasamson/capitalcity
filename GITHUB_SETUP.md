# GitHub Setup Guide

This guide will help you push your website to GitHub.

## Prerequisites

- Git installed on your computer ([Download Git](https://git-scm.com/downloads))
- GitHub account ([Sign up here](https://github.com/signup))

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the repository details:
   - **Repository name:** `attorney-website` (or any name you prefer)
   - **Description:** "Capital City Advocates website"
   - **Visibility:** Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

## Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

### Option A: If you haven't committed yet (use this)

```bash
git add .
git commit -m "Initial commit: Attorney website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

### Option B: If you already have commits

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 3: Authentication

When you push, GitHub may ask for authentication:

### Using Personal Access Token (Recommended)

1. Go to GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name and select scopes: `repo` (full control)
4. Click "Generate token"
5. Copy the token (you won't see it again!)
6. When Git asks for password, paste the token instead

### Using GitHub CLI (Alternative)

```bash
gh auth login
```

## Step 4: Verify Upload

1. Go to your GitHub repository page
2. You should see all your files (index.html, about.html, contact.html, etc.)
3. Click on `index.html` to view it

## Step 5: Enable GitHub Pages (Optional - Host Your Website)

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"main"** branch
5. Click **"Save"**
6. Your website will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

Wait a few minutes, then visit the URL to see your live website!

## Future Updates

To push updates to GitHub:

```bash
git add .
git commit -m "Description of your changes"
git push
```

## Common Commands

```bash
# Check status
git status

# See what files changed
git diff

# View commit history
git log

# Pull latest changes (if working on multiple computers)
git pull
```

## Troubleshooting

### "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

### "Authentication failed"
- Make sure you're using a Personal Access Token, not your password
- Check that the token has `repo` permissions

### "Permission denied"
- Verify your GitHub username and repository name are correct
- Make sure you have write access to the repository

## Need Help?

- Git Documentation: [https://git-scm.com/doc](https://git-scm.com/doc)
- GitHub Help: [https://docs.github.com](https://docs.github.com)

