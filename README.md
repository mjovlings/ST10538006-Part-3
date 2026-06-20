# ST10538006-Part-3
Portfolio of evidence
# CampusCash - Web Development POE (WEDE5020)

## Project Overview
CampusCash is a front-end web application acting as a cashless payment solution interface for students at Rosebank College. This project was developed as part of the Introduction to Web Development (WEDE5020) Portfolio of Evidence (Part 3). 

The platform allows users to find campus services, submit specific account enquiries, and reach out to the administrative team securely.

## Core Features
*   **Dynamic Search Engine:** A JavaScript-powered live search filtering available campus resources.
*   **Interactive Mapping:** Integration of Leaflet.js to pinpoint the helpdesk location on campus.
*   **Dual Form Functionality:** Segregated form processing for specific account *Enquiries* and general *Contact* emails, complete with client-side validation.
*   **Gallery Lightbox:** Custom JavaScript modal for expanding campus dashboard images.
*   **SEO Optimisation:** Clean markup containing meta titles, descriptions, contextual keywords, and alt-text integration.

## Installation & Deployment
This project requires no server-side compilation.
1. Clone the repository to your local machine.
2. Open `index.html` in any modern web browser.
3. The site is built entirely using vanilla HTML5, CSS3, and JavaScript (ES6).
4. External Dependency: Leaflet.js (loaded via CDN) requires an active internet connection to render map tiles.

---

# Changelog
*This section records the history of development changes based on lecturer feedback and iterative testing.*

### [v1.2.0] - Pre-Submission Updates
*   **Added:** Dual form layout in `contact.html` to separate general emails from specific account enquiries.
*   **Added:** Checkbox validation to both forms (Privacy Policy & Student Data confirmation).
*   **Updated:** Refactored `script.js` to process the Enquiry Form and Contact Form independently, simulating varied system responses.
*   **Fixed:** `z-index` conflict in `styles.css` causing the Leaflet map to overlap header elements during scroll.
*   **Fixed:** Asset optimization. Renamed `Team member.jpg` to `team-member.jpg` to avoid URL encoding issues (`%20`).
*   **Updated:** Injected transparent base64 placeholder into the `about us.html` lightbox template to prevent console image-loading errors.

### [v1.1.0] - Interactivity & SEO Enhancements
*   **Added:** Leaflet.js interactive map to the contact page.
*   **Added:** Dynamic JS counter elements for the homepage statistics.
*   **Updated:** SEO meta tags (title, description, keywords) implemented across all HTML files.
*   **Updated:** Alt attributes verified and expanded for all `<img>` tags to improve accessibility.

### [v1.0.0] - Initial Structure
*   **Added:** Core HTML pages (`index.html`, `about us.html`, `contact.html`, `FAQs.html`, `Testimonials.html`).
*   **Added:** Global `styles.css` setup using CSS variables for consistent branding.
*   **Added:** Basic responsive navigation and footer sections.
