# Deployment Guide: Vercel

Your portfolio is ready for deployment! Follow these steps to deploy your `frontend` application to Vercel.

## Prerequisites

- Ensure your code is pushed to your GitHub repository.
- You have a Vercel account connected to your GitHub.

## Steps

1.  **Log in to Vercel** and click **"Add New..."** -> **"Project"**.
2.  **Import Git Repository**: Select your repository (`simon-tiphy-portfolio` or similar).
3.  **Configure Project**:
    - **Framework Preset**: Vercel should automatically detect `Vite`.
    - **Root Directory**: **IMPORTANT!** Click "Edit" and select `frontend`.
      - Since your project is in a subdirectory, you _must_ tell Vercel to look there.
    - **Build Command**: `npm run build` (Default is correct).
    - **Output Directory**: `dist` (Default is correct).
    - **Environment Variables**: None required for this static site.
4.  **Deploy**: Click **"Deploy"**.

## Troubleshooting

- **404 Errors**: If you see a 404, ensure the **Root Directory** was set to `frontend`.
- **Build Failures**: Check the logs. If it complains about Node version, Vercel defaults to a recent version, which should be fine (your local is 20.17.0).

## Post-Deployment

- Vercel will provide a URL (e.g., `project-name.vercel.app`).
- You can add your custom domain in the Vercel "Settings" -> "Domains" tab.
