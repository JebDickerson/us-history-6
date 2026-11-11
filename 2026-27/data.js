/*
  Everything on the class page comes from this one file.
  To update the page, edit the lists below and save. Nothing else needs to change.

  Dates are written "YYYY-MM-DD". For anything that happens on different days
  for A Day and B Day classes, give both:  a: "2026-11-10", b: "2026-11-11"
  For anything that's the same for everyone, use:  date: "2026-11-09"

  "added" is the day something was put on the page. Families who haven't
  visited since before that day see it marked "New".

  If a date moves, change it and record the old one in "was" (same shape:
  was: "2026-11-12"  or  was: { a: "2026-11-12", b: "2026-11-13" }).
  The page then shows it as "Moved" with the old date crossed out.

  Types (these control the colored tag):
    "no-school", "formative", "reflection", "summative", "project", "homework", "event"
*/

window.CLASS = {
  teacher: "Mr. Dickerson",
  course: "6th Grade US History",
  school: "WMMS",
  email: "jebdickerson@lcps.org",

  // Leave null to use the real date. Set a date only to preview the page as of that day.
  pretendToday: null,

  // The day of the most recent update. Shown at the top of the page.
  updated: "2026-11-11",

  // The year's units, in order. Shown as the route across the top.
  units: ["Geography", "Indigenous Americans", "European Exploration", "Colonial America",
          "Revolution", "New Nation", "Westward Expansion and Reforms", "Civil War"],

  // The unit we're in now.
  unit: {
    number: 3,
    name: "European Exploration",
    // First day of the unit. "Past dates" only shows dates from this unit.
    // Leave it null to show every past date.
    starts: null,
    ends: "2026-11-17",
    // DRAFT: big question and key terms need Mr. Dickerson's wording.
    bigQuestion: "Why did Europeans set out across the Atlantic, and how did it change life on both sides?",
    terms: ["Age of Exploration", "Columbian Exchange", "Land claims"],
    // What the unit's major summative looks like. null hides the line.
    summative: null,
    next: "Unit 4, Colonial America, starts the week of Nov 16."
  },

  // The "This week" block at the top. Keep each to a sentence.
  thisWeek: {
    learning: "We're wrapping up Unit 3: how European exploration changed life on both sides of the Atlantic.",
    // One thing families can do. null if there's nothing this week.
    todo: "Help your student be in class for the Unit 3 summative. We take assessments together, so students who are out do them alone."
  },

  // Dates. Once a date passes it moves to "Past dates" on its own.
  dates: [
    { type: "no-school",  title: "No school for Diwali", date: "2026-11-09", added: "2026-11-02" },
    { type: "formative",  title: "Model & Practice",
      note: "Practice for the unit summative, and the formative before it.",
      a: "2026-11-10", b: "2026-11-11", added: "2026-11-02" },
    { type: "reflection", title: "Unit 3 reflection",
      a: "2026-11-12", b: "2026-11-17", added: "2026-11-02" },
    { type: "summative",  title: "Unit 3 major summative",
      a: "2026-11-16", b: "2026-11-13", added: "2026-11-02" }
  ],

  // Weekly posts, newest first: one strong photo and two or three sentences.
  // The first photo is shown large; any others go in a row underneath.
  // The two newest weeks show in full; older weeks fold into "Earlier weeks."
  posts: [
    {
      week: "2026-11-09",
      added: "2026-11-11",
      title: "Unit 3 wraps up",
      text: "Model & Practice this week is both the formative assessment and the practice round for the summative. Next week brings the Unit 3 summative and reflection, and then we start Unit 4.",
      ask: "How should we remember the Age of Exploration? Whose perspectives should we keep in mind?",
      // DRAFT: hint for families on what a strong answer sounds like.
      listenFor: "More than the explorers' side of the story: Native peoples, enslaved Africans, and how the Columbian Exchange affected each."
    },
    {
      week: "2026-11-02",
      added: "2026-11-06",
      title: "The Columbian Exchange on big paper",
      text: "In groups, students built concept maps tracing the crops, animals and diseases that crossed the Atlantic, explaining each link along the way. The maps are up in the hallway now.",
      photos: [
        { src: "photos/concept-map-1.jpg", caption: "Brooke and Noelle's concept map" },
        { src: "photos/concept-map-2.jpg", caption: "Notes written along every trail across the Atlantic" },
        { src: "photos/hallway.jpg",       caption: "The view from the hallway" },
        { src: "photos/title-cards.jpg",   caption: "This week's thinking wall" }
      ]
    }
  ],

  // Standing information. Always on the page, so it doesn't need repeating each week.
  reminders: [
    {
      title: "Absent for an assessment?",
      body: "When a student misses an assessment (formative, minor or major), it's their responsibility to contact me within 1 or 2 days of their return to schedule a make-up. With 150 students, I can't manage that for them, so please help your student reach out."
    },
    {
      title: "Eligible for a retake?",
      body: "Request it right away rather than waiting weeks or, worse, until the end of the grading period. There's a 2-week window for retakes, and there's usually some remediation to do first, so time matters."
    },
    {
      title: "Check in on their sketchbook",
      body: "Sketchbooks are our main tool for keeping a solid record of learning. They should be neat, legible and organized, and your student should be able to talk you through the learning on any given day using theirs."
    }
  ]
};
