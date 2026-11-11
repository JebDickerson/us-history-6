/*
  Everything on the class page comes from this one file.
  To update the page, edit the lists below and save. Nothing else needs to change.

  Dates are written "YYYY-MM-DD". For anything that happens on different days
  for A Day and B Day classes, give both:  a: "2026-11-10", b: "2026-11-11"
  For anything that's the same for everyone, use:  date: "2026-11-09"

  Types (these control the colored tag):
    "no-school", "formative", "reflection", "summative", "project", "homework", "event"
*/

window.CLASS = {
  teacher: "Mr. Dickerson",
  course: "6th Grade US History",
  school: "WMMS",
  email: "jebdickerson@lcps.org",

  // For the mockup, the page pretends today is this date so the sample content
  // lines up. Set it to null and the page uses the real date.
  pretendToday: null,

  // What unit you're in right now.
  unit: {
    name: "Unit 3: European Exploration",
    // First day of the unit. "Past dates" only shows dates from this unit.
    // Leave it null to show every past date in the list below.
    starts: null,
    ends: "2026-11-17",
    next: "Unit 4 starts the week of Nov 16, the last few days before Thanksgiving break."
  },

  // The one thing families should know right now. Keep it short.
  oneThing:
    "We're at the end of Unit 3, with a few assessments in the next week. Please try to have your student in class as much as possible. We prioritize collaborative assessments, so when students are out, they have to do them alone.",

  // Dates for the unit. Once a date passes it moves to the "Past dates" list.
  dates: [
    { type: "no-school",  title: "No school for Diwali", date: "2026-11-09" },
    { type: "formative",  title: "Model & Practice",
      note: "Practice for the unit summative, and the formative before it.",
      a: "2026-11-10", b: "2026-11-11" },
    { type: "reflection", title: "Unit 3 reflection",
      note: "Odd-schedule day, so A Day classes get a little out of order.",
      a: "2026-11-12", b: "2026-11-17" },
    { type: "summative",  title: "Unit 3 major summative",
      note: "A/B swap on Monday 11/16: A Day classes take the summative that day.",
      a: "2026-11-16", b: "2026-11-13" }
  ],

  // Weekly posts, newest first. Photos live in the photos/ folder.
  // The two newest show in full; older weeks fold into "Earlier weeks."
  posts: [
    {
      week: "2026-11-09",
      title: "Unit 3 wraps up",
      body: [
        "Short week again, and it's a busy one. Model & Practice on Tuesday and Wednesday is the formative assessment and the practice round for the summative.",
        "Because of Thursday's schedule, A Day and B Day swap order next week. A Day classes take the major summative on Monday 11/16, and B Day classes do the reflection on Tuesday 11/17. After that we start Unit 4."
      ],
      ask: "How should we remember the Age of Exploration? Whose perspectives should we keep in mind?"
    },
    {
      week: "2026-11-02",
      title: "The Columbian Exchange on big paper",
      body: [
        "We continued Day 5's lesson on the Columbian Exchange. In groups, students built concept maps (a powerful tool to show student thinking) tracing the crops, animals and diseases that crossed the Atlantic, and how each one changed life on both sides.",
        "Groups didn't just list what crossed. They drew trails connecting items and explained each link along the way: crops that helped solve hunger, horses that changed how people hunted, and diseases that devastated Native peoples. The maps are up in the hallway now.",
        "Thursday and Friday, in a station rotation, students looked at the five European countries that set out in the wake of Columbus's journey: their explorers, and where each one claimed land in the Americas."
      ],
      photos: [
        { src: "photos/concept-map-1.jpg", caption: "Brooke and Noelle's concept map" },
        { src: "photos/concept-map-2.jpg", caption: "Notes written along every trail across the Atlantic" },
        { src: "photos/hallway.jpg",       caption: "The view from the hallway" },
        { src: "photos/title-cards.jpg",   caption: "This week's thinking wall" }
      ]
    }
  ],

  // Standing information. Families can find it any time, so it doesn't need
  // to be repeated every week.
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
