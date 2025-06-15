# 🔁 Linear Clone

A minimal and performant clone of the [Linear](https://linear.app) homepage built using [Astro](https://astro.build/), TypeScript (TSX), Framer Motion, and Tailwind CSS.

This project demonstrates modern UI design, smooth animations, responsive layout, and clean code structure, aiming to replicate the look, feel, and key interactive elements of the Linear website.

## 🛠️ Tech Stack

-   **Framework:** [Astro](https://astro.build/) - For building fast, content-focused websites.
-   **UI Components:** [React](https://reactjs.org/) (via `@astrojs/react`) with [TypeScript (TSX)](https://www.typescriptlang.org/) - For interactive and type-safe UI components.
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
-   **Animations:** [Framer Motion](https://www.framer.com/motion/) - For declarative animations in React.
-   **Utilities:**
    -   `clsx`: A tiny utility for constructing `className` strings conditionally.
    -   `tailwind-merge`: Utility to merge Tailwind CSS classes without style conflicts.

## 🚀 Features

-   **Responsive UI:** Adapts smoothly across various devices and screen sizes.
-   **Framer Motion Animations:** Engaging page transitions and component animations triggered by scroll and hover events.
-   **Mobile-Optimized Views:** Specific layouts and transitions designed for smaller screens, ensuring a good user experience on mobile.
-   **Linear-Style Components:**
    *   Hero section with animated text.
    *   Interactive card layouts with hover effects and modal views (`CardLayout.tsx`, `CardLayout2.tsx`).
    *   Dynamic card stack for status updates (`CardStack.tsx`).
    *   Animated customer logo grid (`CustomerGrid.tsx`).
    *   Feature showcase sidebar with dynamic content display (`Sidebar.tsx`).
    *   Responsive navigation bar with dropdown menus.
    *   Comprehensive footer section.
-   **Video Integration:** Smooth playback of background and feature videos.

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Node.js (version 18.x or later recommended)
-   npm (version 8.x or later) or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/muzzammil022/linear-clone.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd linear-clone
    ```

3.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```

### Running in Development Mode

To start the development server:
```bash
npm run dev
```
This will launch the application, typically available at `http://localhost:4321`. The server supports Hot Module Replacement (HMR).

### Building for Production

To build the application for production:
```bash
npm run build
```
This command compiles the application and outputs the static files to the `dist/` directory.

### Previewing the Production Build

To preview the production build locally:
```bash
npm run preview
```
This command serves the `dist/` directory, allowing you to test the optimized version of the site.

## 📁 Project Structure

The repository is organized as follows:

```
muzzammil022-linear-clone/
├── public/                 # Static assets (videos, images like .avif, .webm)
│   ├── TC.webm
│   ├── b8.webm
│   └── ...
├── src/
│   ├── assets/             # (Currently empty) Intended for other static assets
│   ├── components/         # Reusable React (TSX) components
│   │   ├── CardLayout.tsx
│   │   ├── CardStack.tsx
│   │   └── ...
│   ├── layouts/            # Astro layout components (Master pages, Navbar)
│   │   ├── Layout.astro
│   │   ├── Landing.astro
│   │   └── navbar.astro
│   ├── pages/              # Astro pages, defining the routes (e.g., index.astro)
│   │   └── index.astro
│   └── styles/             # Global CSS styles
│       └── global.css
├── astro.config.mjs        # Astro build and integration configuration
├── package.json            # Project dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

Key configuration files:
-   `astro.config.mjs`: Configures Astro, including integrations like React and Tailwind CSS.
-   `package.json`: Lists project dependencies and scripts for development, building, and previewing.
-   `tsconfig.json`: Defines the TypeScript compiler options and project files.
-   `src/styles/global.css`: Contains global styles and Tailwind CSS directives.