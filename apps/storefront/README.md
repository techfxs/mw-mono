# Product App

A standalone Next.js application that can run both inside the Nx monorepo and independently.

## Running Inside Monorepo

```bash
# From monorepo root
npx nx dev product
npx nx build product
npx nx start product
```

## Running Standalone

To run this app outside the monorepo:

1. Copy the entire `product` folder to your desired location
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app:
   ```bash
   npm run dev    # Development
   npm run build  # Production build
   npm run start  # Production server
   ```

## Features

- ✅ Next.js 15 with App Router
- ✅ TypeScript support
- ✅ Tailwind CSS
- ✅ ESLint configuration
- ✅ API routes
- ✅ Completely standalone (no monorepo dependencies)

## Tech Stack

- Next.js 15.2.4
- React 19
- TypeScript 5.6
- Tailwind CSS 3.4
