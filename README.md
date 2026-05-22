# a1-website

Astro + React public marketing site for A1 Quality Paralegal, deployed to
`a1paralegal.com` via GitHub Pages. Six pages plus a contact form that POSTs
to `a1-api`.

Private content — branding, internal docs, the `IntakeForm` React island —
lives in the `internal/` git submodule, which points at the
`a1-website-internal` private repo. The public repo never contains client
data or unreleased internal materials.

## Run

```bash
npm install      # first time only
npm run dev      # local dev server (Astro, default port 4321)
npm run build    # production build → dist/
npm run preview  # preview the built output
```

## Submodule

After a fresh clone, initialize the submodule:

```bash
git submodule update --init --recursive
```

To pull updates from the internal repo:

```bash
git submodule update --remote
git add internal
git commit -m "chore: bump internal submodule"
```

## Layout

| Path | Purpose |
|---|---|
| `src/` | Astro static site, React islands, styles |
| `public/` | Static files served as-is (favicons, OG images, verification HTML) |
| `assets/branding/` | Public branding (logos, favicons) |
| `internal/` | Submodule — private content, do not edit content here directly |
| `docs/` | Site documentation — copy manual, domain wiring, SEO audits, server setup |
| `instructions/content-update-rules.md` | Skill file: how to update copy, add pages, manage branding |

## API hookup

Forms POST to `PUBLIC_API_URL/intake` and `PUBLIC_API_URL/submit-intake`.
`PUBLIC_API_URL` lives in `.env` (never committed) and points at the
production `a1-api` endpoint. The contact form falls back gracefully if the
API is unreachable.

## Deployment

GitHub Actions builds `dist/` and publishes to GitHub Pages. The
`a1paralegal.com` apex and `www` record are CNAMEd at the registrar — see
`docs/domain-wiring.md`. The Astro `base` path has been removed; do not
re-add it (would break the live URLs).

See `CLAUDE.md` for the lean agent router.
