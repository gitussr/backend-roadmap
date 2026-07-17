/* ============================================================
   MERN SaaS Roadmap — data + interactivity
   Progress persists in localStorage under STORAGE_KEY.
   ============================================================ */

const STORAGE_KEY = "mern-saas-roadmap-progress";

/* ---------- course coverage (verdict section) ---------- */

const COVERAGE = [
  { area: "Backend (Node/Express/MongoDB)", note: "excellent — better than most courses", pct: 90 },
  { area: "Monitoring & observability",     note: "unusually strong (LGTM stack)",        pct: 85 },
  { area: "Payments",                       note: "Razorpay + Stripe covered",            pct: 80 },
  { area: "Deployment & infrastructure",    note: "good, but no Docker",                  pct: 70 },
  { area: "SaaS product layer",             note: "multi-tenancy, billing lifecycle, emails, legal", pct: 15 },
  { area: "Frontend (React)",               note: "only touched incidentally",            pct: 10 },
  { area: "Testing",                        note: "completely absent",                    pct: 0 },
  { area: "TypeScript",                     note: "absent",                               pct: 0 },
];

/* ---------- roadmap phases ----------
   item: { t: title, d: detail, g: optional group heading before this item } */

const PHASES = [
  {
    id: "p1",
    title: "Backend Foundations",
    tag: "your current course",
    tagClass: "",
    desc: "The ProCodrr course — check off sections as you complete them. The capstone IS a SaaS product; take it seriously.",
    items: [
      { t: "Fundamentals (Sec 1–8)", d: "Node.js basics, terminal, OS concepts, module systems, npm/npx, Buffers, EventEmitter, Streams" },
      { t: "Networking (Sec 9–10)", d: "IP/DNS/ports, OSI & TCP/IP, SSH, TCP/UDP/HTTP servers from scratch, storage app with core modules" },
      { t: "Express.js (Sec 11)", d: "Middleware, routing, CORS, Multer uploads, REST principles, error handling, cookies, path-traversal security" },
      { t: "MongoDB & Mongoose (Sec 12–13)", d: "CRUD, schema validation, transactions, ACID, embedded vs referenced, MVC, middleware/virtuals/indexes" },
      { t: "Auth & AuthZ (Sec 14–15)", d: "bcrypt hashing, signed cookies, JWT, sessions, email OTP, OAuth 2.0 / OIDC, Google login, Passport.js, RBAC" },
      { t: "Redis (Sec 16)", d: "Data types, TTL, caching, session store, search, pub/sub" },
      { t: "Security (Sec 17)", d: "Injection, XSS, CSP, CSRF, clickjacking, SameSite, HTTPS, rate limiting, Helmet, dependency audits" },
      { t: "AWS S3 & CDN (Sec 18)", d: "S3 CRUD, IAM, signed URLs, CloudFront" },
      { t: "Payments (Sec 19)", d: "Razorpay + Stripe, checkout sessions, webhooks + signature verification, subscriptions, customer portal" },
      { t: "Deployment & CI/CD (Sec 20)", d: "EC2, PM2, NGINX (reverse proxy, SSL), Cloudflare DNS, GitHub Actions, zero-downtime deploys" },
      { t: "Serverless (Sec 21)", d: "Lambda, API Gateway, CloudWatch, pricing" },
      { t: "Observability (Sec 22)", d: "Metrics/logs/traces, Prometheus, Grafana, Loki, Pino, Tempo, OpenTelemetry, alerting, SLAs" },
      { t: "Node internals (Sec 23)", d: "V8, libuv, event loop phases, thread pool, GC" },
      { t: "Capstone: course-hosting platform", d: "Auth, courses, payments, video, admin panel — build it end-to-end" },
    ],
  },
  {
    id: "p2",
    title: "React for Real Applications",
    tag: "biggest gap",
    tagClass: "gap",
    desc: "You know the basics; a SaaS frontend needs much more. Learn alongside the course — pair it with the storage-app sections.",
    items: [
      { t: "Modern tooling", d: "Vite, project structure, ESLint + Prettier" },
      { t: "React deep-dive", d: "useEffect pitfalls, useMemo/useCallback/useRef, custom hooks, controlled forms, composition patterns" },
      { t: "Routing", d: "React Router v7 — nested routes, loaders, protected routes (auth guards)" },
      { t: "Server state: TanStack Query", d: "Caching, mutations, invalidation, optimistic updates — how real apps talk to your Express API" },
      { t: "Client state", d: "Zustand (simple) or Redux Toolkit (if jobs require it)" },
      { t: "Forms & validation", d: "React Hook Form + Zod" },
      { t: "Styling & UI systems", d: "Tailwind CSS + shadcn/ui or MUI; responsive design; dark mode" },
      { t: "Auth on the frontend", d: "Token/cookie handling, session-expiry UX, route guards, role-based UI rendering" },
      { t: "SaaS UI patterns", d: "Dashboards, data tables (sort/filter/paginate), modals, toasts, upload progress, empty states, skeletons" },
      { t: "Performance", d: "Code splitting, lazy loading, React.memo, Lighthouse, Core Web Vitals" },
      { t: "Next.js (optional but valuable)", d: "SSR/SSG for marketing pages and SEO" },
    ],
  },
  {
    id: "p3",
    title: "Professional Engineering Practices",
    tag: "absent from course",
    tagClass: "gap",
    desc: "What separates a course project from a production codebase — and what employers and cofounders look for.",
    items: [
      { t: "Git beyond basics", d: "Branching strategies, rebasing, PR workflow, conventional commits, code-review etiquette" },
      { t: "Unit tests", g: "Testing — the course has literally zero", d: "Vitest or Jest" },
      { t: "API / integration tests", d: "Supertest against your Express app" },
      { t: "Frontend component tests", d: "React Testing Library" },
      { t: "End-to-end tests", d: "Playwright — login flow, checkout flow, critical paths" },
      { t: "Tests in CI", d: "Wire the suite into your GitHub Actions pipeline" },
      { t: "TypeScript", g: "Language & tooling", d: "Types, interfaces, generics, typing Express handlers and React props; migrate one project to TS" },
      { t: "Docker", d: "Dockerfile for Node, docker-compose for local dev (Node + MongoDB + Redis), registries, deploying a container" },
      { t: "API design maturity", d: "Consistent error format, pagination conventions, versioning, idempotency keys, OpenAPI/Swagger docs" },
      { t: "Code quality", d: "Env config patterns, dependency injection basics, feature-folder project structure" },
    ],
  },
  {
    id: "p4",
    title: "Backend Topics the Course Skips",
    tag: "",
    tagClass: "",
    desc: "The remaining backend muscle: async work, real-time, SQL awareness, and scaling — plus the two deep-dive guides in this repo.",
    callout:
      'Deep dives: <a href="../database-design.md">database-design.md</a> (design process, MySQL + Mongoose side by side) and <a href="../system-design.md">system-design.md</a> (architecture, staged scaling) belong to this phase.',
    items: [
      { t: "Background jobs & queues", d: "BullMQ on Redis — emails, reports, retries, cron jobs. Every real SaaS has a queue" },
      { t: "Real-time features", d: "WebSockets and Socket.IO — notifications, live updates, presence; Redis pub/sub as backplane" },
      { t: "Transactional email done right", d: "React Email templates, Resend/SES/Postmark, deliverability: SPF, DKIM, DMARC" },
      { t: "File & media processing", d: "sharp for images, ffmpeg basics — in background jobs, not request handlers" },
      { t: "SQL awareness", d: "Basic PostgreSQL + when to choose SQL over MongoDB (start with database-design.md)" },
      { t: "Search", d: "MongoDB Atlas Search or Meilisearch for user-facing search" },
      { t: "Scaling patterns", d: "Horizontal scaling, statelessness, k6/autocannon load testing, N+1 queries, indexing in practice" },
    ],
  },
  {
    id: "p5",
    title: "The SaaS Product Layer",
    tag: "makes it a business",
    tagClass: "gap",
    desc: "The course teaches payment mechanics; a SaaS needs the full commercial machinery around them.",
    items: [
      { t: "Multi-tenancy", g: "SaaS architecture", d: "Data isolation per organization — tenant ID on every document, middleware-enforced scoping" },
      { t: "Organizations & teams model", d: "Invites, member roles (extends the course's RBAC)" },
      { t: "Plans & entitlements", d: "Free/pro/enterprise tiers, feature gating, usage limits, feature flags" },
      { t: "Trials, upgrades, cancellation", g: "Subscription lifecycle", d: "Proration on plan changes, cancellation & win-back flows" },
      { t: "Dunning", d: "Failed-payment retries and emails" },
      { t: "Webhook-driven state sync", d: "Stripe is the source of truth for billing state" },
      { t: "Sales tax / VAT", d: "Stripe Tax or a Merchant of Record (Paddle, Lemon Squeezy)" },
      { t: "User lifecycle", g: "Product operations", d: "Onboarding, email verification, password reset, account deletion (legally required), data export" },
      { t: "Admin & support tooling", d: "Internal admin panel, user impersonation for support, audit logs" },
      { t: "Product analytics", d: "PostHog or Mixpanel — funnels, activation, retention" },
      { t: "Landing page & SEO basics", d: "Marketing site, meta tags, sitemap, OpenGraph — a SaaS nobody finds earns nothing" },
      { t: "Legal & compliance minimum", d: "Privacy policy, ToS, cookie consent, GDPR basics, store only what you need" },
    ],
  },
  {
    id: "p6",
    title: "Production Operations",
    tag: "",
    tagClass: "",
    desc: "Extends the course's deployment and observability sections into real day-2 operations.",
    items: [
      { t: "Error tracking", d: "Sentry for backend and React frontend — source maps, release tracking, alerts" },
      { t: "Uptime monitoring", d: "External checks (UptimeRobot, Better Stack) + a status page" },
      { t: "Backups & disaster recovery", d: "Automated MongoDB backups (Atlas), restore drills, a recovery runbook" },
      { t: "Environments", d: "Local → staging → production, secrets management, schema-migration strategy" },
      { t: "Cost management", d: "AWS budgets/alerts, knowing your cost per user" },
      { t: "Simpler deployment targets", d: "When Render/Railway/Fly.io/Vercel beats raw EC2 — usually, for a solo SaaS at the start" },
      { t: "Security operations", d: "Dependabot, npm audit in CI, secret rotation, least-privilege IAM" },
    ],
  },
  {
    id: "p7",
    title: "Prove It: Build Your Own SaaS",
    tag: "final exam",
    tagClass: "",
    desc: "Shipping something real that is not a course project.",
    items: [
      { t: "Pick a small, boring, real problem", d: "Ideally one you have yourself" },
      { t: "Scope a genuine MVP", d: "Auth + one core feature + Stripe + landing page. Nothing else" },
      { t: "Build it with the full stack", d: "TypeScript, tested, Dockerized, CI/CD, monitored" },
      { t: "Deploy with eyes on it", d: "Sentry + analytics + uptime checks from day one" },
      { t: "Get 5 real people to use it", d: "Iterate on their feedback" },
      { t: "Write up what broke", d: "And what you'd do differently — the retrospective is the credential" },
    ],
  },
];

/* ============================================================
   State
   ============================================================ */

let progress = {};
try { progress = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { progress = {}; }

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

const itemId = (phase, idx) => `${phase.id}-${idx}`;

/* ============================================================
   Render: verdict
   ============================================================ */

function renderVerdict() {
  const grid = document.getElementById("verdict-grid");
  grid.innerHTML = COVERAGE.map((c) => `
    <div class="verdict-row${c.pct <= 20 ? " gap" : ""}">
      <span class="verdict-area">${c.area}<span class="verdict-note">${c.note}</span></span>
      <div class="bar"><div class="bar-fill" style="width:${c.pct}%"></div></div>
      <span class="verdict-pct">${c.pct}%</span>
    </div>
  `).join("");
}

/* ============================================================
   Render: timeline
   ============================================================ */

const CHECK_SVG = `<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 6.5 L4.8 9.2 L10 3.4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const CHEVRON_SVG = `<svg class="chevron" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 8 L10 13 L15 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function renderTimeline() {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = PHASES.map((phase, pIdx) => {
    const rows = phase.items.map((item, i) => {
      const id = itemId(phase, i);
      const group = item.g ? `<li class="topic-group" data-group>${item.g}</li>` : "";
      return `${group}
        <li class="topic${progress[id] ? " done" : ""}" data-id="${id}" role="checkbox"
            aria-checked="${!!progress[id]}" tabindex="0">
          <span class="tick">${CHECK_SVG}</span>
          <span class="topic-text">
            <span class="topic-name">${item.t}</span>
            <span class="topic-detail"> — ${item.d}</span>
          </span>
        </li>`;
    }).join("");

    const callout = phase.callout ? `<div class="phase-callout">${phase.callout}</div>` : "";
    const tag = phase.tag ? `<span class="phase-tag ${phase.tagClass}">${phase.tag}</span>` : "";

    return `
      <article class="phase" data-phase="${phase.id}">
        <div class="phase-dot">${pIdx + 1}</div>
        <div class="phase-card">
          <button class="phase-header" aria-expanded="false">
            <span class="phase-title">Phase ${pIdx + 1} — ${phase.title} ${tag}</span>
            <span class="phase-meta">
              <span class="phase-count" data-count></span>
              <span class="bar"><span class="bar-fill" data-bar></span></span>
              ${CHEVRON_SVG}
            </span>
            <span class="phase-desc">${phase.desc}</span>
          </button>
          <div class="phase-panel">
            <div class="phase-panel-inner">
              <ul class="topic-list">${rows}</ul>
              ${callout}
            </div>
          </div>
        </div>
      </article>`;
  }).join("");
}

/* ============================================================
   Progress computation
   ============================================================ */

function updateProgressUI() {
  let total = 0, done = 0;

  PHASES.forEach((phase) => {
    const phaseTotal = phase.items.length;
    const phaseDone = phase.items.reduce((n, _, i) => n + (progress[itemId(phase, i)] ? 1 : 0), 0);
    total += phaseTotal;
    done += phaseDone;

    const el = document.querySelector(`[data-phase="${phase.id}"]`);
    el.querySelector("[data-count]").textContent = `${phaseDone}/${phaseTotal}`;
    el.querySelector("[data-bar]").style.width = `${(phaseDone / phaseTotal) * 100}%`;
    el.classList.toggle("started", phaseDone > 0 && phaseDone < phaseTotal);
    el.classList.toggle("complete", phaseDone === phaseTotal);
  });

  const pct = total ? Math.round((done / total) * 100) : 0;
  document.getElementById("overall-label").textContent = `${done} of ${total} topics`;
  document.getElementById("overall-pct").textContent = `${pct}%`;
  document.getElementById("overall-bar").style.width = `${pct}%`;
}

/* ============================================================
   Interactions
   ============================================================ */

function bindEvents() {
  const timeline = document.getElementById("timeline");

  timeline.addEventListener("click", (e) => {
    const topic = e.target.closest(".topic");
    if (topic) { toggleTopic(topic); return; }

    const header = e.target.closest(".phase-header");
    if (header) togglePhase(header.closest(".phase"));
  });

  timeline.addEventListener("keydown", (e) => {
    if (e.key !== " " && e.key !== "Enter") return;
    const topic = e.target.closest(".topic");
    if (topic) { e.preventDefault(); toggleTopic(topic); }
  });

  document.getElementById("search").addEventListener("input", (e) => applyFilter(e.target.value));

  document.getElementById("reset-progress").addEventListener("click", () => {
    if (!confirm("Clear all saved progress?")) return;
    progress = {};
    saveProgress();
    document.querySelectorAll(".topic.done").forEach((t) => {
      t.classList.remove("done");
      t.setAttribute("aria-checked", "false");
    });
    updateProgressUI();
  });
}

function toggleTopic(topicEl) {
  const id = topicEl.dataset.id;
  progress[id] = !progress[id];
  if (!progress[id]) delete progress[id];
  topicEl.classList.toggle("done", !!progress[id]);
  topicEl.setAttribute("aria-checked", String(!!progress[id]));
  saveProgress();
  updateProgressUI();
}

function togglePhase(phaseEl, force) {
  const open = force !== undefined ? force : !phaseEl.classList.contains("open");
  phaseEl.classList.toggle("open", open);
  phaseEl.querySelector(".phase-header").setAttribute("aria-expanded", String(open));
}

/* ============================================================
   Search / filter
   ============================================================ */

let preSearchOpenState = null;

function applyFilter(query) {
  const q = query.trim().toLowerCase();
  const phases = [...document.querySelectorAll(".phase")];
  const noResults = document.getElementById("no-results");

  if (!q) {
    document.querySelectorAll(".filtered-out").forEach((el) => el.classList.remove("filtered-out"));
    if (preSearchOpenState) {
      phases.forEach((p) => togglePhase(p, preSearchOpenState.has(p.dataset.phase)));
      preSearchOpenState = null;
    }
    noResults.classList.add("hidden");
    return;
  }

  if (!preSearchOpenState) {
    preSearchOpenState = new Set(phases.filter((p) => p.classList.contains("open")).map((p) => p.dataset.phase));
  }

  let anyMatch = false;
  phases.forEach((phaseEl) => {
    let phaseHasMatch = false;
    phaseEl.querySelectorAll(".topic").forEach((topic) => {
      const match = topic.textContent.toLowerCase().includes(q);
      topic.classList.toggle("filtered-out", !match);
      if (match) phaseHasMatch = true;
    });
    // hide orphaned group headings while filtering
    phaseEl.querySelectorAll("[data-group]").forEach((g) => g.classList.add("filtered-out"));
    phaseEl.classList.toggle("filtered-out", !phaseHasMatch);
    togglePhase(phaseEl, phaseHasMatch);
    if (phaseHasMatch) anyMatch = true;
  });

  document.getElementById("no-results-q").textContent = query.trim();
  noResults.classList.toggle("hidden", anyMatch);
}

/* ============================================================
   Init
   ============================================================ */

renderVerdict();
renderTimeline();
updateProgressUI();
bindEvents();

// Open the first not-yet-complete phase by default
const firstOpen = document.querySelector(".phase:not(.complete)") || document.querySelector(".phase");
if (firstOpen) togglePhase(firstOpen, true);
