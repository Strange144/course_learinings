# Tasks: Ansul Joshi Portfolio Website

## Implementation Tasks

- [x] 1. Set up data layer
  - Create `lib/data.ts` with TypeScript interfaces and all portfolio content
  - Export: `personalInfo`, `skills`, `experience`, `projects`, `education`, `certifications`
  - _Requirements: 12.1, 12.2_

- [x] 2. Update root layout and global styles
  - Replace default layout with Barlow Condensed + Inter fonts via `next/font/google`
  - Update `globals.css` with smooth scrolling, font assignments, and Tailwind CSS 4 import
  - Update metadata (title, description, keywords)
  - _Requirements: 1.3, 1.4, 11.2_

- [x] 3. Build Navbar component
  - Fixed top nav with name/title on left, links on right
  - Mobile hamburger menu with `"use client"` directive
  - Smooth anchor link navigation
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [x] 4. Build Hero component
  - Full-viewport section with massive red name typography
  - Fluid font size using `clamp()`
  - Tagline, quote, two CTA buttons, scroll indicator
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [x] 5. Build About component
  - Dark background section with summary, location badge, and stats
  - _Requirements: 4.1, 4.2, 4.3, 4.4_

- [x] 6. Build Skills component
  - Responsive grid of skill category cards
  - Red category labels, black tag pills
  - _Requirements: 5.1, 5.2, 5.3_

- [x] 7. Build Experience component
  - Dark background timeline with role, company (red), period, and bullet points
  - Red dash list markers
  - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [x] 8. Build Projects component
  - Three project cards with number, name, description, tech tags
  - Red hover state inversion
  - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [x] 9. Build Education component
  - Dark background with degree block and certification cards
  - _Requirements: 8.1, 8.2, 8.3_

- [x] 10. Build Contact component
  - Large "LET'S WORK." heading in red
  - Hero email link, contact details grid
  - External links with `target="_blank"` and `rel="noopener noreferrer"`
  - _Requirements: 9.1, 9.2, 9.3, 9.4_

- [x] 11. Build Footer component
  - Dark background with copyright, title, and social links
  - _Requirements: 10.1, 10.2_

- [x] 12. Assemble page
  - Wire all components in `app/page.tsx` with data from `lib/data.ts`
  - _Requirements: 11.1, 12.3_

- [x] 13. Verify build
  - Run `npx tsc --noEmit` — zero errors
  - Run `npx next build` — successful static export
  - _Requirements: 11.5_
