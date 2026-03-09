# Fix PowerShell Execution Policy Issue

## The Problem
Windows PowerShell is blocking npm commands due to execution policy restrictions.

## Solution Options

### Option 1: Change Execution Policy (Recommended)

Run PowerShell as Administrator and execute:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then try again:
```bash
npm install
```

### Option 2: Bypass for Single Command

```powershell
powershell -ExecutionPolicy Bypass -Command "npm install"
```

### Option 3: Use Command Prompt Instead

1. Close PowerShell
2. Open Command Prompt (cmd.exe)
3. Navigate to project folder:
   ```cmd
   cd C:\wamp64\www\My-portfolio
   ```
4. Run:
   ```cmd
   npm install
   ```

### Option 4: Use Git Bash

If you have Git installed:
1. Right-click in project folder
2. Select "Git Bash Here"
3. Run:
   ```bash
   npm install
   ```

## Recommended: Use Command Prompt

For Windows, Command Prompt (cmd) is often simpler:

1. Press `Win + R`
2. Type `cmd` and press Enter
3. Navigate to your project:
   ```cmd
   cd C:\wamp64\www\My-portfolio
   ```
4. Run commands:
   ```cmd
   npm install
   npm run dev
   ```

## Verify Node.js Installation

First, check if Node.js is properly installed:

```cmd
node --version
npm --version
```

You should see version numbers. If not, reinstall Node.js from https://nodejs.org

## After Fixing

Once you can run npm commands, continue with:

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Need More Help?

See QUICKSTART.md for complete setup instructions.
