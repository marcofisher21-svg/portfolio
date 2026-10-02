# Marco Fisher — Luminous Portfolio

> Personal portfolio site for Marco Fisher — entry-level full stack developer, Tech Lead on [SpySee](https://spysee.lcstudio-incubate.co.za), and open to junior developer roles.

**Live:** [your-domain-here](#)

**CV:** [`cv/Marco_Fisher_CV.pdf`](./cv/Marco_Fisher_CV.pdf)

**Contact:** [marcofisher21@gmail.com](mailto:marcofisher21@gmail.com)

---

## About

A single-page portfolio built from scratch — no frameworks, no build step. Just HTML, CSS, and vanilla JavaScript. Designed to be fast, accessible, and visually distinctive with a "luminous orbs" dark theme and an alternate warm "ember" palette.

The site showcases three shipped projects, with a dedicated case study for **SpySee** — a live attendance platform where I served as Tech Lead, Scrum Master, attendance-logic owner, QA tester, and live-deployment lead.

---

## Features

- **Luminous dark theme + ember alternate** — toggle persists via `localStorage`
- **Animated floating orbs** — pure CSS, GPU-accelerated, respects `prefers-reduced-motion`
- **Scroll-reveal animations** — Intersection Observer, fires once per element
- **Smooth anchor navigation** — with URL updates via `history.pushState`
- **Working contact form** — powered by [Formspree](https://formspree.io), with graceful error fallback to email
- **Responsive** — mobile, tablet, and desktop layouts
- **Accessible** — semantic HTML, ARIA labels, keyboard-friendly focus states
- **Case study section** — Problem → Approach → Outcome → My Role
- **Dynamic footer year** — no stale copyright dates

---

## Tech Stack

| Layer | Tools |
|-------|-------|
| **Markup** | HTML5 (semantic, ARIA) |
| **Styling** | CSS3 (custom properties, grid, flexbox, animations) |
| **Logic** | Vanilla JavaScript (ES6+) |
| **Fonts** | [Manrope](https://fonts.google.com/specimen/Manrope) via Google Fonts |
| **Icons** | [Font Awesome 6](https://fontawesome.com/) |
| **Forms** | [Formspree](https://formspree.io/) |
| **Hosting** | <!-- GitHub Pages / Netlify / Vercel --> |

No frameworks. No bundlers. No `node_modules`. Just three files that do the job.

---

## Project Structure
portfolio/
├── cv/
│ └── Marco_Fisher_CV.pdf # Downloadable CV
├── index.html # Markup — all sections
├── style.css # Theme variables, layout, animations
├── script.js # Interactions, theme, form handler
└── README.md


---

## Featured Work

### SpySee — Digital Attendance Platform
**Live:** [spysee.lcstudio-incubate.co.za](https://spysee.lcstudio-incubate.co.za) · **Code:** [GitHub](https://github.com/Life-Choices-Cohort-17-v2/Digital-Attendence-Project)

Real-time attendance tracking for frontline staff. QR-based sign-in, live onsite visibility, and Google Sheets sync. Built with a team at Life Choices Cohort 17.

**My role:**
- Tech Lead — architecture & code review
- Scrum Master — sprint planning & standups
- Attendance logic — core sign-in/out engine
- QA testing — release validation
- Live deployment — FileZilla, alongside Dominic Peck

**Stack:** PHP · MySQL · JavaScript · QR Auth

### 🪵 Wood Craft Workshop — E-commerce
Full-stack e-commerce with Vue, Node, MySQL, and PayFast integration.
[GitHub →](https://github.com/DanielWatterson/Group-3_E-Commerce_Project.git)

### OT Enterprises Insights — Dashboard
Interactive dashboard built with Oracle APEX, PL/SQL, and charts.
[GitHub →](https://github.com/marcofisher21-svg/oracle-apex-OT-Enterprises.git)

---

## Running Locally

No build step. Just open the file:

```bash
git clone https://github.com/marcofisher21-svg/portfolio.git
cd portfolio

# Double-click index.html to view my portfolio

## Contact

- **Email:** [marcofisher21@gmail.com](mailto:marcofisher21@gmail.com)
- **GitHub:** [@marcofisher21-svg](https://github.com/marcofisher21-svg)
- **LinkedIn:** [marco-fisher](https://www.linkedin.com/in/marco-fisher-a768a13b1/)