// ===================================================================
// MRCS PART A STUDY APP — core data
//   window.BLUEPRINT   — the official Part A question allocation
//   window.PHASES      — adaptive revision plan
//   window.TIPS        — strategy tips shown on the Plan view
//   window.EXAM_DATE / window.PLAN_START — default timeline (user-overridable)
//   window.SPECIALTIES — assembled from data-paper1.js + data-paper2.js
//
// LOAD ORDER: data-paper1.js, data-paper2.js, THEN this file (it concatenates).
//
// Topic IDs are stable forever — statuses, notes and timestamps are keyed off
// them, and all three UI versions share the same localStorage namespace, so a
// rating made in v1 shows up in v2 and v3.
// ===================================================================

// -------------------------------------------------------------------
// The official Part A blueprint, taken verbatim from the Intercollegiate
// "Candidate guide to the MRCS examination" (July 2018), Section 5.
// Part A = 5 hours: Paper 1 (3 h, 180 questions) + Paper 2 (2 h, 120 questions).
// A minimum standard must be reached in EACH paper as well as on the combined
// total, so neither paper can be neglected.
// -------------------------------------------------------------------
window.BLUEPRINT = {
  papers: [
    {
      id: "paper1",
      name: "Applied Basic Sciences",
      short: "Paper 1",
      questions: 180,
      minutes: 180,
      color: "#2a9d8f",
      blurb: "Anatomy, physiology and pathology carry 157 of the 180 marks. This paper rewards systematic, repeated coverage far more than cleverness.",
    },
    {
      id: "paper2",
      name: "Principles of Surgery in General",
      short: "Paper 2",
      questions: 120,
      minutes: 120,
      color: "#c1666b",
      blurb: "Clinical surgery: the common conditions, the perioperative pathway and trauma. Three quarters of the marks sit in those three areas.",
    },
  ],
  // sectionId -> official question count in that paper
  weights: {
    anatomy: 75, physiology: 45, pathology: 37, pharmacology: 8,
    microbiology: 7, imaging: 5, stats: 3,
    conditions: 45, periop: 35, trauma: 30, paeds: 7, profpractice: 3,
    skills: 0,
  },
};

// -------------------------------------------------------------------
// The adaptive plan. Intrinsically 22 steps across 4 phases; the app maps
// those steps onto the real calendar between PLAN_START and EXAM_DATE, so
// the plan compresses or stretches to whatever time you actually have.
// -------------------------------------------------------------------
window.PHASES = [
  {
    id: 1, label: "Phase 1", name: "Foundation",
    weeks: "Weeks 1–7", weekStart: 1, weekEnd: 7,
    color: "#2a9d8f", accent: "#0f3b38",
    weekdayHrsBase: 1.5, dayOffHrsBase: 3,
    qsPerWeekdayBase: 25, qsPerDayOffBase: 60,
    goal: "Build the basic-science spine of the exam. Anatomy is the single largest block in Part A at 75 questions, so it starts now and never stops. The aim of this phase is one clean pass through regional anatomy and general physiology, with questions used to find gaps rather than to score well.",
    strategy: [
      "Treat anatomy as a daily habit rather than a topic you finish. Fifteen minutes of regional anatomy every day for five months beats three intense weeks in December.",
      "Do questions from day one, but read them as a diagnostic tool. In this phase a 45 per cent score with good notes is more useful than a 65 per cent score with none.",
      "Write your own one-page summary for each region as you go. The act of condensing is what fixes the relations in memory.",
      "Keep Paper 2 ticking over with the common conditions you already meet on the ward, so the clinical paper never feels like a separate exam.",
    ],
    systems: [
      { name: "Applied surgical anatomy — thorax & abdomen", priority: "HIGH", weeks: "Wks 1–3", trackerId: "anatomy" },
      { name: "Applied surgical physiology — general principles", priority: "HIGH", weeks: "Wks 1–3", trackerId: "physiology" },
      { name: "Applied surgical anatomy — limbs, spine, head & neck", priority: "HIGH", weeks: "Wks 4–7", trackerId: "anatomy" },
      { name: "General pathological principles", priority: "MED", weeks: "Wks 4–7", trackerId: "pathology" },
      { name: "Common surgical conditions — gastrointestinal", priority: "MED", weeks: "Wks 5–7", trackerId: "conditions" },
    ],
  },
  {
    id: 2, label: "Phase 2", name: "Consolidation",
    weeks: "Weeks 8–14", weekStart: 8, weekEnd: 14,
    color: "#4a8fd4", accent: "#123152",
    weekdayHrsBase: 2, dayOffHrsBase: 4,
    qsPerWeekdayBase: 40, qsPerDayOffBase: 90,
    goal: "Finish the first full pass of both papers and start the second pass of anatomy. By the end of this phase every section in the Tracker should have been touched at least once, with nothing still sitting at 'not started'.",
    strategy: [
      "Complete systems pathology and organ-system physiology, which together account for another 60 or so marks.",
      "Move Paper 2 to the front of the week: perioperative management and trauma are 65 marks between them and are quick to learn because you already do most of it clinically.",
      "Start timed blocks of 30 questions. Part A is a pace exam — 180 questions in 180 minutes leaves you one minute per question with nothing spare.",
      "Begin the second anatomy pass on the regions you rated red, not on the ones you enjoy.",
    ],
    systems: [
      { name: "Systems pathology", priority: "HIGH", weeks: "Wks 8–10", trackerId: "pathology" },
      { name: "Organ-system physiology", priority: "HIGH", weeks: "Wks 8–10", trackerId: "physiology" },
      { name: "Perioperative management", priority: "HIGH", weeks: "Wks 9–12", trackerId: "periop" },
      { name: "Trauma & the multiply injured patient", priority: "HIGH", weeks: "Wks 11–14", trackerId: "trauma" },
      { name: "Anatomy — second pass on red topics", priority: "HIGH", weeks: "Wks 8–14", trackerId: "anatomy" },
      { name: "Microbiology & pharmacology", priority: "MED", weeks: "Wks 12–14", trackerId: "microbiology" },
    ],
  },
  {
    id: 3, label: "Phase 3", name: "Intensification",
    weeks: "Weeks 15–19", weekStart: 15, weekEnd: 19,
    color: "#d4a24a", accent: "#4a3a12",
    weekdayHrsBase: 2.5, dayOffHrsBase: 5,
    qsPerWeekdayBase: 60, qsPerDayOffBase: 120,
    goal: "Convert coverage into marks. This is the highest-volume question phase: two full passes of the question bank, with every wrong answer written into your own notes and re-tested a week later.",
    strategy: [
      "Weight your revision by the blueprint, not by interest. Use the Blueprint view — if a section is 75 marks and you are amber, it deserves more of your week than a 3-mark section you have already greened.",
      "Do mixed-topic blocks now. Single-topic blocks flatter you because the answer format gives the topic away.",
      "Clear the small high-yield sections completely: imaging (5), data interpretation and audit (3), medico-legal (3), paediatrics (7). Twenty-odd marks that are genuinely learnable in a fortnight.",
      "Re-test every red and amber topic. The Tracker's day-counter is there to show you what you have not looked at since your first pass.",
    ],
    systems: [
      { name: "Full question-bank pass — mixed blocks", priority: "EXAM", weeks: "Wks 15–19" },
      { name: "Anatomy — third pass, image-based", priority: "HIGH", weeks: "Wks 15–19", trackerId: "anatomy" },
      { name: "Common surgical conditions — complete", priority: "HIGH", weeks: "Wks 15–17", trackerId: "conditions" },
      { name: "Imaging, statistics & audit", priority: "MED", weeks: "Wks 16–17", trackerId: "imaging" },
      { name: "Paediatric surgery & professional practice", priority: "MED", weeks: "Wks 18–19", trackerId: "paeds" },
    ],
  },
  {
    id: 4, label: "Phase 4", name: "Final Stretch",
    weeks: "Weeks 20–22", weekStart: 20, weekEnd: 22,
    color: "#c1666b", accent: "#4a1a1d",
    weekdayHrsBase: 2, dayOffHrsBase: 4,
    qsPerWeekdayBase: 50, qsPerDayOffBase: 100,
    goal: "Consolidate and arrive rested. No new material after the start of this phase — you are now rehearsing recall and pace, not learning.",
    strategy: [
      "Two full timed mocks, both papers on the same day, to rehearse the five-hour format including the break.",
      "Read only your own summaries and your list of previously wrong answers. New textbooks at this point add anxiety, not marks.",
      "Do a final anatomy sweep in the last week: it is the biggest block and the most volatile if left alone.",
      "Stop the night before. Sleep is worth more than the last twenty questions.",
    ],
    systems: [
      { name: "Timed full mocks — both papers", priority: "EXAM", weeks: "Wks 20–22" },
      { name: "Own-notes review & previously wrong answers", priority: "HIGH", weeks: "Wks 20–22" },
      { name: "Final anatomy sweep", priority: "HIGH", weeks: "Wk 22", trackerId: "anatomy" },
    ],
  },
];

window.TIPS = [
  {
    icon: "🎯",
    title: "Revise in proportion to the blueprint",
    body: "Anatomy, physiology and pathology are 157 of Paper 1's 180 marks, and common conditions, perioperative care and trauma are 110 of Paper 2's 120. Everything else combined is worth about 40 marks. The Blueprint view sorts your sections by marks at stake so you can see, at a glance, where an hour buys the most.",
  },
  {
    icon: "⏱️",
    title: "Both papers must be passed",
    body: "The pass is set by standard setting on each paper separately as well as on the combined total, so a strong Paper 1 will not rescue a weak Paper 2. If one paper is consistently lagging in your practice scores, move hours towards it even if it is the paper you enjoy less.",
  },
  {
    icon: "🧠",
    title: "Space the anatomy, do not block it",
    body: "Regional anatomy is 63 of the 75 anatomy marks and decays faster than anything else in the syllabus. Fifteen minutes every day across the whole plan will hold far more than a single intensive fortnight, which is why anatomy appears in all four phases.",
  },
  {
    icon: "❌",
    title: "Your wrong answers are the syllabus",
    body: "Keep one running document of every question you get wrong, written in your own words as a single sentence of the underlying principle. Re-read it weekly. Most candidates who improve between attempts do so by closing repeat errors rather than by covering new ground.",
  },
  {
    icon: "🩻",
    title: "Practise on images early",
    body: "Images appear in both papers, and cross-sectional anatomy is much harder to learn under time pressure. Work through axial computed tomography (CT) of the thorax, abdomen and pelvis alongside your regional anatomy from Phase 1 rather than saving it for the end.",
  },
  {
    icon: "📅",
    title: "Protect a realistic weekly total",
    body: "Set the hours-per-week slider to what you can genuinely sustain around on-calls, then use the day-type toggle to mark the days that get away from you. A plan you actually complete at 12 hours a week beats an abandoned one at 25.",
  },
];

// Default timeline. Both are only defaults — the live values are user-chosen
// and live in localStorage (mrcs_exam_date / mrcs_plan_start).
window.EXAM_DATE = "2027-01-12";
window.PLAN_START = "2026-07-27";

// -------------------------------------------------------------------
// Assemble the tracker. The six content files must load BEFORE this one.
// Order here is the order the sections appear everywhere in the app.
// -------------------------------------------------------------------
window.SPECIALTIES = [].concat(
  window.MRCS_ANATOMY    || [],   // Paper 1 — 75
  window.MRCS_PHYSIOLOGY || [],   // Paper 1 — 45
  window.MRCS_PATHOLOGY  || [],   // Paper 1 — 37 + pharm 8 + micro 7 + imaging 5 + stats 3
  window.MRCS_CONDITIONS || [],   // Paper 2 — 45
  window.MRCS_PERIOP     || [],   // Paper 2 — 35 + basic surgical skills
  window.MRCS_TRAUMA     || []    // Paper 2 — 30 + paeds 7 + professional 3
);

// Convenience roll-ups used by the Blueprint view.
window.SECTION_BY_ID = {};
window.SPECIALTIES.forEach(function (s) { window.SECTION_BY_ID[s.id] = s; });
window.TOTAL_TOPICS = window.SPECIALTIES.reduce(function (n, s) { return n + s.conditions.length; }, 0);
