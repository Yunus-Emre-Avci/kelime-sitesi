# LexiLearn - Vocabulary Learning Application

LexiLearn is a production-grade vocabulary learning application designed for B1/B2 level English learners. Developed with a focus on modern UI/X and efficiency, it provides a structured platform for language acquisition.

## 🚀 Deployment to Netlify

This project is pre-configured for seamless deployment to Netlify.

### 1. Automatic Deployment (Git)
The easiest way is to connect your Git repository to Netlify:
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Configuration:** Already handled by the included `netlify.toml`.

### 2. Manual Deployment (Drag & Drop)
If you prefer a manual approach:
1. Run `npm run build` locally.
2. Drag the generated `dist` folder into the Netlify Drop area.

## 🛠 Tech Stack
- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS + Framer Motion
- **Storage:** Dexie.js (IndexedDB) - Offline-first architecture
- **State Management:** Zustand
- **Graphics:** Lucide-React & Recharts

## 📁 Clean Repository Protocol
The repository has been pruned to exclude all development mocks, sensitive files, and local logs. 
Sensitive information is protected via `.gitignore` and build-time environment handling.

## 📝 Features
- **Word Bank:** Advanced filtering, search, and CRUD operations.
- **SRS Training:** Spaced Repetition System logic for Flashcards and Quizzes.
- **Progress Tracking:** Real-time metrics and mastery levels.
- **Responsive Design:** Optimized for both Desktop and Mobile users.

---
*Created with focus on Avant-Garde UI Design and Senior Frontend Architecture.*
