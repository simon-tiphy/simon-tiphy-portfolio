# How to Deploy to Netlify for Free

This guide explains how to deploy your portfolio to Netlify using the "Drag and Drop" method or Git integration.

## Method 1: Drag and Drop (Easiest)

1.  **Build your project locally:**
    Run the following command in your terminal:

    ```bash
    npm run build
    ```

    This will create a `dist` folder in your project directory.

2.  **Log in to Netlify:**
    Go to [netlify.com](https://www.netlify.com/) and log in or sign up.

3.  **Deploy:**
    - Go to the "Sites" tab in your Netlify dashboard.
    - Drag and drop the `dist` folder (located at `/home/tiphy/my-projects/simontiphyportfolio/frontend/dist`) into the "Drag and drop your site output folder here" area.
    - Netlify will upload and deploy your site instantly.

## Method 2: Git Integration (Recommended for updates)

1.  **Push your code to GitHub:**
    Ensure your project is pushed to a GitHub repository.

2.  **New Site from Git:**

    - In Netlify, click "Add new site" -> "Import from an existing project".
    - Select "GitHub".
    - Authorize Netlify and select your repository.

3.  **Configure Build Settings:**

    - **Base directory:** `frontend` (Since your package.json is in the frontend folder)
    - **Build command:** `npm run build`
    - **Publish directory:** `dist`

4.  **Deploy:**
    - Click "Deploy Site".
    - Netlify will build and deploy your site. Any changes you push to GitHub will automatically trigger a new deployment.

## Important Note

I have added a `netlify.toml` file to your project. This file ensures that routing works correctly (e.g., if you refresh a page that isn't the homepage, it won't give a 404 error).
