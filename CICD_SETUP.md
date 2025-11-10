# CI/CD Setup Guide - GitHub Actions + Vercel

This monorepo uses GitHub Actions for CI/CD and Vercel for deploying Next.js applications.

## Prerequisites

1. **Vercel Account**: Create an account at [vercel.com](https://vercel.com)
2. **Vercel CLI**: Install locally for initial setup
   ```bash
   npm install -g vercel
   ```

## Vercel Project Setup

You need to create **4 separate Vercel projects**, one for each app:

### 1. Create Projects in Vercel Dashboard

For each app (storefront, product, cart, checkout):

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository (`techfxs/mw-mono`)
4. Configure the project:
   - **Project Name**: `mw-storefront` (or `mw-product`, `mw-cart`, `mw-checkout`)
   - **Framework Preset**: Next.js
   - **Root Directory**: `apps/storefront` (or respective app directory)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
5. Click "Deploy" (this first deployment can be manual)
6. After deployment, go to Project Settings and note the **Project ID**

### 2. Get Vercel Credentials

You'll need the following credentials:

#### **Vercel Token**

1. Go to [Vercel Account Settings → Tokens](https://vercel.com/account/tokens)
2. Click "Create Token"
3. Name it something like `GitHub Actions CI/CD`
4. Set scope to "Full Account"
5. Copy the token (save it securely)

#### **Vercel Org ID**

1. Go to [Vercel Account Settings](https://vercel.com/account)
2. Your Team/Org ID is shown in the URL or settings
3. Alternatively, run locally:
   ```bash
   vercel login
   cd apps/storefront
   vercel link
   cat .vercel/project.json
   ```
   The `orgId` field contains your Org ID

#### **Project IDs**

For each project, get the Project ID:

1. Go to the project in Vercel Dashboard
2. Go to Settings → General
3. Copy the "Project ID"

Alternatively, link each project locally:

```bash
cd apps/storefront
vercel link
cat .vercel/project.json  # Contains projectId
```

## GitHub Secrets Setup

Add the following secrets to your GitHub repository:

1. Go to your GitHub repo: `https://github.com/techfxs/mw-mono`
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add each of these:

| Secret Name                    | Description                      | Example         |
| ------------------------------ | -------------------------------- | --------------- |
| `VERCEL_TOKEN`                 | Your Vercel API token            | `abc123xyz...`  |
| `VERCEL_ORG_ID`                | Your Vercel organization/team ID | `team_abc123`   |
| `VERCEL_STOREFRONT_PROJECT_ID` | Project ID for storefront app    | `prj_abc123...` |
| `VERCEL_PRODUCT_PROJECT_ID`    | Project ID for product app       | `prj_def456...` |
| `VERCEL_CART_PROJECT_ID`       | Project ID for cart app          | `prj_ghi789...` |
| `VERCEL_CHECKOUT_PROJECT_ID`   | Project ID for checkout app      | `prj_jkl012...` |

## Workflow Behavior

Each workflow (storefront.yml, product.yml, cart.yml, checkout.yml) will:

### **Triggers**

- **Push to `main` branch**: Deploys to **production**
  - Only when files in the app's directory or packages are changed
- **Pull Request to `main`**: Creates **preview deployment**
  - Only when files in the app's directory or packages are changed

### **Steps**

1. Checkout code
2. Setup Node.js 20 with npm cache
3. Install monorepo dependencies (`npm ci`)
4. Install Vercel CLI globally
5. Pull Vercel environment configuration
6. Build the project using Vercel
7. Deploy to Vercel (production or preview)

### **Path Filtering**

Each workflow only runs when relevant files change:

- App-specific files: `apps/[app-name]/**`
- Shared packages: `packages/**`
- Workflow file itself: `.github/workflows/[app-name].yml`

## Testing the Setup

### Local Testing

Before pushing, you can test Vercel deployment locally:

```bash
# Login to Vercel
vercel login

# Link each project (do this once per app)
cd apps/storefront
vercel link
# Follow prompts and select your project

# Test production build
vercel build --prod

# Test deployment (preview)
vercel deploy --prebuilt
```

### GitHub Actions Testing

1. Make a change to one of your apps (e.g., edit `apps/storefront/src/app/page.tsx`)
2. Commit and push to a feature branch
3. Create a Pull Request to `main`
4. Check the "Actions" tab in GitHub - you should see the workflow running
5. Once complete, Vercel will comment on the PR with preview URL
6. Merge the PR to `main` to trigger production deployment

## Troubleshooting

### "Context access might be invalid" warnings

These are linter warnings and can be ignored - they appear because the secrets haven't been added yet. Once you add the secrets to GitHub, the workflows will work correctly.

### Build fails with "Cannot find module"

- Ensure all dependencies are in the root `package.json`
- Check that shared packages are properly configured in `tsconfig.base.json`
- Verify `transpilePackages` in `next.config.js` includes your local packages

### Vercel deployment fails

- Double-check all secrets are correctly added to GitHub
- Verify Project IDs match your Vercel projects
- Check Vercel dashboard for error logs
- Ensure root directory is correctly set in Vercel project settings

### Only one app deploys

- Check that path filters in the workflow match your file changes
- Verify you pushed changes to the correct app directory
- Review the "Files changed" tab in your PR

## Monitoring Deployments

### GitHub Actions

- View workflow runs: `https://github.com/techfxs/mw-mono/actions`
- Each workflow shows build logs and deployment status

### Vercel Dashboard

- View all deployments: [vercel.com/dashboard](https://vercel.com/dashboard)
- Each project shows deployment history, logs, and URLs
- Production URLs are stable (e.g., `mw-storefront.vercel.app`)
- Preview URLs are unique per deployment

## Next Steps

1. ✅ Add all required secrets to GitHub
2. ✅ Create and link all 4 Vercel projects
3. ✅ Test with a PR to verify preview deployments
4. ✅ Merge to main to verify production deployments
5. 🎯 (Optional) Set up custom domains in Vercel
6. 🎯 (Optional) Add environment variables in Vercel project settings
7. 🎯 (Optional) Configure deployment notifications in Slack/Discord
