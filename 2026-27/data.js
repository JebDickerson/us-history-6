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
    "no-school", "formative", "minor" (minor summative), "summative" (major summative),
    "reflection", "project", "homework", "event"
*/

window.CLASS = {
  teacher: "Mr. Dickerson",
  course: "6th Grade US History",
  school: "WMMS",
  email: "jebdickerson@lcps.org",

  // Leave null to use the real date. Set a date only to preview the page as of that day.
  pretendToday: null,

  // The day of the most recent update. Shown at the top of the page.
  updated: "2026-11-14",

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
    bigQuestion: "How should we remember the Age of Exploration?",
    terms: ["Motivation", "Obstacle", "Gold, God, and Glory", "Indigenous", "Interaction",
            "Accomplishments", "Columbian Exchange", "Northwest Passage", "Explorer vs. exploiter"],
    // What the unit's major summative looks like. null hides the line.
    summative: "Students work through an evidence file on an assigned explorer and make a claim: was this person more of an explorer or more of an exploiter? They support the claim with evidence from the file.",
    next: "Unit 4, Colonial America, starts the week of Nov 16."
  },

  // The "This week" block at the top. Keep each to a sentence.
  thisWeek: {
    learning: "We're closing out Unit 3 and starting Unit 4, Colonial America, beginning with the Transatlantic Slave Trade and Point Comfort, then Roanoke and Jamestown.",
    // The thinking move we're leaning on right now. Must match a name in thinkingMoves below.
    thinking: "Reasoning with Evidence",
    thinkingNote: "Making a claim and backing it up with what the sources actually say, like students did with their explorer evidence files.",
    // One thing families can do. null if there's nothing this week.
    todo: "Unit 4 starts with a brief, age-appropriate lesson on the Transatlantic Slave Trade. Your student may have questions at the dinner table, so I wanted you to be aware."
  },

  // Dates. Once a date passes it moves to "Past dates" on its own.
  dates: [
    { type: "no-school",  title: "No school for Diwali", date: "2026-11-09", added: "2026-11-02" },
    { type: "formative",  title: "Model & Practice",
      note: "Practice for the unit summative, and the formative before it.",
      a: "2026-11-10", b: "2026-11-11", added: "2026-11-02" },
    { type: "summative",  title: "Unit 3 major summative",
      a: "2026-11-16", b: "2026-11-13", added: "2026-11-02" },
    { type: "minor", title: "Sketchbook due",
      note: "Sketchbooks are always due the day of the unit's major summative.",
      a: "2026-11-16", b: "2026-11-13", added: "2026-11-11" },
    { type: "minor", title: "Unit 3 reflection due",
      note: "B Day: due by the end of class.",
      a: "2026-11-16", b: "2026-11-17", added: "2026-11-14" },
    { type: "event", title: "Unit 4 begins",
      note: "Starts with the Transatlantic Slave Trade and Point Comfort.",
      a: "2026-11-18", b: "2026-11-19", added: "2026-11-14" },
    { type: "no-school", title: "Thanksgiving break",
      note: "No school Wednesday 11/25 through Friday 11/27.",
      date: "2026-11-25", added: "2026-11-14" },
    { type: "minor", title: "Vocab & Map",
      a: "2026-12-07", b: "2026-12-08", added: "2026-11-14" },
    { type: "formative", title: "Mystery Colony practice",
      a: "2026-12-07", b: "2026-12-08", added: "2026-11-14" },
    { type: "summative", title: "Mystery Colony",
      note: "The Unit 4 end-of-unit major.",
      a: "2026-12-09", b: "2026-12-10", added: "2026-11-14" },
    { type: "minor", title: "Sketchbook due",
      note: "Sketchbooks are always due the day of the unit's major summative.",
      a: "2026-12-09", b: "2026-12-10", added: "2026-11-14" },
    { type: "summative", title: "Socratic Seminar",
      a: "2026-12-15", b: "2026-12-16", added: "2026-11-14" },
    { type: "no-school", title: "Winter break",
      note: "No school Monday 12/21 through Friday 1/1.",
      date: "2026-12-21", added: "2026-11-14" }
  ],

  // Weekly posts, newest first: one strong photo and two or three sentences.
  // The first photo is shown large; any others go in a row underneath.
  // The two newest weeks show in full; older weeks fold into "Earlier weeks."
  posts: [
    {
      week: "2026-11-09",
      added: "2026-11-14",
      title: "Explorer or exploiter?",
      text: "Students worked through evidence files, each on a single explorer, placed that explorer on a scale from explorer to exploiter, and backed up the claim with evidence from the file. Also pictured: the sketchbook checklist, and a name card from a student who knows I'm always asking whether anyone has freshly baked cookies. Thankfully, a few students regularly deliver.",
      photos: [
        { src: "photos/evidence-file-coronado.jpg", caption: "An evidence file on Coronado and the Zuni, with the explorer-to-exploiter scale" },
        { src: "photos/working-together.jpg",      caption: "Working through an evidence file together" },
        { src: "photos/sketchbook-checklist.jpg",  caption: "The sketchbook checklist: pages 9 to 16, plus all taped-in items" },
        { src: "photos/cookie-name-card.jpg",      caption: "A gift from a student. Still accepting cookies." }
      ],
      ask: "Who was your explorer for the summative, and did you decide they were more of an explorer or more of an exploiter?",
      listenFor: "Specific evidence from the file, not just \"because he was mean.\" Bonus if they can explain why someone might argue the other side."
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

  // The eight thinking moves (Project Zero, Making Thinking Visible), in the
  // wording and colors of the classroom posters. Rarely changes.
  thinkingMoves: [
    { name: "Observing Closely & Describing What's There", icon: "target",  color: "#cf5c99",
      questions: ["What do you see and notice?", "How would you describe it to someone who can't see it?"] },
    { name: "Wondering & Asking Questions",                icon: "question", color: "#dc5d66",
      questions: ["What are you curious about or confused by?", "What question needs answering for you to truly understand this?"] },
    { name: "Making Connections",                          icon: "link",     color: "#da643a",
      questions: ["How does this fit with what you already know?", "What does it remind you of or make you think about?"] },
    { name: "Considering Different Viewpoints",            icon: "venn",     color: "#c77d04",
      questions: ["What's another angle on this?", "How, and why, might someone else see this differently?"] },
    { name: "Building Explanations & Interpretations",     icon: "blocks",   color: "#289e62",
      questions: ["What's really going on here?", "Does your explanation fit everything we know?"] },
    { name: "Reasoning with Evidence",                     icon: "pillars",  color: "#039ba5",
      questions: ["What makes you say that?", "How does that support your claim?"] },
    { name: "Uncovering Complexity & Going Deeply",        icon: "depth",    color: "#3178db",
      questions: ["What lies beneath the surface?", "What's missing from the simple version?"] },
    { name: "Capturing the Heart & Forming Conclusions",   icon: "diamond",  color: "#5d4dbf",
      questions: ["What is at the core or center of this?", "Can you describe your understanding of this in one sentence?"] }
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
      body: "Sketchbooks are our main tool for keeping a solid record of learning. They should be neat, legible and organized, and your student should be able to talk you through the learning on any given day using theirs. Sketchbooks are always due on the day of the unit's major summative, and they count as a minor summative."
    }
  ]
};
