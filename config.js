// =====================================================================
//  CLINIC DEMO CONFIG
//
//  Two ways to open a demo:
//
//  1) Saved clinic (below in CLINICS):   /?clinic=care-medical
//
//  2) ANY clinic, straight from the link (no code change, no redeploy):
//     /?n=Smile+Dental+Clinic&a=Lajpat+Nagar&p=9876543210&t=dental
//        n  = clinic / hospital name   (required)
//        a  = area / locality
//        p  = phone (10 digits or 91 + 10 digits): WhatsApp + call buttons
//        t  = theme: general | family | ortho | hospital | dental | physio
//        tg = small tagline after the name, e.g. "Clinic" (optional)
//     The outreach dashboard builds these links for you.
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

const SAMPLE_ROLE = "Doctor's name & qualifications here";

// ---------------------------------------------------------------------
//  THEMES: colours + photos + services. Used by both kinds of link.
// ---------------------------------------------------------------------
window.CLINIC_PRESETS = {
  // Sage green: general physician / multi-speciality clinic (uses the defaults)
  general: {
    theme: { primary: "#2f5d46", bg: "#f8f6f0" },
    images: { hero: "images/p7579831.jpg", about: "images/p8459996.jpg" },
  },

  // Teal: family health care
  family: {
    theme: { primary: "#1d5e6a", bg: "#f5f8f7" },
    images: { hero: "images/p7578797.jpg", about: "images/p8460095.jpg" },
    eyebrow: "Care for every member of your family",
    headline: ["Care for life.", "Close to", "your home."],
    heroCard: ["Family care, close by.", "For kids, parents and grandparents."],
  },

  // Navy: orthopaedics
  ortho: {
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
    services: [
      { icon: "bone", title: "Joint pain & arthritis", text: "Relief for knee, hip and shoulder pain, from medication to injections." },
      { icon: "shield", title: "Fracture care", text: "Quick, careful treatment of fractures, sprains and dislocations." },
      { icon: "activity", title: "Knee & hip replacement", text: "Consultation and surgery planning for joint replacement." },
      { icon: "heart", title: "Sports injuries", text: "Ligament, muscle and tendon injuries treated so you can play again." },
      { icon: "spine", title: "Spine & back pain", text: "Care for slipped disc, sciatica, neck and lower back pain." },
      { icon: "users", title: "Physiotherapy", text: "Guided rehab sessions to rebuild strength and movement." },
    ],
    doctors: [
      { img: "images/p19438560.jpg", name: "Orthopaedic Surgeon", role: SAMPLE_ROLE, quote: "Every patient deserves to move without pain." },
      { img: "images/p4173251.jpg", name: "Joint & Spine Specialist", role: SAMPLE_ROLE, quote: "A clear diagnosis is the first step to recovery." },
      { img: "images/p5998474.jpg", name: "Physiotherapist", role: "Name & qualifications here", quote: "Small steps every day add up to a full recovery." },
    ],
    cta: { title: ["Let's get you", "moving again."] },
    footerTag: "Bone, joint & spine care.",
  },

  // Maroon: multi-speciality hospital
  hospital: {
    theme: { primary: "#7a2f3b", bg: "#faf6f3" },
    images: { hero: "images/p4266936.jpg", about: "images/p8459996.jpg" },
    eyebrow: "Trusted care for Delhi families",
    headline: ["Trusted care", "for every", "generation."],
    heroCard: ["Care you can count on.", "For you, your parents and your kids."],
    services: [
      { icon: "stethoscope", title: "General medicine", text: "Fever, infections, BP, sugar and everyday health concerns." },
      { icon: "activity", title: "General surgery", text: "Consultation and planned surgical care with clear guidance." },
      { icon: "venus", title: "Maternity & women's health", text: "Supportive care through pregnancy and every stage of life." },
      { icon: "smile", title: "Child care", text: "Gentle care for little ones, from vaccines to growing years." },
      { icon: "flask", title: "Lab & diagnostics", text: "Blood tests and reports, explained in simple words." },
      { icon: "shield", title: "Health check-ups", text: "Preventive packages to catch problems early." },
    ],
    doctors: [
      { img: "images/p19438560.jpg", name: "General Physician", role: SAMPLE_ROLE, quote: "Good care begins with really listening." },
      { img: "images/p4173251.jpg", name: "Gynaecologist", role: SAMPLE_ROLE, quote: "Every mother deserves calm, careful support." },
      { img: "images/p6749778.jpg", name: "Paediatrician", role: SAMPLE_ROLE, quote: "Little patients deserve big care." },
    ],
    footerTag: "Trusted care for every generation.",
  },

  // Blue: dental clinics
  dental: {
    theme: { primary: "#1b6ca8", bg: "#f5f9fc" },
    images: { hero: "images/p3845810.jpg", about: "images/p8459996.jpg" },
    eyebrow: "Gentle dental care for the whole family",
    headline: ["Healthy smiles.", "Gentle hands.", "Zero fear."],
    subheadline:
      "Modern, pain-free dental care for the whole family, from routine cleaning to braces and implants, explained clearly at every step.",
    heroNote: "New patients welcome. Nervous patients especially.",
    heroCard: ["Nervous about the dentist?", "We go gently, step by step."],
    highlights: [
      { icon: "clock", title: "No-rush appointments", text: "Time to explain every step." },
      { icon: "shield", title: "Sterilised & safe", text: "Strict hygiene for every patient." },
      { icon: "clipboard", title: "Clear treatment cost", text: "Know the plan before we start." },
    ],
    servicesSection: {
      title: "Care for every smile.",
      text: "From a child's first check-up to a complete smile makeover, all under one roof.",
    },
    services: [
      { icon: "tooth", title: "Check-up & cleaning", text: "Regular check-ups and scaling to keep teeth and gums healthy." },
      { icon: "shield", title: "Fillings & root canal", text: "Save painful teeth with gentle, modern root canal treatment." },
      { icon: "smile", title: "Braces & aligners", text: "Straighter teeth with metal, ceramic or clear aligners." },
      { icon: "sparkle", title: "Teeth whitening", text: "A brighter smile in a single, safe session." },
      { icon: "tooth", title: "Implants & dentures", text: "Replace missing teeth so you can eat and smile with confidence." },
      { icon: "heart", title: "Kids' dentistry", text: "Friendly, fear-free care for little smiles." },
    ],
    doctors: [
      { img: "images/p19438560.jpg", name: "Dental Surgeon", role: SAMPLE_ROLE, quote: "A painless visit is a promise, not a luxury." },
      { img: "images/p4173251.jpg", name: "Orthodontist", role: SAMPLE_ROLE, quote: "Every smile can be a confident one." },
      { img: "images/p6749778.jpg", name: "Paediatric Dentist", role: SAMPLE_ROLE, quote: "Happy kids, healthy teeth." },
    ],
    approach: { caption: ["A calmer dental visit.", "From the moment you walk in."] },
    cta: { title: ["Let's take care", "of your smile."] },
    footerTag: "Healthy smiles. Gentle hands.",
  },

  // Indigo: physiotherapy & rehab
  physio: {
    theme: { primary: "#4f4691", bg: "#f8f7fc" },
    images: { hero: "images/p4266939.jpg", about: "images/p8460095.jpg" },
    eyebrow: "Physiotherapy & rehab",
    headline: ["Less pain.", "More movement.", "Better life."],
    subheadline:
      "Personalised physiotherapy for back, neck and joint pain, sports injuries and post-surgery recovery, with exercises that fit your daily life.",
    heroCard: ["Pain-free is possible.", "One session at a time."],
    highlights: [
      { icon: "clock", title: "One-on-one sessions", text: "Your therapist's full attention." },
      { icon: "activity", title: "Exercise-based recovery", text: "Results that last after you leave." },
      { icon: "home", title: "Home visits available", text: "Care at your doorstep when needed." },
    ],
    servicesSection: {
      title: "Move better, every day.",
      text: "Treatment plans built around your pain, your body and your routine.",
    },
    services: [
      { icon: "spine", title: "Back & neck pain", text: "Relief for slipped disc, sciatica, cervical and posture pain." },
      { icon: "bone", title: "Knee & joint pain", text: "Exercises and therapy for arthritis and stiff, painful joints." },
      { icon: "activity", title: "Sports injury rehab", text: "Get back to your game safely after sprains and tears." },
      { icon: "shield", title: "Post-surgery rehab", text: "Regain strength and movement after surgery or fracture." },
      { icon: "users", title: "Posture correction", text: "Fix desk posture and the pain that comes with it." },
      { icon: "home", title: "Home visit physio", text: "Sessions at home for elders and post-surgery patients." },
    ],
    doctors: [
      { img: "images/p19438560.jpg", name: "Physiotherapist", role: "Name & qualifications here", quote: "Movement is the best medicine." },
      { img: "images/p5998474.jpg", name: "Sports Rehab Specialist", role: "Name & qualifications here", quote: "Recover right, come back stronger." },
      { img: "images/p4173251.jpg", name: "Physiotherapist", role: "Name & qualifications here", quote: "Small steps every day add up." },
    ],
    cta: { title: ["Let's get you", "moving again."] },
    footerTag: "Move better. Live better.",
  },
};

// ---------------------------------------------------------------------
//  SAVED CLINICS:  /?clinic=<key>
// ---------------------------------------------------------------------
window.CLINICS = {
  "care-medical": {
    name: "Care Medical",
    tagline: "Clinic",
    phone: "919999255607", // 91 + 10-digit number (WhatsApp + call)
    area: "Delhi", // TODO: exact locality
    preset: "general",
    headline: ["Healthier days", "start with", "caring hands."],
  },
  jeevan: {
    name: "Jeevan",
    tagline: "Health Care",
    phone: "919803633454",
    area: "Delhi", // TODO
    preset: "family",
    heroCard: ["Jeevan means life.", "We care for yours like family."],
  },
  orthostar: {
    name: "Orthostar",
    tagline: "Hospital",
    phone: "919268826745",
    area: "Delhi", // TODO
    preset: "ortho",
  },
  "sunder-lal": {
    name: "Sunder Lal",
    tagline: "Hospital",
    phone: "918826756926",
    area: "Delhi", // TODO
    preset: "hospital",
  },
};

// =====================================================================
//  DEFAULTS: shared by every clinic unless a theme or clinic overrides them
// =====================================================================
window.CLINIC_DEFAULTS = {
  tagline: "Clinic",
  area: "Delhi",
  address: "", // full address. If empty, the map searches "name + area"
  phone: "",
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
    { img: "images/p19438560.jpg", name: "General Physician", role: SAMPLE_ROLE, quote: "Good care begins with really listening." },
    { img: "images/p4173251.jpg", name: "Women's Health", role: SAMPLE_ROLE, quote: "Every woman deserves to feel heard." },
    { img: "images/p6749778.jpg", name: "Paediatrics", role: SAMPLE_ROLE, quote: "Little patients deserve big care." },
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
  faqs: [
    { q: "Are you accepting new patients?", a: "Yes, we'd love to welcome you. Book your first visit on WhatsApp or call us, and we'll find a time that works for you." },
    { q: "What should I bring to my first appointment?", a: "Please bring any old prescriptions, recent test reports and a list of the medicines you take." },
    { q: "Do you accept health insurance?", a: "Please call or WhatsApp us with your insurance details and we'll tell you exactly what's covered." },
    { q: "Can I get a same-day appointment?", a: "Usually, yes. Message us in the morning and we'll do our best to fit you in the same day." },
    { q: "What if I need urgent medical attention?", a: "In an emergency, call 112 or 102 (ambulance) right away and go to the nearest emergency department." },
  ],
  faqNote: "For a medical emergency, call 112 or 102 (ambulance) immediately.",

  visit: { label: "Visit us", title: "Easy to find. Easy to reach." },
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
