# QuickTest

QuickTest is a Vite + React mock examination platform with student and admin flows.

## Features

- Subject-based exams (Ethics, Understanding the Self, Contemporary World, STS)
- Question limits (5, 20, 35, 50) and optional Time Attack mode
- Auto-save exam progress in local storage
- Results page with score analytics and answer review
- Leaderboard view for top results
- Admin login and dashboard for question/result management
- Basic exam integrity signals (tab switches, focus changes, timing anomalies, duplicate-session lock)

## Tech Stack

- React + Vite
- React Router
- Firebase Auth + Firestore
- Chart.js (`react-chartjs-2`)
- ESLint

## Project Structure

- `src/StudentSite.jsx` - student landing and exam settings modal
- `src/pages/ExamPage.jsx` - exam runner, session lock, submission flow
- `src/pages/ResultsPage.jsx` - post-exam analytics and review
- `src/pages/LeaderboardPage.jsx` - leaderboard
- `src/pages/AdminLogin.jsx` - admin authentication
- `src/AdminDashboard.jsx` - admin controls for data
- `src/data/seedQuestions.js` - local fallback question banks
- `compile_quizzes.js` - converter for files in `quizzes/` to `seedQuestions.js`

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment

Copy `.env.example` to `.env` and fill in Firebase values:

```dotenv
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_ADMIN_EMAIL=admin@yourdomain.com
```

### 3) Run development server

```bash
npm run dev
```

## Scripts

- `npm run dev` - start local dev server
- `npm run build` - production build
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint

## Quiz Data Compilation

If you update files under `quizzes/`, regenerate fallback seeds:

```bash
node compile_quizzes.js
```

This rebuilds `src/data/seedQuestions.js` from the source quiz files.

## Firebase Notes

- Firestore rules are in `firestore.rules`
- Firestore indexes are in `firestore.indexes.json`
- App uses Firestore collections such as `questions` and `results`
- If Firestore is unavailable, exam questions can fall back to `seedQuestions.js`

## Deployment

This repo includes `vercel.json` with SPA routing fallback to `index.html`.

Typical deployment flow:

1. Set required `VITE_...` environment variables in Vercel
2. Build command: `npm run build`
3. Output directory: `dist`

## Routes

- `/` - student home
- `/exam/:subject` - exam page
- `/results` - results (requires navigation state)
- `/leaderboard` - leaderboard
- `/admin/login` - admin login
- `/admin/dashboard` - protected admin dashboard

## Notes

- Package name in `package.json` is currently `zonal-astro`; UI branding is `QuickTest`.
- Admin demo credentials are supported in demo mode (`admin@mockexam.com` / `admin123`).
