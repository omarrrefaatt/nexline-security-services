# Nexline Security Website

Nexline's responsive marketing site, built with React, TypeScript, and Vite.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Mail services

The quote and contact forms call the Node API at `/api/mail`. The API uses
Nodemailer in `server/mailService.js`, with SMTP configuration loaded from the
environment. Copy `.env.example` to `.env` and replace the dummy SMTP host,
user, password, sender, and company recipient values.

The server sends the organized company notification first, then a confirmation
to the client. `src/assets/logo.png` is attached inline with the
`cid:nexline-logo` content ID, so the company logo renders without requiring a
public image URL. Keep `.env` out of version control and never put SMTP
credentials in `VITE_` variables.

The primary page lives in `src/pages/home/Home.tsx`. Site content is kept in `src/data/site.ts`, and the visual system is defined in `src/index.css`.
