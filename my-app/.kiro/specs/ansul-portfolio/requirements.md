# Requirements: Ansul Joshi Portfolio Website

## Introduction

This document defines the requirements for Ansul Joshi's personal portfolio website. The site is a single-page application built with Next.js (App Router) and Tailwind CSS 4, featuring a bold editorial design inspired by the Arda Güler athlete website aesthetic.

---

## Requirements

### 1. Visual Design & Branding

**1.1** The site MUST use a bold, editorial design with a clean white background, massive red typography, and strong typographic hierarchy.

**1.2** The primary accent color MUST be `#E30613` (red). Black (`#000000`) and white (`#FFFFFF`) are the secondary palette.

**1.3** All display headings (h1, h2, h3) MUST use a condensed bold font (Barlow Condensed or equivalent) to achieve the editorial aesthetic.

**1.4** Body text MUST use a clean sans-serif font (Inter) for readability.

**1.5** The design MUST be fully responsive across mobile (≥320px), tablet (≥768px), and desktop (≥1280px) breakpoints.

---

### 2. Navigation

**2.1** The site MUST include a fixed top navigation bar that remains visible while scrolling.

**2.2** The navbar MUST display "Ansul Joshi" and "Full-Stack Developer" on the left side.

**2.3** The navbar MUST display navigation links on the right: About, Skills, Experience, Projects, Contact.

**2.4** Each navigation link MUST scroll smoothly to its corresponding section via anchor links.

**2.5** On mobile viewports, the navbar MUST collapse to a hamburger menu that reveals a full-screen overlay with navigation links.

---

### 3. Hero Section

**3.1** The hero section MUST occupy the full viewport height (100vh minimum).

**3.2** The name "ANSUL JOSHI" MUST be displayed in massive bold red typography using a fluid font size (minimum `clamp(4rem, 15vw, 14rem)`).

**3.3** The hero MUST display the tagline "Full-Stack Web Developer" and a short quote below the name.

**3.4** The hero MUST include two CTA buttons: "View My Work" (links to `#projects`) and "Get In Touch" (links to `#contact`).

**3.5** The hero MUST include a scroll indicator at the bottom.

---

### 4. About Section

**4.1** The About section MUST display the full professional summary from the resume.

**4.2** The section MUST display the location (Panvel, Maharashtra) as a badge.

**4.3** The section MUST display three key stats: years of experience, projects built, and tech stacks.

**4.4** The About section MUST use a dark (black) background to create visual contrast with adjacent white sections.

---

### 5. Skills Section

**5.1** The Skills section MUST display all six skill categories: Languages, Frontend, Backend, Databases, Tools & Platforms, AI/APIs.

**5.2** Each category MUST be displayed as a card with the category name in red and skill items as bold tags.

**5.3** The skills grid MUST be responsive: 1 column on mobile, 2 on tablet, 3 on desktop.

---

### 6. Experience Section

**6.1** The Experience section MUST display both work entries: KS Softech and Healing Up NGO.

**6.2** Each entry MUST show: role title, company name (in red), date period, and bullet points.

**6.3** Bullet points MUST use a red dash (`—`) as the list marker.

**6.4** The Experience section MUST use a dark (black) background.

---

### 7. Projects Section

**7.1** The Projects section MUST display all three projects: Acadify, Warehouse Management System, and Jitter.

**7.2** Each project card MUST show: project number, name, description, and tech stack tags.

**7.3** Project cards MUST have a hover state that inverts to a red background with white text.

**7.4** The projects grid MUST be responsive: 1 column on mobile, 3 on desktop.

---

### 8. Education Section

**8.1** The Education section MUST display the BSc Computer Science degree with institution and period.

**8.2** The section MUST display both Udemy certifications.

**8.3** The Education section MUST use a dark (black) background.

---

### 9. Contact Section

**9.1** The Contact section MUST display a large "LET'S WORK." heading in red.

**9.2** The email address MUST be displayed as a large, clickable `mailto:` link.

**9.3** The section MUST display all five contact details: email, phone, LinkedIn, GitHub, and location.

**9.4** LinkedIn and GitHub links MUST open in a new tab with `rel="noopener noreferrer"`.

---

### 10. Footer

**10.1** The footer MUST display copyright, title, and links to LinkedIn and GitHub.

**10.2** The footer MUST use a dark (black) background.

---

### 11. Performance & Accessibility

**11.1** All components MUST be React Server Components by default, except the mobile menu toggle which requires client-side state.

**11.2** Fonts MUST be loaded via `next/font/google` with `display: swap` to prevent layout shift.

**11.3** All navigation links MUST be keyboard-accessible (proper tab order and focus states).

**11.4** All external links MUST include `rel="noopener noreferrer"` and `target="_blank"`.

**11.5** The site MUST achieve a static export (no server-side rendering required at runtime).

---

### 12. Data Architecture

**12.1** All portfolio content (personal info, skills, experience, projects, education, certifications) MUST be stored in a single `lib/data.ts` file with TypeScript interfaces.

**12.2** All data types MUST be strictly typed with TypeScript interfaces exported from `lib/data.ts`.

**12.3** Components MUST receive data via props typed against the interfaces in `lib/data.ts`.
