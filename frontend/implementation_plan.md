# Implementation Plan: Testimonials & Loading Screen

**Goal:** Add a spinning "Hub and Spoke" testimonials section and a graphical loading screen.

## Proposed Changes

### 1. New Component: Testimonials.jsx

#### [NEW] [Testimonials.jsx](file:///home/tiphy/my-projects/simontiphyportfolio/frontend/src/components/Testimonials.jsx)

- **Design:** Based on the reference image (Central Hub + Orbiting Nodes).
- **Structure:**
  - **Central Hub:** "What People Say" or Logo.
  - **Satellites:** 6-8 Testimonial cards/avatars connected by curved SVG lines.
- **Animation:**
  - Use `framer-motion` `useScroll` and `useTransform` to rotate the entire system based on scroll position.
  - "Spins beautifully and colorfully".
- **Content:** Placeholder testimonials for now (or generic "Client X").

### 2. New Component: Loader.jsx

#### [NEW] [Loader.jsx](file:///home/tiphy/my-projects/simontiphyportfolio/frontend/src/components/Loader.jsx)

- **Design:** Full-screen overlay.
- **Animation:**
  - Cyberpunk/Tech theme to match the site.
  - Progress bar or "System Initializing" sequence.
  - Smooth fade-out reveal.

### 3. Integration

#### [MODIFY] [App.jsx](file:///home/tiphy/my-projects/simontiphyportfolio/frontend/src/App.jsx)

- Import `Testimonials` and `Loader`.
- Add `loading` state (default `true`).
- Use `useEffect` to simulate loading time (e.g., 2-3 seconds) then set `loading` to `false`.
- Render `Loader` if `loading` is true.
- Insert `Testimonials` before `Contact`.

## Verification

- Verify the loading screen appears on refresh.
- Verify the testimonials section spins on scroll.
- Check mobile responsiveness (maybe stack items or reduce orbit size).
