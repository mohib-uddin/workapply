# WorkApply Frontend

WorkApply is a premium job application automation platform designed to streamline the job search process. This repository contains the frontend implementation built with modern web technologies to provide a high-performance, aesthetically pleasing, and user-friendly experience.

## 🚀 Teck Stack

- **Core:** [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/), [Radix UI](https://www.radix-ui.com/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/), [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **UI Components:** [Lucide React](https://lucide.dev/), [Material UI](https://mui.com/), [Sonner](https://sonner.emilkowal.ski/)
- **Networking:** [Axios](https://axios-http.com/)

## ✨ Key Features

- **Intuitive Onboarding:** A multi-step onboarding process to capture user preferences, professional background, and demographics.
- **Dynamic Job Dashboard:** Real-time job listings and queue management.
- **Smart User Profile:** Comprehensive profile management including job preferences, experience levels, and social links.
- **Resume Management:** Resume upload, storage, and instant preview functionality.
- **Subscription Plans:** Integration with pricing tiers and checkout sessions.
- **Premium Design:** Glassmorphic UI elements, vibrant dark mode, and smooth micro-animations.

## 🛠️ Project Structure

```text
src/
├── components/         # Reusable UI components (Shared, Modules, Layout)
├── lib/               # Configurations (Axios, Schema definitions)
├── pages/             # Main page components (Dashboard, UserProfile, etc.)
├── services/          # API service layers and custom hooks
├── store/             # Global state management (Zustand)
└── assets/            # Static assets and icons
```

## 🚥 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

### Build

Create a production-ready bundle:
```bash
npm run build
```

## 📄 Environment Setup

Ensure you have a `.env` file in the root directory with the necessary API endpoints:
```env
VITE_API_BASE_URL=https://your-api-endpoint.com
```

---

Built with ❤️ by the WorkApply Team