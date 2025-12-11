# Firebase Configuration Guide for E's AI

To make your "E's AI" site live and fully functional, you need to connect it to your own Firebase project.

## Step 1: Create Project
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Click **"Add project"** and name it something like `es-ai-hub`.
3. Disable Google Analytics (for simplicity) and create.

## Step 2: Register App & Get Keys
1. In your new project, click the **Web icon (`</>`)** to add an app.
2. Name it "Es AI Web".
3. Check **"Also set up Firebase Hosting"**.
4. Click **Register app**.
5. You will see a `firebaseConfig` object. **Copy it**.
6. Open `src/firebase.ts` in your editor and replace the placeholder config with these keys.

## Step 3: Enable Authentication
1. Go to **Authentication** > **Get Started**.
2. Click **Google** > **Enable**.
3. Set the support email and save.

## Step 4: Configure CLI & Deploy
Open your terminal in the `agentic-freepik` folder:

1. **Login to Firebase**:
   ```bash
   npx firebase login
   ```
2. **Connect Project**:
   Replace `YOUR_PROJECT_ID` below with the ID you just created (e.g., `es-ai-hub`):
   ```bash
   npx firebase use --add YOUR_PROJECT_ID
   ```
   *Alias it as `default` when prompted.*

3. **Deploy**:
   ```bash
   npx firebase deploy
   ```

Your site will be live at `https://YOUR_PROJECT_ID.web.app`!
