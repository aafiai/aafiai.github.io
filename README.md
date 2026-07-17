# Aafia Iqbal — Portfolio Website

A two-page personal site: `index.html` is the main page (Hero, About, Experience,
Education, Featured Projects, Contact). `know-more.html` holds the deeper stuff
(Projects archive, Leadership & Organization, Honors & Awards, Certifications,
LinkedIn Learning & Online Courses, Tools & Competencies, Volunteering, Languages).

## Files
- `index.html` — main page
- `know-more.html` — "Know More About Me" page
- `styles.css` — all styling (shared by both pages)
- `script.js` — nav toggle, KPI count-up, coursework toggle, certificate lightbox
- `assets/honors/`, `assets/certs/`, `assets/volunteering/` — certificate images used across both pages

**Keep the folder structure exactly as-is** — the pages reference images via relative
paths like `assets/certs/matlab.jpg`, so moving or renaming files will break links.

## Publish it on GitHub Pages (free hosting)

1. Go to [github.com](https://github.com) and log in (or create an account).
2. Click the **+** icon top-right → **New repository**.
   - Name it `<your-github-username>.github.io` (replace with your actual username) for the cleanest possible URL — e.g. if your username is `aafiai`, name the repo `aafiai.github.io`.
   - Set it to **Public**.
   - Don't initialize with a README (you already have one).
   - Click **Create repository**.
3. On the empty repo page, click **uploading an existing file**.
4. Drag in **everything from inside this folder** — `index.html`, `know-more.html`, `styles.css`, `script.js`, and the whole `assets` folder (drag the `assets` folder itself; GitHub preserves the folder structure).
5. Scroll down, write a commit message like "Initial site upload", and click **Commit changes**.
6. Go to the repo's **Settings** tab → **Pages** (left sidebar).
7. Under "Build and deployment," set **Source** to **Deploy from a branch**, branch **main**, folder **/ (root)**. Click **Save**.
8. Wait 1–2 minutes, then refresh that Settings → Pages screen — it'll show your live URL:
   - `https://<your-username>.github.io/` (if the repo is named `<your-username>.github.io`)
   - `https://<your-username>.github.io/<repo-name>/` (if you used a different repo name)

## To update later
Edit any file directly on GitHub (click the file → pencil/edit icon → commit), or
re-upload changed files the same way as step 3–5. GitHub Pages redeploys
automatically within a minute or two of any commit.

## Known gaps (as of this build)
- Outage Movement Prediction has no GitHub link yet (not published).
- Contact email is a placeholder (`f20180061d@bits-pilani.ac.in`) until a professional one is set up.
