Portfolio of evidence website-Part3
WEDE5020 — Portfolio of Evidence
Thandolwethu Shabalala
IIE Rosebank College | ST10538006
Github:https://github.com/mjovlings/ST10538006-Part-3

TABLE OF CONTENTS
1. Website Choice: CampusCash	3
Business Description	3
Reasons for Choosing this Business	3
Website Goals and Objectives	3
2. Project Timeline & Milestones	3
3. Financial Budget & Cost Analysis	5
Monthly Operating Costs	5
Estimated Monthly Income & Profit Projections	6
4. Website Visual Assets	7
5. Website Pages and Content Architecture	8
6. Changelog — Part 1 to Part 3 Transition	9
6.1 Directory & File Structure Changes	9
6.2 Page-by-Page Technical Upgrades	10
6.3 Part 3 Interactive Integration & GitHub Requirements	11
7. Technical Stack Realization	12
8. Academic References	12

 

PART 1 — PROJECT OVERVIEW
1. WEBSITE CHOICE: CAMPUSCASH 

BUSINESS DESCRIPTION
CampusCash is an innovative digital cashless payment ecosystem engineered specifically for Rosebank College students. The system allows students to purchase meals by tapping their student card at cafeteria payment points. Parents can preload funds onto student accounts online, creating a safer and more convenient alternative to cash transactions. The solution reduces lines, improves campus security, and assists with student spending management. 
REASONS FOR CHOOSING THIS BUSINESS
The introduction of CampusCash addresses several operational challenges currently experienced within the college cafeteria environment. Cash transactions often slow down service delivery and create long queues during peak lunch periods. Additionally, students may lose physical cash or become victims of theft on campus. Parents currently have limited visibility into daily student spending habits. CampusCash solves these issues by introducing a secure digital payment method that improves convenience, accountability, and operational efficiency. 
WEBSITE GOALS AND OBJECTIVES
•	Explain CampusCash clearly to all students and parents. 
•	Answer common transactional and security questions before the official launch. 
•	Collect user feedback and support queries through a dedicated contact page. 
•	Showcase student testimonials to build trust and credibility within the campus. 
•	Promote a faster, safer, and more convenient digital payment experience. 
2. PROJECT TIMELINE & MILESTONES
The development lifecycle of the CampusCash platform was executed across a structured academic timeline, systematically progressing from initial conceptualization to final deployment. 
Week	Activity	Milestone / Deliverable
Week 1	Choose business concept (CampusCash) and define the organization description. 	Business idea approved. 
Week 2	Write reasons for choosing the organization and establish clear website goals. 	Website goals and objectives completed. 
Week 3	Conduct asset research and gather initial open-source website assets. 	Website assets collected. 
Week 4	Design website structure and outline page requirements. 	Website structure planned. 
Week 5	Create wireframes and establish the interface layout. 	Wireframes completed. 
Week 6	Develop base website pages using semantic HTML5 and external CSS3. 	Basic website layout created. 
Week 7	Add localized images and refine target service content. 	Website content completed. 
Week 8	Test website functionality and fix cross-browser errors. 	Website tested. 
Week 9	Perform final review of website interactivity, responsiveness, and assignment alignment. 	Final POE documentation ready. 
Week 10	Deploy web application to GitHub Pages and complete assignment submission. 	Submission completed. 

 
3. FINANCIAL BUDGET & COST ANALYSIS
Start-Up Costs (Once-off)
Item Description	Operational Allocation	Estimated Cost (R)
Domain Registration	Secure [http://campuscash.co.za](http://campuscash.co.za) domain authority. 	R100 
NFC Point-of-Sale Integration	Initial cafeteria physical terminal hardware adjustments. 	R3,500 
SSL Security Certificate	Encryption implementation for transaction secure links. 	R450
UI/UX Graphic Assets	Sourcing free vectors and instructional icons from Pixabay. 	R0 
Marketing & Launch Campaign	Physical campus flyers, posters, and digital launch banners. 	R1,200 
Total Start-Up Costs		R5,250

MONTHLY OPERATING COSTS
Item Description	Operational Allocation	Estimated Cost (R/month)
Cloud Web Hosting	Basic student plan for system traffic management. 	R150 
System Maintenance	Database checking and minor bug resolution loops. 	R500 
Payment Gateway API Fees	Secure transactional processing pipeline standard rates. 	R350
Support Allocation	Processing user queries and technical support ticketing. 	R400 
Total Monthly Costs		R1,400

 
ESTIMATED MONTHLY INCOME & PROFIT PROJECTIONS
Income Stream	Model Metrics	Estimated Amount (R)
Cafeteria Processing Revenue	Small transaction processing fee model on cafeteria sales. 	R6,500 
Estimated Monthly Profit	Gross Income (R6,500) minus Monthly Operating Costs (R1,400). 	R5,100

 
PART 2 — TECHNICAL ARCHITECTURE


4. WEBSITE VISUAL ASSETS
The table below tracks all visual assets gathered from free open repositories to support the project design requirements. 
Asset Description	Use On Page	Reference / Academic Source
Students at cafeteria till	Home page hero image. 	Pixabay, https://pixabay.com, Accessed 14 April 2026. 
Group of happy students	About page contextual image. 	Pixabay, https://pixabay.com, Accessed 14 April 2026. 
Question mark icon	FAQs page visual anchor. 	Pixabay, https://pixabay.com, Accessed 14 April 2026. 
Email/phone icon	Contact page communication cue. 	Pixabay, https://pixabay.com, Accessed 14 April 2026. 
Star rating icon	Testimonials page review decoration. 	Pixabay, https://pixabay.com, Accessed 14 April 2026. 

 


5. WEBSITE PAGES AND CONTENT ARCHITECTURE
The CampusCash website consists of five core pages utilizing a shared color scheme (#2563EB primary blue, light blue backgrounds, dark text, and white page backgrounds) to project a professional interface. 
Page Name	Function	Content Elements & UI Components
Index / Home	Introduces CampusCash and engages students. 	Logo text in #2563EB, Slogan "Tap. Eat. Done.", standard Navigation links, Full-width photo, 3-step guide description, "Learn More" CTA button linking to About page, standard copyright footer. 
About	Explains the service model and advantages. 	Heading "About CampusCash", photo of smiling students, description of cash vulnerabilities and digital fixes, semantic bullet list of benefits (faster queues, safety, spending tracking), standard footer. 
FAQs	Answers immediate user questions. 	Heading "Frequently Asked Questions", question icon graphic, functional Q&A layout covering card loss, parental online top-ups, and cash-decommission parameters. 
Contact	Collects queries and user feedback. 	Heading "Contact Us", email anchor support@campuscash.co.za, phone line 011 123 4567, interactive contact form (Name, Email, Message fields, Send button), response notice, standard footer. 
Testimonials	Showcases early student feedback. 	Heading "What Students Say", star rating icons, student text quotes ("No more waiting in line! – Lerato", "My mom likes that she can see what I buy – Sipho"), spaceholders for post-launch additions, standard footer. 

 
PART 3 — CHANGELOG & INTERACTIVE INTEGRATION


6. CHANGELOG — PART 1 TO PART 3 TRANSITION
The following technical logs document the optimization of file structures, page mechanics, and interactivity guidelines from early project stages. 

6.1 DIRECTORY & FILE STRUCTURE CHANGES
Website Phase 1 & 2 State	Upgraded Phase 3 Architecture	Technical Optimization Rationale
Inline and internal <style> blocks on individual pages. 	Consolidated external stylesheet at css/styles.css. 	Implements strict separation of concerns, removes code duplication, and allows site-wide styling consistency. 
No programmatic script or logical files present. 	Integrated centralized script at js/script.js. 	Centralizes application interactive logic, accelerating load speeds and cleaner code execution. 
Scattered documentation notes and layout guidelines. 	Structured cleanly into 5 target operational HTML files. 	Eliminates navigational fragmentation and guarantees zero broken links during page transitions. 

 


6.2 PAGE-BY-PAGE TECHNICAL UPGRADES
Page Reference	Phase 1 / 2 Form (Before)	Phase 3 Optimized Form (After)
Home (index.html)	Text overview with standard static layout presentation. 	Integrated a JavaScript-powered automatic and manual image carousel with functional CTA actions. 
About (about.html)	Standard descriptive text blocks without modular column structures. 	Structured with side-by-side columns, clean image integration, and highlighted benefit sections. 
FAQs (faqs.html)	Plain text listing of question blocks that lengthened the page scroll. 	Built an interactive grid-based layout that presents questions cleanly and saves vertical space. 
Contact (contact.html)	Text placeholders of phone and email support addresses. 	Fully styled form handling with Name, Email, and Message inputs alongside form button states. 
Testimonials (testimonials.html)	Raw bulleted items lacking clear layout framing. 	Transformed review inputs into structured card components using flexible CSS alignments and star rating badges. 

 

6.3 PART 3 INTERACTIVE INTEGRATION & GITHUB REQUIREMENTS

Mandatory Requirement	Project Implementation & Execution Details	Deployment Status
Enquiry / Contact Form	Functional interactive form on contact.html using native validation for input submission parameters. 	Implemented
Interactive Carousel	JavaScript-powered slideshow on the Home page featuring automatic sliding patterns and manual control links. 	Implemented
Modern Grid Layouts	Created using modern CSS Grid and Flexbox engines to avoid archaic table layout positioning. 	Implemented
Mobile Viewport Tag	Responsive <meta name="viewport" content="width=device-width, initial-scale=1.0"> included globally on all files. 	Implemented
Shared Coding Paths	Unified linking model where all 5 structural pages share the global CSS and JS master paths. 	Implemented
GitHub Log Records	Ongoing deployment history logged via descriptive version control commit entries. 	Ongoing
Repository README	Clear markdown README.md containing operational setup steps, descriptions, and active deployment links. 	Implemented

 
PART 4 — TECHNICAL REALIZATION & VALIDATION


7. TECHNICAL STACK REALIZATION
•	HTML5: Structures the platform content cleanly using modern semantic tags (<header>, <nav>, <main>, <section>, <footer>) to secure strict code validation compliance scores. 
•	CSS3: Custom styles managed inside a singular css/styles.css sheet using flexible layouts (Grid and Flexbox) to maintain color choices and mobile screen adaptations. 
•	JavaScript (ES6+): Embedded client-side scripting to power the home page carousel slider and secure form interactive actions. 
•	Git & GitHub Platform: Version control workflow tracking regular feature code commits, hosting documentation layouts, and running production files via GitHub Pages. 


8. ACADEMIC REFERENCES
•	Icons8. (2026). Graphic User Interface Symbols and Layout Vectors. Available at: https://icons8.com. 
•	Pixabay. (2026). Royalty-Free Open Source Media Assets Library. Available at: https://pixabay.com. 
•	Rosebank College. (2025). Institutional Brand Strategy Guide & Campus Color Inspiration Resource. Durban: IIE Publication. 
•	W3C World Wide Web Consortium. (2026). Semantic Markup Specifications & CSS Level 3 Layout Validation Parameters. Available at: https://w3.org. 
