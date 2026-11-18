// =====================================================================
//  CLINIC DEMO CONFIG
//  Each clinic gets its own link:   /?clinic=<key>     e.g.  /?clinic=care-medical
//  A clinic entry only needs what is different. Everything else comes from
//  CLINIC_DEFAULTS at the bottom (nested objects merge too).
//  Lines marked TODO: fill them in from Google Maps or after talking to the clinic.
//
//  Photos in /images are free stock photos from Pexels (free for commercial use,
//  no attribution required). Doctor photos are clearly labelled "Sample photo".
//  NEVER put a real doctor's name under a stock photo. For the paid website,
//  use the clinic's own photos and the doctors' real names (with permission).
// =====================================================================

window.DEMO_BY = {
  name: "Rohit Sharma",
  portfolio: "https://portfolio-green-rho-91.vercel.app/",
};

window.CLINICS = {
  // ---------------------------------------------------------------- Sage green
  "care-medical": {
    name: "Care Medical",
    tagline: "Clinic",
    phone: "919999255607", // 91 + 10-digit number (WhatsApp + call)
    area: "Delhi", // TODO: exact locality
    theme: { primary: "#2f5d46", bg: "#f8f6f0" },
    images: { hero: "images/p7579831.jpg", about: "images/p8459996.jpg" },
    headline: ["Healthier days", "start with", "caring hands."],
  },

  // ---------------------------------------------------------------- Teal
  jeevan: {
    name: "Jeevan",
    tagline: "Health Care",
    phone: "919803633454",
    area: "Delhi", // TODO
    theme: { primary: "#1d5e6a", bg: "#f5f8f7" },
    images: { hero: "images/p7578797.jpg", about: "images/p8460095.jpg" },
    eyebrow: "Care for every member of your family",
    headline: ["Care for life.", "Close to", "your home."],
    heroCard: ["Jeevan means life.", "We care for yours like family."],
  },

  // ---------------------------------------------------------------- Navy (orthopaedic hospital)
  orthostar: {
    name: "Orthostar",
    tagline: "Hospital",
    phone: "919268826745",
    area: "Delhi", // TODO
    theme: { primary: "#1f3b63", bg: "#f6f7fa" },
    images: { hero: "images/p4266939.jpg", about: "images/p8460095.jpg" },
    eyebrow: "Bone, joint & spine care",
    headline: ["Move freely.", "Live without", "pain."],
    subheadline:
      "Expert orthopaedic care for joint pain, fractures, sports injuries and spine problems, with a clear treatment plan from day one.",
    heroCard: ["Back on your feet.", "Step by step, together."],
    highlights: [
      { icon: "clock", title: "Unhurried consultations", text: "Time to understand your pain." },
      { icon: "activity", title: "Diagnosis to recovery", text: "Treatment and physio under one roof." },
      { icon: "clipboard", title: "Clear recovery plan", text: "Know every next step." },
    ],
    servicesSection: {
      title: "Care for every bone and joint.",
      text: "From a sprained ankle to a knee replacement: expert care, a clear plan and support all the way to recovery.",
    },
    // TODO: confirm the actual services with the hospital
    services: [
      { icon: "bone", title: "Joint pain & arthritis", text: "Relief for knee, hip and shoulder pain, from medication to injections." },
      { icon: "shield", title: "Fracture care", text: "Quick, careful treatment of fractures, sprains and dislocations." },
      { icon: "activity", title: "Knee & hip replacement", text: "Consultation and surgery planning for joint replacement." },
      { icon: "heart", title: "Sports injuries", text: "Ligament, muscle and tendon injuries treated so you can play again." },
      { icon: "spine", title: "Spine & back pain", text: "Care for slipped disc, sciatica, neck and lower back pain." },
      { icon: "users", title: "Physiotherapy", text: "Guided rehab sessions to rebuild strength and movement." },
    ],
    doctors: [
      { img: "images/p19438560.jpg", name: "Orthopaedic Surgeon", role: "Doctor's name & qualifications here", quote: "Every patient deserves to move without pain." },
      { img: "images/p4173251.jpg", name: "Joint & Spine Specialist", role: "Doctor's name & qualifications here", quote: "A clear diagnosis is the first step to recovery." },
      { img: "images/p5998474.jpg", name: "Physiotherapist", role: "Name & qualifications here", quote: "Small steps every day add up to a full recovery." },
    ],
    cta: { title: ["Let's get you", "moving again."] },
    footerTag: "Bone, joint & spine care.",
  },

  // ---------------------------------------------------------------- Maroon
  "sunder-lal": {
    name: "Sunder Lal",
    tagline: "Hospital",
    phone: "918826756926",
    area: "Delhi", // TODO
    theme: { primary: "#7a2f3b", bg: "#faf6f3" },
    images: { hero: "images/p4266936.jpg", about: "images/p8459996.jpg" },
    eyebrow: "Trusted care for Delhi families",
    headline: ["Trusted care", "for every", "generation."],
    heroCard: ["Care you can count on.", "For you, your parents and your kids."],
    // TODO: confirm the actual departments with the hospital
    services: [
      { icon: "stethoscope", title: "General medicine", text: "Fever, infections, BP, sugar and everyday health concerns." },
      { icon: "activity", title: "General surgery", text: "Consultation and planned surgical care with clear guidance." },
      { icon: "venus", title: "Maternity & women's health", text: "Supportive care through pregnancy and every stage of life." },
      { icon: "smile", title: "Child care", text: "Gentle care for little ones, from vaccines to growing years." },
      { icon: "flask", title: "Lab & diagnostics", text: "Blood tests and reports, explained in simple words." },
      { icon: "shield", title: "Health check-ups", text: "Preventive packages to catch problems early." },
    ],
    footerTag: "Trusted care for every generation.",
  },
};

// =====================================================================
//  DEFAULTS: shared by every clinic unless overridden above
// =====================================================================
window.CLINIC_DEFAULTS = {
  tagline: "Clinic",
  area: "Delhi",
  address: "", // TODO: full address. If empty, the map searches "name + area"
  theme: { primary: "#2f5d46", bg: "#f8f6f0" },
  images: { hero: "", about: "" },

  eyebrow: "A little care goes a long way",
  headline: ["A healthier you.", "A little more", "human care."],
  subheadline:
    "Thoughtful healthcare for you and the people you love. From everyday check-ups to unexpected moments, we listen first, then guide and treat.",
  heroNote: "New patients welcome. Every story matters.",
  heroCard: ["You're more than a patient.", "You're a person. We start there."],

  highlights: [
    { icon: "clock", title: "Time to be heard", text: "Appointments that are never rushed." },
    { icon: "users", title: "Care for the whole family", text: "Kids, adults and elders." },
    { icon: "clipboard", title: "Clear next steps", text: "Medicines and follow-ups explained." },
  ],

  servicesSection: {
    label: "Our services",
    title: "Care for every chapter.",
    text: "For the everyday, the unexpected and everything in between. Personal care that grows with you and your family.",
  },
  // TODO: confirm the actual services with the clinic
  services: [
    { icon: "stethoscope", title: "General physician", text: "Your first call for fever, infections and everyday health concerns." },
    { icon: "shield", title: "Preventive check-ups", text: "Stay ahead of problems with regular check-ups and screenings." },
    { icon: "smile", title: "Child care", text: "Gentle, reassuring care for little ones, from vaccines to growing years." },
    { icon: "venus", title: "Women's health", text: "Supportive care for your needs, at every stage of life." },
    { icon: "heart", title: "Diabetes & BP care", text: "Long-term support to manage sugar, BP and thyroid, and live well." },
    { icon: "flask", title: "Lab tests & reports", text: "Blood tests and reports, explained to you in simple words." },
  ],

  approach: {
    label: "Our approach",
    title: ["Good care starts", "with listening."],
    text: "Your health is personal, so your care should be too. We take the time to understand your story, answer your questions and build a plan that feels right for you.",
    points: [
      { title: "We listen first.", text: "Room for your questions, worries and what matters most." },
      { title: "We see the whole you.", text: "Care that connects your health, habits and everyday life." },
      { title: "We're in it together.", text: "A clear plan, and a team that helps you take the next step." },
    ],
    caption: ["A calmer kind of care.", "From the moment you walk in."],
  },

  doctorsSection: {
    label: "Your care team",
    title: "Expert hands. Kind hearts.",
    text: "Doctors who care about how you feel, not just what the report says.",
  },
  doctors: [
    { img: "images/p19438560.jpg", name: "General Physician", role: "Doctor's name & qualifications here", quote: "Good care begins with really listening." },
    { img: "images/p4173251.jpg", name: "Women's Health", role: "Doctor's name & qualifications here", quote: "Every woman deserves to feel heard." },
    { img: "images/p6749778.jpg", name: "Paediatrics", role: "Doctor's name & qualifications here", quote: "Little patients deserve big care." },
  ],
  doctorsNote: "Sample photos for this demo. Your doctors' real photos, names and degrees will appear here.",

  stepsSection: { label: "Let's make it simple", title: "Your first visit, made easy." },
  steps: [
    { title: "Choose a time", text: "Book on WhatsApp or give our friendly team a call. Pick a slot that fits your day." },
    { title: "Tell us what's wrong", text: "Share your symptoms and bring any old prescriptions or reports." },
    { title: "Leave with a clear plan", text: "Meet your doctor, ask your questions, and leave knowing your next step." },
  ],

  faqSection: {
    label: "A little clarity",
    title: ["Questions?", "We're here for you."],
    text: "Your peace of mind matters. Here are a few things patients often ask.",
  },
  // TODO: confirm answers with the clinic (especially insurance)
  faqs: [
    { q: "Are you accepting new patients?", a: "Yes, we'd love to welcome you. Book your first visit on WhatsApp or call us, and we'll find a time that works for you." },
    { q: "What should I bring to my first appointment?", a: "Please bring any old prescriptions, recent test reports and a list of the medicines you take." },
    { q: "Do you accept health insurance?", a: "Please call or WhatsApp us with your insurance details and we'll tell you exactly what's covered." },
    { q: "Can I get a same-day appointment?", a: "Usually, yes. Message us in the morning and we'll do our best to fit you in the same day." },
    { q: "What if I need urgent medical attention?", a: "In an emergency, call 112 or 102 (ambulance) right away and go to the nearest emergency department." },
  ],
  faqNote: "For a medical emergency, call 112 or 102 (ambulance) immediately.",

  visit: { label: "Visit us", title: "Easy to find. Easy to reach." },
  // TODO: real timings
  timings: [
    { days: "Monday – Saturday", hours: "10:00 AM – 2:00 PM  ·  5:00 PM – 9:00 PM" },
    { days: "Sunday", hours: "10:00 AM – 1:00 PM" },
  ],

  cta: {
    label: "Here for your next chapter",
    title: ["Let's take good", "care of you."],
    text: "A first hello. A fresh start. A healthier tomorrow.",
  },
  footerTag: "Good health. A human touch.",
  slots: ["Morning (10 AM – 2 PM)", "Evening (5 PM – 9 PM)"],
};
