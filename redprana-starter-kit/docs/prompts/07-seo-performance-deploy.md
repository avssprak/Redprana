# Prompt 07 — SEO, Performance & Deployment

Read CLAUDE.md before starting. Run this prompt LAST — after all pages are built.

---

This prompt handles final production optimisation and deployment preparation.

## 1. Sitemap (`public/sitemap.xml`)

Generate a complete XML sitemap:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://redprana.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://redprana.com/services</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://redprana.com/frameworks</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://redprana.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://redprana.com/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

## 2. Robots.txt (`public/robots.txt`)

```
User-agent: *
Allow: /
Sitemap: https://redprana.com/sitemap.xml
```

## 3. .htaccess (`public/.htaccess`)

```apache
RewriteEngine On
RewriteBase /

# React Router SPA routing
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Cache static assets
<FilesMatch "\.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2)$">
  Header set Cache-Control "max-age=31536000, public"
</FilesMatch>

# Security headers
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "SAMEORIGIN"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
```

## 4. Favicon (`public/favicon.svg`)

Create a simple SVG favicon — a stylised "R" letterform or flame mark in `#C2410C` on a
`#0B1220` background, 32×32 viewBox.

## 5. OG Image Placeholder

Create `public/og-image.png` note: add a comment in README.md:
```
# TODO: OG Image
Create a 1200×630px image with:
- Background: #0B1220
- "Red Prana Enterprises" in Poppins 700, white
- "AI Governance Consulting" subtitle in Inter, #0E7490
- The Framework Compass visual as a decorative element
Save as public/og-image.png
```

## 6. Performance Audit

Run `npm run build` and check:
- [ ] Bundle size report — confirm vendor chunk < 200KB, motion chunk < 100KB
- [ ] No unused imports flagged by TypeScript/ESLint
- [ ] All images have `loading="lazy"` and `alt` text
- [ ] No render-blocking resources

Add to `vite.config.ts` if not already present:
```ts
build: {
  reportCompressedSize: true,
  chunkSizeWarningLimit: 400,
}
```

## 7. Accessibility Audit

Check each page for:
- [ ] All interactive elements have visible focus rings (add `focus:ring-2 focus:ring-accent focus:outline-none` to all buttons and links)
- [ ] Color contrast: text on `bg-primary` (#0B1220) must be white or `text-surface` (#F8FAFC)
- [ ] `alt` text on all images
- [ ] `aria-label` on icon-only buttons
- [ ] Skip-to-content link at top of `<body>` for keyboard users:
  ```html
  <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-white px-4 py-2 rounded-lg z-50">
    Skip to main content
  </a>
  ```
- [ ] `<main id="main-content">` wrapping page content in PageLayout.tsx

## 8. Final Deployment Checklist

```
npm run build

Upload dist/ contents to public_html/ on GoDaddy cPanel:
  ✓ index.html
  ✓ assets/ (JS + CSS bundles)
  ✓ sitemap.xml
  ✓ robots.txt
  ✓ .htaccess
  ✓ favicon.svg
  ✓ og-image.png

Post-deployment checks:
  ✓ https://redprana.com loads
  ✓ https://redprana.com/services loads (React Router works)
  ✓ https://redprana.com/frameworks loads
  ✓ https://redprana.com/about loads
  ✓ https://redprana.com/contact loads
  ✓ Mobile viewport (375px) — test in browser DevTools
  ✓ mailto links open email client
  ✓ Run Lighthouse in Chrome DevTools — target all scores > 95
  ✓ Submit sitemap to Google Search Console
```
