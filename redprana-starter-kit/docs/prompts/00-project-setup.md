# Prompt 00 — Project Setup

Paste this as the FIRST message in a new Claude Code session.

---

Read CLAUDE.md completely before doing anything else. This is your permanent project memory.

Then scaffold the project:

1. Run `npm install` and confirm all dependencies install cleanly.

2. Create `postcss.config.js`:
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

3. Create `src/index.css` with:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    font-family: 'Inter', sans-serif;
    scroll-behavior: smooth;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
  }
  code, pre, .font-mono {
    font-family: 'JetBrains Mono', monospace;
  }
}

@layer utilities {
  .text-gradient-teal {
    background: linear-gradient(135deg, #0E7490, #2563EB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .text-gradient-warm {
    background: linear-gradient(135deg, #C2410C, #2563EB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}
```

4. Create `src/main.tsx`:
```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
```

5. Create `src/App.tsx` with React Router routes for all 5 pages (lazy loaded):
   - `/` → Home
   - `/services` → Services
   - `/frameworks` → Frameworks
   - `/about` → About
   - `/contact` → Contact
   - Wrap in `<PageLayout>` with `<Navbar>` and `<Footer>`

6. Create stub pages for all 5 routes (just a heading, we'll build them next).

7. Create `src/components/layout/PageLayout.tsx` — wraps Navbar + `<main>` + Footer.

8. Run `npm run dev` and confirm the app loads at localhost:5173 with no errors.

9. Run `npm run build` and confirm it compiles cleanly.

Do not build any real page content yet. Just get the scaffold running.
