# Axar Digital — Website

Static website for Axar Digital, built with vanilla HTML5, CSS3, and JavaScript.
Hosted on GitHub Pages (free tier). No build step required.

---

## File Structure

```
axar-digital/
├── index.html                          # Homepage
├── sebi-pit-amendment-2025.html        # SEBI Amendment Hub (SEO priority)
├── demo.html                           # Demo request page
├── css/
│   └── style.css                       # Full design system + all components
├── js/
│   └── main.js                         # Nav, dropdown, accordion, smooth scroll
└── products/
    ├── insiderlens-lco.html            # InsiderLens LCo product page
    ├── insiderlens-ifco.html           # InsiderLens IFCo product page
    ├── boardeye.html                   # BoardEye product page
    └── boardgauge.html                 # BoardGauge product page
```

---

## Deploy to GitHub Pages (3 steps)

**Step 1 — Create a GitHub repository**
- Go to github.com → New repository
- Name it `axar-digital-website` (or any name)
- Set to Public
- Do NOT initialise with README (you already have one)

**Step 2 — Push all files**

```bash
# From inside the axar-digital/ folder:
git init
git add .
git commit -m "Initial site build"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/axar-digital-website.git
git push -u origin main
```

**Step 3 — Enable GitHub Pages**
- Go to your repository on GitHub
- Click **Settings** → **Pages** (left sidebar)
- Under "Build and deployment" → Source: **Deploy from a branch**
- Branch: **main** | Folder: **/ (root)**
- Click **Save**
- Your site will be live at `https://YOUR-USERNAME.github.io/axar-digital-website/` within 2–3 minutes

---

## Custom Domain (optional)

To use `www.axardigital.in` or `axardigital.in`:

1. Create a file named `CNAME` in the root directory with one line:
   ```
   axardigital.in
   ```
2. Add a CNAME DNS record at your domain registrar:
   - Type: `CNAME`
   - Name: `www`
   - Value: `YOUR-USERNAME.github.io`
3. For apex domain (axardigital.in without www), add four A records pointing to GitHub's IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
4. In GitHub Pages settings, enter your custom domain and enable "Enforce HTTPS"

---

## Forms

All forms use `mailto:` action (opens the user's email client). To upgrade to a proper form backend:
- Replace `action="mailto:..."` with a form service endpoint
- Recommended services: Formspree (free tier), Netlify Forms, or EmailJS

---

## Google Search Console

After going live:
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property (URL prefix: `https://YOUR-USERNAME.github.io/axar-digital-website/`)
3. Verify via HTML meta tag (add to `<head>` of `index.html`)
4. Submit sitemap — create `/sitemap.xml` listing all 7 pages
5. Monitor keyword rankings for `SEBI PIT amendment 2025`, `SEBI PIT compliance software`, `UPSI tracking software`

---

## Design System Quick Reference

| Variable         | Value     | Usage                        |
|------------------|-----------|------------------------------|
| `--navy`         | #1A2E4A   | Headers, nav, backgrounds    |
| `--amber`        | #C97A1E   | CTAs, accents, highlights    |
| `--slate`        | #4A5568   | Body copy                    |
| `--light`        | #EEF2F7   | Section backgrounds          |
| `--red`          | #C0392B   | Risk callouts                |
| `--green`        | #1A6B3A   | Outcomes, positive states    |

Fonts: DM Serif Display (headings) + DM Sans (body) — loaded via Google Fonts CDN.

---

Built by Digital Dhindora for Axar Digital | April 2026
