# 📱 How to Install on iPhone

This web app can be added to your iPhone home screen and will work like a native app!

## Method 1: Add to Home Screen (Recommended)

### Step-by-Step Instructions:

1. **Open Safari on your iPhone**
   - ⚠️ **Important**: You must use Safari, not Chrome or other browsers
   - Safari is the only browser that supports "Add to Home Screen" on iOS

2. **Navigate to the app**
   - If the files are on your computer, you need to host them first (see "Hosting Options" below)
   - Or use a service like GitHub Pages, Netlify, or Vercel

3. **Tap the Share button**
   - Look for the share icon (square with arrow pointing up) at the bottom of Safari
   - It's usually in the center-bottom of the screen

4. **Scroll down and tap "Add to Home Screen"**
   - Scroll through the share options until you see "Add to Home Screen"
   - It has a plus icon with a square

5. **Customize the name (optional)**
   - You can change the name if you want
   - Default will be "Energy Formulator"

6. **Tap "Add"**
   - The app icon will appear on your home screen
   - It will have a custom icon and open in full-screen mode!

## Method 2: Using a Web Server

Since this is a web app, you need to serve it from a web server (not just open the file directly). Here are your options:

### Option A: Use a Free Hosting Service (Easiest)

1. **GitHub Pages** (Free)
   - Create a GitHub account
   - Create a new repository
   - Upload all files
   - Enable GitHub Pages in settings
   - Access via: `https://yourusername.github.io/repository-name/`

2. **Netlify** (Free)
   - Go to netlify.com
   - Drag and drop the folder
   - Get instant URL
   - Access from iPhone

3. **Vercel** (Free)
   - Go to vercel.com
   - Import your project
   - Deploy instantly
   - Access from iPhone

### Option B: Host Locally on Your Computer

1. **Using Python** (if installed):
   ```bash
   cd plant-energy-drink-formulator
   python3 -m http.server 8000
   ```
   - Then access from iPhone: `http://YOUR-COMPUTER-IP:8000`
   - Find your computer's IP: System Preferences > Network

2. **Using Node.js** (if installed):
   ```bash
   npx http-server -p 8000
   ```
   - Access from iPhone: `http://YOUR-COMPUTER-IP:8000`

3. **Using a Simple Web Server App**:
   - Download "MAMP" or "XAMPP" for Mac
   - Place files in the web server directory
   - Access via local network

## Method 3: Using iCloud Drive or Files App

1. **Upload to iCloud Drive**:
   - Upload the entire folder to iCloud Drive
   - Open Files app on iPhone
   - Navigate to the folder
   - Open `index.html` in Safari
   - Then follow Method 1 steps

## After Installation

Once added to your home screen:
- ✅ The app opens in full-screen (no Safari browser bars)
- ✅ Works offline (if you've visited it before)
- ✅ Has its own icon on your home screen
- ✅ Feels like a native app!

## Troubleshooting

**"Add to Home Screen" option not showing?**
- Make sure you're using Safari (not Chrome, Firefox, etc.)
- Make sure you're viewing the page from a web server (not file://)
- Try refreshing the page

**App not working offline?**
- First visit the app while connected to internet
- The browser will cache the files
- Then it should work offline

**Can't access from iPhone?**
- Make sure iPhone and computer are on the same Wi-Fi network
- Check firewall settings on your computer
- Try using a hosting service instead (easiest option)

## Quick Setup with GitHub Pages (5 minutes)

1. Go to github.com and create account
2. Click "New repository"
3. Name it (e.g., "energy-drink-formulator")
4. Upload all files (drag and drop)
5. Go to Settings > Pages
6. Select "main" branch and save
7. Wait 2 minutes, then visit: `https://YOUR-USERNAME.github.io/energy-drink-formulator/`
8. Open in Safari on iPhone
9. Add to Home Screen!

---

**Need help?** The easiest way is to use GitHub Pages or Netlify - they're free and take just a few minutes to set up!

