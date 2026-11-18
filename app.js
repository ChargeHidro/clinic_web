(function () {
  "use strict";

  const app = document.getElementById("app");
  const clinics = window.CLINICS || {};
  const DEMO = window.DEMO_BY || { name: "", portfolio: "#" };
  const params = new URLSearchParams(location.search);
  const slug = params.get("clinic");

  // ---------- Small helpers ----------
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  const lines = (x) => (Array.isArray(x) ? x : [x]).map(esc).join("<br />");
  const isObj = (v) => v && typeof v === "object" && !Array.isArray(v);
  const merge = (a, b) => {
    const out = { ...a };
    for (const k in b) out[k] = isObj(a[k]) && isObj(b[k]) ? merge(a[k], b[k]) : b[k];
    return out;
  };

  const ICONS = {
    cross: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',
    arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowUR: '<path d="M7 17 17 7M8 7h9v9"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    chat: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    clipboard: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
    stethoscope: '<path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    smile: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01M15 9h.01"/>',
    venus: '<circle cx="12" cy="9" r="6"/><path d="M12 15v7M9 19h6"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>',
    heartSmall: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    flask: '<path d="M9 3h6M10 3v6L4.5 19a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L14 9V3"/><path d="M7 16h10"/>',
    activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    bone: '<path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"/>',
    spine: '<path d="M12 2v20"/><rect x="8" y="4" width="8" height="4" rx="1.5"/><rect x="8" y="10" width="8" height="4" rx="1.5"/><rect x="8" y="16" width="8" height="4" rx="1.5"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  };
  const icon = (name, cls = "w-4 h-4", sw = 1.8) =>
    `<svg class="${cls} shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;
  const btnIco = (name = "arrowRight") => `<span class="btn-ico">${icon(name, "w-3.5 h-3.5", 2)}</span>`;

  // Without a valid ?clinic=..., show a neutral page (or the full list with ?all=1)
  if (!slug || !clinics[slug]) {
    applyTheme(window.CLINIC_DEFAULTS.theme);
    if (params.has("all")) renderIndex();
    else renderPrivate();
    return;
  }

  const c = merge(window.CLINIC_DEFAULTS, clinics[slug]);
  applyTheme(c.theme);
  const fullName = `${c.name} ${c.tagline}`;
  document.title = fullName;

  const wa = (text) => `https://wa.me/${c.phone}?text=${encodeURIComponent(text)}`;
  const tel = `tel:+${c.phone}`;
  const phonePretty = `+${c.phone.slice(0, 2)} ${c.phone.slice(2, 7)} ${c.phone.slice(7)}`;
  const mapQuery = encodeURIComponent(c.address || `${fullName}, ${c.area}`);
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const wrap = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
  const ext = 'target="_blank" rel="noopener"';

  // Section heading: small label, serif title, optional side text
  const head = (s) => `
    <div class="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-5">
      <div>
        <div class="label text-ink">${esc(s.label)}</div>
        <h2 class="font-serif text-ink text-[clamp(2.2rem,4.5vw,3.25rem)] leading-[1.05] mt-4">${lines(s.title)}</h2>
      </div>
      ${s.text ? `<p class="text-sm text-muted max-w-sm leading-relaxed">${esc(s.text)}</p>` : ""}
    </div>`;

  const logo = (light = false) => `
    <span class="flex items-center gap-2.5 min-w-0">
      <span class="${light ? "text-white" : "text-primary"}">${icon("cross", "w-7 h-7", 1.6)}</span>
      <span class="font-serif text-[1.7rem] leading-none truncate ${light ? "text-white" : "text-ink"}">${esc(c.name)}</span>
      <span class="hidden sm:block text-[8.5px] font-semibold uppercase tracking-[0.18em] leading-tight max-w-[5rem] ${light ? "text-white/70" : "text-muted"}">${esc(c.tagline)}</span>
    </span>`;

  // ---------- Sections ----------

  const demoBar = `
    <div class="bg-white text-black text-[11px] sm:text-xs text-center px-4 py-2 font-medium border-b border-line">
      Website demo prepared for <b>${esc(fullName)}</b> by ${esc(DEMO.name)} · not the official website
    </div>`;

  const nav = `
    <header id="nav" class="sticky top-0 z-40 border-b border-line">
      <div class="${wrap} h-[72px] flex items-center justify-between gap-4">
        <a href="#top" class="min-w-0">${logo()}</a>
        <nav class="hidden lg:flex items-center gap-9 text-sm text-ink">
          <a href="#services" class="hover:text-primary transition">Our services</a>
          <a href="#approach" class="hover:text-primary transition">Our approach</a>
          <a href="#doctors" class="hover:text-primary transition">Our doctors</a>
          <a href="#faq" class="hover:text-primary transition">Patient info</a>
        </nav>
        <a href="#book" class="btn btn-primary btn-sm shrink-0"><span>Book<span class="hidden sm:inline"> an appointment</span></span> ${btnIco()}</a>
      </div>
    </header>`;

  const hero = `
    <section id="top" class="bg-page">
      <div class="${wrap} pt-10 pb-20 lg:pt-14 lg:pb-24 grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
        <div>
          <span class="reveal inline-block bg-soft text-primary label px-3 py-1.5 rounded-full">${esc(c.eyebrow)}</span>
          <h1 class="reveal font-serif text-ink text-[clamp(2.8rem,6vw,4.6rem)] leading-[1.02] mt-6">${lines(c.headline)}</h1>
          <p class="reveal mt-6 text-muted max-w-md leading-relaxed">${esc(c.subheadline)}</p>
          <div class="reveal mt-8 flex flex-col sm:flex-row sm:items-center gap-5">
            <a href="#book" class="btn btn-primary self-start">Book your first visit ${btnIco()}</a>
            <a href="#services" class="link-arrow">Explore our services ${icon("arrowRight")}</a>
          </div>
          <div class="reveal mt-9 flex items-center gap-2 text-xs text-muted">
            <span class="text-primary">${icon("heartSmall", "w-4 h-4")}</span>${esc(c.heroNote)}
          </div>
        </div>
        <div class="reveal relative">
          <div class="hero-img overflow-hidden aspect-[4/3.4] lg:aspect-[5/5.3] bg-soft">
            <img src="${esc(c.images.hero)}" alt="A doctor with a patient at ${esc(fullName)}" class="img-cover" fetchpriority="high" />
          </div>
          <div class="absolute -bottom-7 left-4 lg:-left-8 bg-white rounded-2xl shadow-soft p-4 sm:p-5 flex gap-3 max-w-[17rem]">
            <span class="w-9 h-9 rounded-full bg-soft text-primary grid place-items-center shrink-0">${icon("chat")}</span>
            <div>
              <div class="font-semibold text-sm text-ink">${esc(c.heroCard[0])}</div>
              <div class="text-xs text-muted mt-1">${esc(c.heroCard[1])}</div>
            </div>
          </div>
        </div>
      </div>
    </section>`;

  const highlights = `
    <section class="bg-soft">
      <div class="${wrap} py-8 grid md:grid-cols-3 gap-6 md:gap-0 md:divide-x divide-line">
        ${c.highlights
          .map(
            (h) => `
          <div class="flex items-center gap-4 md:px-8 md:first:pl-0">
            <span class="w-11 h-11 rounded-full border border-line bg-page text-primary grid place-items-center shrink-0">${icon(h.icon, "w-5 h-5")}</span>
            <div>
              <div class="text-ink font-medium">${esc(h.title)}</div>
              <div class="text-xs text-muted mt-0.5">${esc(h.text)}</div>
            </div>
          </div>`
          )
          .join("")}
      </div>
    </section>`;

  const services = `
    <section id="services" class="bg-page scroll-mt-20">
      <div class="${wrap} py-20 lg:py-28">
        ${head(c.servicesSection)}
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          ${c.services
            .map(
              (s, i) => `
            <a href="${wa(`Hello ${fullName}, I'd like to know more about ${s.title}.`)}" ${ext}
               class="group reveal lift rounded-2xl p-6 sm:p-7 border ${i === 0 ? "bg-soft border-transparent" : "bg-white border-line"}">
              <div class="flex items-start justify-between">
                <span class="w-11 h-11 rounded-full grid place-items-center text-primary ${i === 0 ? "bg-white" : "bg-soft"}">${icon(s.icon, "w-5 h-5")}</span>
                <span class="text-muted transition group-hover:translate-x-1 group-hover:text-primary">${icon("arrowRight")}</span>
              </div>
              <h3 class="mt-7 text-lg font-medium text-ink">${esc(s.title)}</h3>
              <p class="text-sm text-muted mt-2 leading-relaxed">${esc(s.text)}</p>
            </a>`
            )
            .join("")}
        </div>
      </div>
    </section>`;

  const a = c.approach;
  const approach = `
    <section id="approach" class="bg-soft scroll-mt-20">
      <div class="${wrap} py-20 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div class="reveal relative">
          <div class="rounded-3xl overflow-hidden aspect-[5/4] bg-page">
            <img src="${esc(c.images.about)}" alt="Inside ${esc(fullName)}" loading="lazy" class="img-cover" />
          </div>
          <div class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white rounded-xl px-5 py-4 shadow-soft">
            <div class="font-serif text-xl text-ink">${esc(a.caption[0])}</div>
            <div class="text-xs text-muted mt-1">${esc(a.caption[1])}</div>
          </div>
        </div>
        <div>
          <div class="reveal label text-ink">${esc(a.label)}</div>
          <h2 class="reveal font-serif text-ink text-[clamp(2.2rem,4.5vw,3.25rem)] leading-[1.05] mt-4">${lines(a.title)}</h2>
          <p class="reveal mt-5 text-sm sm:text-base text-muted leading-relaxed max-w-lg">${esc(a.text)}</p>
          <ul class="mt-9 space-y-6">
            ${a.points
              .map(
                (p) => `
              <li class="reveal flex gap-4">
                <span class="w-7 h-7 rounded-full bg-page text-primary grid place-items-center shrink-0 mt-0.5">${icon("check", "w-3.5 h-3.5", 2.2)}</span>
                <div>
                  <div class="text-ink font-medium">${esc(p.title)}</div>
                  <div class="text-sm text-muted mt-1">${esc(p.text)}</div>
                </div>
              </li>`
              )
              .join("")}
          </ul>
          <a href="#doctors" class="reveal link-arrow mt-10">Meet the ${esc(c.name)} team ${icon("arrowRight")}</a>
        </div>
      </div>
    </section>`;

  const doctors = `
    <section id="doctors" class="bg-page scroll-mt-20">
      <div class="${wrap} py-20 lg:py-28">
        ${head(c.doctorsSection)}
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          ${c.doctors
            .map(
              (d) => `
            <div class="group reveal">
              <div class="zoom relative rounded-2xl aspect-[4/3.6] bg-soft">
                <img src="${esc(d.img)}" alt="${esc(d.name)}" loading="lazy" class="img-cover" style="object-position:50% 20%" />
                <span class="absolute top-3 left-3 bg-white text-muted text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">Sample photo</span>
              </div>
              <div class="mt-5 flex items-start justify-between gap-3">
                <div>
                  <div class="font-serif text-2xl text-ink">${esc(d.name)}</div>
                  <div class="text-xs text-primary font-medium mt-1">${esc(d.role)}</div>
                </div>
                <span class="text-ink mt-1">${icon("arrowUR", "w-5 h-5")}</span>
              </div>
              <p class="text-sm text-muted mt-3">“${esc(d.quote)}”</p>
            </div>`
            )
            .join("")}
        </div>
        ${c.doctorsNote ? `<p class="reveal text-xs text-muted mt-10">${esc(c.doctorsNote)}</p>` : ""}
      </div>
    </section>`;

  const steps = `
    <section class="bg-beige">
      <div class="${wrap} py-20 lg:py-24">
        ${head(c.stepsSection)}
        <ol class="grid md:grid-cols-3 gap-10 md:gap-8 mt-14">
          ${c.steps
            .map(
              (s, i) => `
            <li class="reveal">
              <div class="flex items-center gap-4">
                <span class="w-9 h-9 rounded-full bg-primary text-white text-xs font-semibold grid place-items-center shrink-0">0${i + 1}</span>
                <span class="flex-1 h-px bg-line"></span>
              </div>
              <h3 class="font-serif text-2xl text-ink mt-6">${esc(s.title)}</h3>
              <p class="text-sm text-muted mt-2 max-w-xs leading-relaxed">${esc(s.text)}</p>
            </li>`
            )
            .join("")}
        </ol>
      </div>
    </section>`;

  const faq = `
    <section id="faq" class="bg-page scroll-mt-20">
      <div class="${wrap} py-20 lg:py-28 grid lg:grid-cols-[1fr_1.35fr] gap-12 lg:gap-16">
        <div class="reveal">
          <div class="label text-ink">${esc(c.faqSection.label)}</div>
          <h2 class="font-serif text-ink text-[clamp(2.4rem,5vw,3.5rem)] leading-[1.05] mt-4">${lines(c.faqSection.title)}</h2>
          <p class="mt-5 text-sm text-muted max-w-xs leading-relaxed">${esc(c.faqSection.text)}</p>
          <a href="${wa(`Hello ${fullName}, I have a question.`)}" ${ext} class="link-arrow mt-8 text-sm">Still have a question? Message us ${icon("arrowRight")}</a>
        </div>
        <div class="reveal">
          <div class="space-y-3">
            ${c.faqs
              .map(
                (f, i) => `
              <details class="faq rounded-xl border border-line bg-white transition-colors" ${i === 0 ? "open" : ""}>
                <summary class="flex justify-between items-center gap-4 px-5 py-4 cursor-pointer text-sm font-medium text-ink">${esc(f.q)}<span class="faq-icon"></span></summary>
                <div class="px-5 pb-5 -mt-1 text-sm text-muted leading-relaxed">${esc(f.a)}</div>
              </details>`
              )
              .join("")}
          </div>
          <p class="text-xs text-muted mt-6">${esc(c.faqNote)}</p>
        </div>
      </div>
    </section>`;

  const visit = `
    <section id="visit" class="bg-soft scroll-mt-20">
      <div class="${wrap} py-20 lg:py-24 grid lg:grid-cols-[1fr_1.3fr] gap-5">
        <div class="reveal bg-white rounded-2xl p-6 sm:p-8 flex flex-col">
          <div class="label text-ink">${esc(c.visit.label)}</div>
          <h2 class="font-serif text-ink text-4xl leading-[1.05] mt-4">${lines(c.visit.title)}</h2>
          <div class="mt-8 flex items-center gap-2 text-sm font-medium text-ink"><span class="text-primary">${icon("clock")}</span>Timings</div>
          <div class="mt-2 divide-y divide-line">
            ${c.timings
              .map(
                (t) => `
              <div class="py-3 flex flex-col sm:flex-row sm:justify-between gap-0.5">
                <span class="text-sm text-ink">${esc(t.days)}</span>
                <span class="text-sm text-muted">${esc(t.hours)}</span>
              </div>`
              )
              .join("")}
          </div>
          <div class="mt-6 flex items-center gap-2 text-sm font-medium text-ink"><span class="text-primary">${icon("pin")}</span>Address</div>
          <div class="text-sm text-muted mt-2">${esc(fullName)}<br />${esc(c.address || c.area)}</div>
          <div class="mt-auto pt-8 flex flex-col sm:flex-row gap-3">
            <a href="${mapsLink}" ${ext} class="btn btn-primary">Get directions ${btnIco("arrowUR")}</a>
            <a href="${tel}" class="btn btn-outline">Call us ${btnIco("phone")}</a>
          </div>
        </div>
        <div class="reveal rounded-2xl overflow-hidden min-h-[340px] bg-white">
          <iframe title="Map showing ${esc(fullName)}" class="w-full h-full min-h-[340px] block" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed"></iframe>
        </div>
      </div>
    </section>`;

  const book = `
    <section id="book" class="bg-primary text-white scroll-mt-20">
      <div class="${wrap} py-20 lg:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <div class="reveal">
          <div class="label text-white/70">${esc(c.cta.label)}</div>
          <h2 class="font-serif text-[clamp(2.8rem,6vw,4.5rem)] leading-[1.02] mt-5">${lines(c.cta.title)}</h2>
          <p class="mt-6 text-white/75">${esc(c.cta.text)}</p>
          <a href="${tel}" class="mt-8 inline-flex items-center gap-3 text-sm text-white/85 hover:text-white">
            <span class="w-9 h-9 rounded-full border border-white/25 grid place-items-center">${icon("phone")}</span>
            Prefer to call? ${esc(phonePretty)}
          </a>
        </div>
        <form id="book-form" class="reveal bg-white text-ink rounded-2xl p-6 sm:p-8 space-y-4 shadow-soft" novalidate>
          <div class="font-serif text-3xl">Book an appointment</div>
          <label class="block">
            <span class="text-xs text-muted">Patient name</span>
            <input name="fullName" class="field mt-1.5" placeholder="e.g. Priya Sharma" autocomplete="name" />
          </label>
          <label class="block">
            <span class="text-xs text-muted">Mobile number</span>
            <input name="mobile" class="field mt-1.5" placeholder="10-digit mobile number" inputmode="numeric" autocomplete="tel" />
          </label>
          <label class="block">
            <span class="text-xs text-muted">What do you need help with?</span>
            <select name="service" class="field mt-1.5">
              ${c.services.map((s) => `<option>${esc(s.title)}</option>`).join("")}
              <option>Something else</option>
            </select>
          </label>
          <div class="grid sm:grid-cols-2 gap-4">
            <label class="block">
              <span class="text-xs text-muted">Preferred date</span>
              <input name="date" type="date" class="field mt-1.5" />
            </label>
            <label class="block">
              <span class="text-xs text-muted">Preferred time</span>
              <select name="slot" class="field mt-1.5">${c.slots.map((x) => `<option>${esc(x)}</option>`).join("")}</select>
            </label>
          </div>
          <p id="form-error" class="text-sm text-red-600" hidden></p>
          <button type="submit" class="btn btn-primary w-full">Request on WhatsApp ${btnIco()}</button>
          <p class="text-xs text-muted">We'll confirm your slot on WhatsApp. For emergencies, call 112.</p>
        </form>
      </div>
    </section>`;

  const footCol = (title, links) => `
    <div>
      <div class="label text-white/60">${esc(title)}</div>
      <ul class="mt-4 space-y-2.5 text-sm text-white/85">
        ${links
          .map(
            ([text, href, external]) =>
              `<li>${href ? `<a href="${href}" ${external ? ext : ""} class="hover:text-white inline-flex items-center gap-1">${esc(text)}${external ? icon("arrowUR", "w-3 h-3") : ""}</a>` : esc(text)}</li>`
          )
          .join("")}
      </ul>
    </div>`;

  const footer = `
    <footer class="bg-primary-dark text-white">
      <div class="${wrap} pt-16 pb-28 md:pb-10">
        <div class="grid sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-10">
          <div>
            ${logo(true)}
            <p class="text-sm text-white/70 mt-4">${esc(c.footerTag)}</p>
          </div>
          ${footCol("Explore", [["Our services", "#services"], ["Our doctors", "#doctors"], ["Patient info", "#faq"]])}
          ${footCol("Let's talk", [[phonePretty, tel], ["WhatsApp us", wa(`Hello ${fullName}, I have a question.`), true], ["Book an appointment", "#book"]])}
          ${footCol("Visit us", [[c.address || c.area], ...c.timings.map((t) => [`${t.days}: ${t.hours}`]), ["Get directions", mapsLink, true]])}
        </div>
        <div class="mt-14 pt-6 border-t border-white/15 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/60">
          <span>© ${new Date().getFullYear()} ${esc(fullName)}. All rights reserved.</span>
          <span>Website demo by <a href="${esc(DEMO.portfolio)}" ${ext} class="underline hover:text-white">${esc(DEMO.name)}</a></span>
        </div>
      </div>
    </footer>`;

  const mobileBar = `
    <div class="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-white border-t border-line grid grid-cols-2 gap-3">
      <a href="${tel}" class="btn btn-outline justify-center">Call now</a>
      <a href="#book" class="btn btn-primary justify-center">Book visit</a>
    </div>`;

  const waFloat = `
    <a href="${wa(`Hello ${fullName}, I'd like to book an appointment.`)}" ${ext} aria-label="Chat on WhatsApp"
       class="hidden md:grid fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full place-items-center bg-[#25D366] text-white shadow-lg hover:scale-105 transition">
      ${icon("chat", "w-7 h-7", 2)}
    </a>`;

  app.innerHTML =
    demoBar + nav + "<main>" + hero + highlights + services + approach + doctors + steps + faq + visit + book + "</main>" + footer + mobileBar + waFloat;

  // ---------- Behaviour ----------

  const today = new Date();
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  document.querySelector('#book-form input[name="date"]').min = today.toISOString().slice(0, 10);

  revealOnScroll();

  document.getElementById("book-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    const name = String(d.fullName || "").trim();
    const mobile = String(d.mobile || "").replace(/\D/g, "").slice(-10);
    const err = document.getElementById("form-error");
    if (!name || mobile.length !== 10) {
      err.textContent = "Please enter the patient's name and a valid 10-digit mobile number.";
      err.hidden = false;
      return;
    }
    err.hidden = true;
    const date = d.date
      ? new Date(`${d.date}T12:00:00`).toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" })
      : "Any day";
    const msg =
      `Hello ${fullName}, I'd like to book an appointment.\n\n` +
      `Patient: ${name}\nMobile: ${mobile}\nFor: ${d.service}\nPreferred date: ${date}\nPreferred time: ${d.slot}`;
    window.open(wa(msg), "_blank", "noopener");
  });

  // ---------- Functions ----------

  function applyTheme(t) {
    const p = t.primary || "#2f5d46";
    const bg = t.bg || "#f8f6f0";
    const ink = mix(p, "#000000", 0.42);
    const set = (k, v) => document.documentElement.style.setProperty(k, v);
    set("--primary", p);
    set("--primary-dark", mix(p, "#000000", 0.25));
    set("--bg", bg);
    set("--soft", mix(bg, p, 0.1));
    set("--beige", mix(bg, "#c9a27e", 0.17));
    set("--ink", ink);
    set("--muted", mix(ink, bg, 0.4));
    set("--line", mix(bg, ink, 0.13));
  }

  function rgb(hex) {
    let h = hex.replace("#", "");
    if (h.length === 3) h = h.split("").map((x) => x + x).join("");
    const n = parseInt(h, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function mix(a, b, t) {
    const A = rgb(a);
    const B = rgb(b);
    return "#" + A.map((v, i) => Math.round(v + (B[i] - v) * t).toString(16).padStart(2, "0")).join("");
  }

  function revealOnScroll() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
  }

  function renderPrivate() {
    document.title = "Private demo";
    app.innerHTML = `
      <main class="min-h-screen grid place-items-center px-4 text-center">
        <div>
          <div class="font-serif text-5xl text-ink">Private demo</div>
          <p class="text-muted mt-3">Please open the link you received on WhatsApp.</p>
        </div>
      </main>`;
  }

  function renderIndex() {
    document.title = "Clinic demos";
    app.innerHTML = `
      <main class="max-w-2xl mx-auto px-4 py-16">
        <h1 class="font-serif text-5xl text-ink">Clinic demos</h1>
        <p class="text-muted mt-2">Send each clinic only their own link.</p>
        <div class="mt-8 space-y-3">
          ${Object.entries(clinics)
            .map(([key, v]) => {
              const color = esc((v.theme && v.theme.primary) || "#2f5d46");
              return `
            <a href="?clinic=${encodeURIComponent(key)}" class="flex items-center justify-between gap-4 p-5 rounded-xl border border-line bg-white hover:border-[#999] transition">
              <div class="min-w-0">
                <div class="font-medium text-ink">${esc(v.name)} <span class="text-muted font-normal">${esc(v.tagline || "")}</span></div>
                <div class="text-sm text-muted truncate">?clinic=${esc(key)}</div>
              </div>
              <span class="w-4 h-4 rounded-full shrink-0" style="background:${color}"></span>
            </a>`;
            })
            .join("")}
        </div>
      </main>`;
  }
})();
