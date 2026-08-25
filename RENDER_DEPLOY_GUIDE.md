# Deploy to Render - Step by Step Guide

## Prerequisites
- Render account (free tier available at https://render.com)
- Your GitHub repository: https://github.com/CalebBigla/dlama-global-showcase

## Deployment Steps

### 1. Connect Your Repository
1. Go to https://render.com and sign in
2. Click **"New +"** button in the top right
3. Select **"Static Site"**
4. Connect your GitHub account if not already connected
5. Select the repository: **CalebBigla/dlama-global-showcase**
6. Click **"Connect"**

### 2. Configure Your Static Site
Render should auto-detect the `render.yaml` configuration, but verify these settings:

- **Name**: `dlama-global-showcase` (or your preferred name)
- **Branch**: `main`
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist/client`

### 3. Deploy
1. Click **"Create Static Site"**
2. Render will start building your site
3. Wait 2-3 minutes for the build to complete

### 4. Get Your Live URL
Once deployed, you'll get a URL like:
- `https://dlama-global-showcase.onrender.com`

You can customize this domain or add your own custom domain in the site settings.

## Auto-Deploy
✅ Every time you push to the `main` branch on GitHub, Render will automatically rebuild and redeploy your site.

## Troubleshooting

### Build Fails
- Check the build logs in Render dashboard
- Ensure all dependencies are listed in `package.json`
- Try running `npm install && npm run build` locally to test

### 404 Errors
- The `render.yaml` includes routing rules to handle SPA navigation
- All routes should rewrite to `/index.html`

### Need Help?
- Render docs: https://render.com/docs/static-sites
- Contact: support@render.com

## Alternative: Manual Configuration
If you prefer not to use the Blueprint (render.yaml):

1. Choose "Static Site"
2. Manually enter:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist/client`
3. Add environment variable:
   - `NODE_ENV` = `production`

---

**Your site will be live at**: https://[your-site-name].onrender.com

🎉 Happy deploying!
