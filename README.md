# Pragnya Educational & Social Trust

A Next.js + Tailwind CSS website with local JSON flat-file storage and file uploads to `public/uploads/`.

## Features

- Home page with hero section, chairman/managing trustee messages, mission, and donation box.
- Registration form that saves to `data/members.json`.
- Contact/feedback form that saves to `data/feedback.json`.
- Gallery page that displays images from `public/uploads/` and `data/gallery.json`.
- Admin dashboard with hardcoded login, gallery upload, and local data viewing.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open in browser:

```text
http://localhost:3000
```

## Admin

- Username: `admin`
- Password: `pragnya123`

## Notes

- No external database is used.
- Data is stored in `data/*.json`.
- Uploaded images are saved in `public/uploads/`.
