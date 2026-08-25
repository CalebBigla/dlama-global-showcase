# 📤 GitHub Upload Guide - Dlama Global Homes

## ✅ Git Repository Initialized!

Your project is now ready to upload to GitHub. All files have been committed locally.

---

## 🚀 Upload to GitHub (3 Steps)

### Step 1: Create Repository on GitHub

1. Go to **https://github.com**
2. Click the **"+"** icon (top right) → **"New repository"**
3. Fill in:
   - **Repository name**: `dlama-global-homes` (or any name you prefer)
   - **Description**: "Dlama Global Homes - Real Estate Website"
   - **Visibility**: Choose **Public** or **Private**
   - ⚠️ **DO NOT** check "Add a README file" (we already have one)
   - ⚠️ **DO NOT** add .gitignore or license (already included)
4. Click **"Create repository"**

---

### Step 2: Connect Your Local Project to GitHub

GitHub will show you commands. You need to run these in your terminal:

**Option A: If using HTTPS** (Easier - Recommended)
```bash
git remote add origin https://github.com/YOUR-USERNAME/dlama-global-homes.git
git branch -M main
git push -u origin main
```

**Option B: If using SSH** (Need SSH keys set up)
```bash
git remote add origin git@github.com:YOUR-USERNAME/dlama-global-homes.git
git branch -M main
git push -u origin main
```

---

### Step 3: Run Commands in PowerShell

Open PowerShell in your project folder and run:

```powershell
# Navigate to project folder (if not already there)
cd "C:\Users\HP ELITEBOOK 840-G3\OneDrive\Desktop\start\dlama-global-showcase-main"

# Add GitHub remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/dlama-global-homes.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

**⚠️ Important**: Replace `YOUR-USERNAME` with your actual GitHub username!

---

## 🔐 Authentication

When you run `git push`, GitHub will ask for authentication:

### Method 1: GitHub Desktop (Easiest)
1. Download **GitHub Desktop** from https://desktop.github.com/
2. Sign in with your GitHub account
3. Add your local repository
4. Click "Publish repository"

### Method 2: Personal Access Token
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select scopes: `repo` (full control)
4. Copy the token
5. When prompted for password, paste the token

### Method 3: GitHub CLI
```bash
# Install GitHub CLI first: https://cli.github.com/
gh auth login
gh repo create dlama-global-homes --source=. --public --push
```

---

## 📋 Quick Commands Reference

```bash
# Check if remote is added
git remote -v

# Check current status
git status

# View commit history
git log --oneline

# Push to GitHub (after first push)
git push

# Pull latest changes from GitHub
git pull
```

---

## 🎯 After Uploading to GitHub

### Deploy to Vercel (Free Hosting):

1. Go to **https://vercel.com**
2. Sign up with GitHub account
3. Click **"New Project"**
4. Import your `dlama-global-homes` repository
5. Click **"Deploy"**
6. ✅ Done! Your site is live in ~2 minutes

**Vercel will give you a URL like**:
- `https://dlama-global-homes.vercel.app`
- Later you can add your custom domain

---

## 🔄 Making Updates Later

After making changes to your code:

```bash
# Stage all changes
git add .

# Commit with message
git commit -m "Update: description of what you changed"

# Push to GitHub
git push
```

If deployed to Vercel, it will **auto-deploy** every time you push!

---

## 📁 What's Included in Your Repository

✅ **109 files** committed:
- All source code
- CEO photo (CEO.jpg)
- Both logos (Logo-1.png, Logo-2.png)
- All components and pages
- Documentation files
- Configuration files

✅ **Size**: ~450 KB (excluding node_modules)

---

## ⚠️ Files NOT Uploaded (Intentional)

These are excluded via `.gitignore`:
- `node_modules/` (too large, can be reinstalled)
- `dist/` (build output, regenerated on deploy)
- `.env` files (secrets, if any)
- IDE settings (`.vscode`, `.idea`)

---

## 🐛 Troubleshooting

### "Permission denied" error
- Use GitHub Desktop instead, or
- Set up SSH keys, or
- Use Personal Access Token

### "Remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/dlama-global-homes.git
```

### "Updates were rejected"
```bash
git pull origin main --rebase
git push
```

### Can't remember GitHub username
- Go to https://github.com and check top-right corner

---

## 🎉 Next Steps After Upload

1. ✅ **Verify on GitHub**: Go to your repository URL and check files are there
2. ✅ **Deploy to Vercel**: Connect and deploy in 2 minutes
3. ✅ **Share the link**: Send to clients/team
4. ✅ **Add custom domain** (optional): In Vercel settings

---

## 📞 Need Help?

If you get stuck:
1. Check GitHub's official guide: https://docs.github.com/en/get-started
2. Use GitHub Desktop (easiest method)
3. Try GitHub CLI: https://cli.github.com/

---

## 🚀 Ready to Upload!

Your project is **committed and ready**. Just:
1. Create GitHub repository
2. Add remote origin
3. Push to GitHub
4. Deploy to Vercel

**Estimated time**: 5-10 minutes

---

**Project**: Dlama Global Homes  
**Status**: ✅ Ready for GitHub  
**Files**: 109 committed  
**Founder**: Dlama Haruna Kwaji, MD/CEO  
**Founded**: 2026
