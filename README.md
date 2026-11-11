# Mr. Dickerson's US History class page

A page for families: upcoming assessments and deadlines (filtered by A Day / B Day),
weekly updates with photos, and standing class policies.

## Layout

- `index.html` sends visitors to the current school year's page.
- `2026-27/` is this year's page.
  - `data.js` holds everything the page shows. This is the only file to edit for updates.
  - `photos/` holds the photos used in weekly posts.
  - `index.html` is the page itself. It doesn't need to change week to week.

## Updating

The easy way: open a Claude Code session on this repo and say "weekly update". Claude asks a
few questions (see `CLAUDE.md`), makes the changes, and hands back a short Friday email.

To edit by hand, open `2026-27/data.js` and edit the lists:

- `dates`: assessments, deadlines, days off. Use `date:` for things that are the same for
  everyone, or `a:` and `b:` for things that differ by A Day / B Day. Past dates drop off
  the page automatically.
- `posts`: weekly updates, newest first. Add photos to `photos/` and list them in the post.
- `thisWeek`: one sentence on what we're learning, and one thing families can do (or `null`).
- `unit` and `units`: the current unit's card and the route of units across the top.
- `reminders`: standing policies (absences, retakes, sketchbooks).

## New school year

1. Copy `2026-27/` to a new folder such as `2027-28/`.
2. Clear its `dates`, `posts` and photos; keep the reminders.
3. Point the root `index.html` at the new folder.
4. Replace the old year's page with a short "this school year has ended" note and remove its photos.

## Publishing

Settings → Pages → Build and deployment → Source: "Deploy from a branch", Branch: `main`, folder `/ (root)`.
The site is then at https://jebdickerson.github.io/us-history-6/
