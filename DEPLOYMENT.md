# Deployment Guide

This guide will help you deploy the User Directory Application to various hosting platforms.

## Option 1: Deploy to Vercel (Recommended)

Vercel is the easiest and fastest way to deploy a Vite React application.

### Method A: Deploy via Vercel CLI

1. **Install Vercel CLI globally**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from the project root**
   ```bash
   vercel
   ```
   
4. **For production deployment**
   ```bash
   vercel --prod
   ```

### Method B: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your Git repository (GitHub, GitLab, or Bitbucket)
4. Vercel will automatically detect it's a Vite project
5. Click "Deploy"

Your app will be live in seconds at `https://your-project-name.vercel.app`

---

## Option 2: Deploy to Netlify

### Method A: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Login to Netlify**
   ```bash
   netlify login
   ```

4. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Method B: Deploy via Netlify Dashboard

1. Go to [netlify.com](https://www.netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

---

## Option 3: Deploy to GitHub Pages

1. **Install gh-pages package**
   ```bash
   npm install -D gh-pages
   ```

2. **Update vite.config.ts** to add base path:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/obs-test-react/', // Replace with your repo name
   })
   ```

3. **Add deployment scripts to package.json**:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages** in your repository settings
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages → /root
   - Save

Your app will be available at `https://your-username.github.io/obs-test-react/`

---

## Option 4: Deploy to Render

1. Go to [render.com](https://render.com) and sign in
2. Click "New +" → "Static Site"
3. Connect your Git repository
4. Configure:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Click "Create Static Site"

---

## Option 5: Deploy to Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase in your project**
   ```bash
   firebase init hosting
   ```
   - Choose: Use an existing project or create a new one
   - Public directory: `dist`
   - Single-page app: `Yes`
   - Set up automatic builds: `No`

4. **Build your project**
   ```bash
   npm run build
   ```

5. **Deploy**
   ```bash
   firebase deploy
   ```

---

## Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All tests pass: `npm test`
- [ ] Build works locally: `npm run build`
- [ ] Preview works: `npm run preview`
- [ ] No ESLint errors: `npm run lint`
- [ ] Code is formatted: `npm run format`
- [ ] Update README with your live demo URL
- [ ] Environment variables are set (if any)

---

## Post-Deployment

After successful deployment:

1. **Test the live site** thoroughly on different devices
2. **Update README.md** with the live demo URL
3. **Share** your accomplishment!

---

## Troubleshooting

### Build fails on deployment
- Ensure all dependencies are in `dependencies`, not `devDependencies`
- Check Node.js version compatibility
- Run `npm run build` locally to see detailed errors

### Blank page after deployment
- Check browser console for errors
- Ensure `base` in `vite.config.ts` matches your deployment path
- Verify the build output directory is correct

### API calls fail
- Check CORS settings
- Verify API endpoints are accessible from production
- Check network tab in browser DevTools

---

## Recommended: Vercel

For this project, **Vercel** is the recommended platform because:
- Zero configuration needed
- Automatic deployments on git push
- Free SSL certificates
- Excellent performance
- Built-in analytics
- Perfect for React/Vite projects

Happy deploying! 🚀
