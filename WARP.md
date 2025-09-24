# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common commands

- Install dependencies (fresh clone):
  - npm ci
  - If you’re actively developing and modifying package.json, you can use: npm install

- Start the dev server (CRA):
  - npm start
  - Opens http://localhost:3000 with live reload and ESLint feedback in the console.

- Build for production:
  - npm run build
  - Outputs to build/.

- Run tests (Jest via react-scripts):
  - All tests (interactive watch mode): npm test
  - Run a single test file: npm test -- src/App.test.tsx
  - Run tests matching a name/pattern: npm test -- -t "pattern"
  - Non-interactive (CI-friendly): CI=true npm test -- --watchAll=false
  - Coverage: npm test -- --coverage

- Type-check only (no emit):
  - npx tsc --noEmit

- Preview the production build locally (optional):
  - npx serve -s build

Notes on linting:
- ESLint is integrated via Create React App and runs during npm start and npm run build (see eslintConfig in package.json extending "react-app" and "react-app/jest"). There is no standalone lint script in this repo.

## Project architecture (high level)

- Framework/tooling: Create React App (TypeScript)
  - package.json scripts: start/build/test/eject via react-scripts@5
  - tsconfig.json has strict type checking and noEmit; build/time type checks are enforced via CRA

- Entry point: src/index.tsx
  - Creates the React root and renders <App /> in React.StrictMode.
  - reportWebVitals is wired; pass a function (e.g., console.log) if you want to log metrics.

- Application shell and routing: src/App.tsx
  - ThemeProvider (styled-components) wraps the app with a shared theme from src/styles/GlobalStyles.ts
  - BrowserRouter provides client-side routing
  - GlobalStyle injects base styles
  - Persistent top navigation: src/components/Navigation.tsx
  - Route map (all client-side):
    - "/" → Home
    - "/education" → Education; details at "/education/:id"
    - "/experience" → Experience; details at "/experience/:id"
    - "/technical-skills" → TechnicalSkills
    - "/portfolio" → Portfolio; details at "/portfolio/:id"
    - "/contact" → Contact

- Styling system: styled-components
  - src/styles/GlobalStyles.ts defines:
    - theme: shared colors, fonts, and responsive breakpoints used across components
    - GlobalStyle: resets and base typography/colors
    - Reusable UI primitives: Container, PageWrapper, Card, Button
  - Components/pages import theme and these primitives for consistent layout/appearance

- Pages
  - Located under src/pages/*.tsx
  - Each page primarily composes styled-components and content arrays; there is no backend/API integration in this repo
  - The detail pages (EducationDetail, ExperienceDetail, ProjectDetail) read an :id from the URL and select content from in-file maps

- Navigation
  - src/components/Navigation.tsx renders a fixed, responsive nav bar with active link styling based on the current location

- Assets
  - Static assets live in public/ (e.g., index.html, icons, manifest)
  - Page components reference images under /images/...; many image paths are placeholders and include graceful fallbacks via onError to placeholder URLs

- Testing
  - Jest + React Testing Library provided by react-scripts
  - Test setup at src/setupTests.ts (jest-dom matchers)
  - Example test: src/App.test.tsx (default CRA sample)
  - Co-locate tests with .test.tsx filename suffix

## Additional repository facts

- Package manager: npm (package-lock.json present)
- React & router: react@19, react-router-dom@7
- TypeScript: strict mode enabled
- No custom Prettier/ESLint config beyond CRA’s defaults; lint feedback appears during dev/build
