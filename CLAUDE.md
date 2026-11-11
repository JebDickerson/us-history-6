# Weekly class page update

This repo is Mr. Dickerson's 6th grade US History page for families, published with
GitHub Pages at https://jebdickerson.github.io/us-history-6/2026-27/ from the `main` branch.
All content lives in `2026-27/data.js`. The page itself (`index.html`) rarely changes.

When Mr. Dickerson says "weekly update" (or similar), run the interview below, then make the update.

## The interview

Ask one question at a time, conversationally. Short answers, voice-to-text, and "same as last
week" or "skip" are all fine. Show the relevant current content from `data.js` when it helps
(e.g. list the upcoming dates before asking about changes).

1. **Dates.** Here's what's on the calendar now: [list upcoming dates]. Anything new in the next
   two weeks (assessments, projects, homework, days off)? Does any of it differ by A Day / B Day?
2. **Changes.** Did any of those dates move or get cancelled?
3. **Do this.** Is there one thing families should do this week? (Fine to say nothing.)
4. **Learning.** In a sentence, what are students learning right now?
5. **The moment.** What was the best moment in class this week? Upload 1 to 4 photos if you have
   them (only students without opt-outs, no recognizable faces). Which one should lead?
6. **Dinner question.** What should families ask their student this week? And what does a good
   answer include, so a parent knows what to listen for?
7. **Unit check** (only ask if a unit is starting or ending): new unit's name, its big question,
   three or four key terms, what the summative looks like, and its first day.
8. **Anything else?** A reminder to feature, a policy to change, something to remove?

## Making the update

- Write the post text in Mr. Dickerson's voice: two or three sentences, plain and warm. Don't
  invent details he didn't give. If something is unclear, ask rather than guess.
- New dates and posts get `added: "<today>"` so returning families see them marked New.
- A moved date: change it and put the old one in `was`. Don't delete it and re-add.
- Set `updated` to today. Rewrite `thisWeek.learning` and `thisWeek.todo` (`todo: null` if none).
- Photos: resize to about 1100px on the long side, JPEG quality ~80, strip metadata, save in
  `2026-27/photos/` with a short descriptive filename. First photo in the list is the large one.
- Every unit: the reflection is a minor summative (`type: "minor"`), and a "Sketchbook due"
  entry (`type: "minor"`) goes on the same A/B dates as the unit's major summative.
- New post goes at the top of `posts`. Leave older posts in place; the page folds them.
- Unit change: update `unit` (number, name, starts, ends, bigQuestion, terms, summative, next)
  and fill in that unit's name in `units`.
- Before pushing, show a short summary of what's changing and get a yes.
- Commit to `main` with a message like "Week of Nov 16 update" and push.

## After pushing

Give him the Friday email, ready to paste. Three lines plus the link, no more:

> Two things this week: [the most important date for each A/B day, or the one action].
> [One line about the moment of the week / new photos.]
> Everything's here: https://jebdickerson.github.io/us-history-6/2026-27/

## Rules

- Say "Indigenous" or "Indigenous Americans," never "Native peoples" or "Native Americans."
- Never add student last names, grades, or anything about an individual student's performance.
- Photo captions can use first names only if Mr. Dickerson includes them.
- Keep the "Good to know" reminders out of weekly posts unless he asks to feature one.
