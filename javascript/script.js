document.addEventListener("DOMContentLoaded", () => {
   
    /* --- 1. ACTIVE NAV HIGHLIGHTER --- */
    const currentUrl = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href");
        if (linkHref === currentUrl || decodeURIComponent(linkHref) === currentUrl || (currentUrl === "" && linkHref === "index.html")) {
            link.classList.add("active");
        }
    });

    /* --- 2. DYNAMIC SEARCH ENGINE --- */
    const searchInput = document.getElementById("live-search-input");
    const searchResultsBox = document.getElementById("search-results-dropdown");

    const pageIndexDatabase = [
        { title: "Cashless Meals Payment Setup", desc: "Learn how to easily tap and pay for campus lunches safely.", URL: "index.html" },
        { title: "Prepaid Tuition Allocations", desc: "Discover rules governing monthly student funding structures.", URL: "FAQs.html" },
        { title: "Helpdesk & WhatsApp Assistance", desc: "Get direct contact details, telephone maps, and communication metrics.", URL: "contact.html" },
        { title: "Lost Card Replacements", desc: "What to do if your student card containing your electronic cash wallet goes missing.", URL: "FAQs.html" },
        { title: "Executive Management Team", desc: "Read about the visionaries and founder Thandolwethu Shabalala behind CampusCash.", URL: "about us.html" },
        { title: "Student Budgets and Budget Reviews", desc: "See verified student reviews from Nadia, Themba, and Liam tracking their accounts.", URL: "Testimonials.html" }
    ];

    if (searchInput && searchResultsBox) {
        searchInput.addEventListener("input", function() {
            const searchTerm = this.value.toLowerCase().trim();
            searchResultsBox.innerHTML = ""; 

            if (searchTerm === "") {
                searchResultsBox.style.display = "none";
                return;
            }

            const matchedItems = pageIndexDatabase.filter(item => 
                item.title.toLowerCase().includes(searchTerm) || 
                item.desc.toLowerCase().includes(searchTerm)
            );

            if (matchedItems.length > 0) {
                searchResultsBox.style.display = "block";
                matchedItems.forEach(item => {
                    const itemRow = document.createElement("div");
                    itemRow.className = "search-result-row";
                    itemRow.innerHTML = `<a href="${item.URL}"><strong>${item.title}</strong><p>${item.desc}</p></a>`;
                    searchResultsBox.appendChild(itemRow);
                });
            } else {
                searchResultsBox.style.display = "block";
                const emptyRow = document.createElement("div");
                emptyRow.style.padding = "1rem";
                emptyRow.textContent = "No matching search items found.";
                searchResultsBox.appendChild(emptyRow);
            }
        });

        document.addEventListener("click", (e) => {
            if (e.target !== searchInput && e.target !== searchResultsBox) {
                searchResultsBox.style.display = "none";
            }
        });
    }

    /* --- 3. FAQ ACCORDION --- */
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach(question => {
        question.addEventListener("click", function() {
            this.classList.toggle("active");
            const answer = this.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    /* --- 4. FORM VALIDATION (Enquiry & Contact) --- */
    
    // 4A. Enquiry Form (Processes a system response)
    const enquiryForm = document.getElementById("enquiryForm");
    if (enquiryForm) {
        enquiryForm.addEventListener("submit", (e) => {
            e.preventDefault(); 
            let isValid = true;

            const name = document.getElementById("enq-name");
            const student = document.getElementById("enq-student");
            const category = document.getElementById("enq-category");
            const message = document.getElementById("enq-message");
            const confirm = document.getElementById("enq-confirm");

            // Reset errors
            document.querySelectorAll("#enquiryForm .error-msg").forEach(span => span.textContent = "");
            const success = document.getElementById("enq-success-feedback");
            success.className = "success-box-hidden";

            if (name.value.trim().length < 3) { document.getElementById("enq-name-error").textContent = "Name is required."; isValid = false; }
            if (student.value.trim().length < 5) { document.getElementById("enq-student-error").textContent = "Valid student number required."; isValid = false; }
            if (category.value === "") { document.getElementById("enq-category-error").textContent = "Select an enquiry type."; isValid = false; }
            if (message.value.trim().length < 10) { document.getElementById("enq-message-error").textContent = "Details must be at least 10 chars."; isValid = false; }
            if (!confirm.checked) { document.getElementById("enq-confirm-error").textContent = "You must confirm your account details."; isValid = false; }

            if (isValid) {
                success.className = "success-box-visible";
                // Simulating a system response per the rubric
                success.innerHTML = `<strong>System Response:</strong> Logged successfully under ID #${Math.floor(Math.random() * 10000)}. Support will investigate your ${category.options[category.selectedIndex].text} query.`;
                enquiryForm.reset();
            }
        });
    }

    // 4B. Contact Form (Simulates sending an email)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); 
            let isValid = true;

            const name = document.getElementById("contact-name");
            const email = document.getElementById("contact-email");
            const message = document.getElementById("contact-message");
            const policy = document.getElementById("contact-policy");

            // Reset errors
            document.querySelectorAll("#contactForm .error-msg").forEach(span => span.textContent = "");
            const success = document.getElementById("contact-success-feedback");
            success.className = "success-box-hidden";

            if (name.value.trim().length < 3) { document.getElementById("contact-name-error").textContent = "Name is required."; isValid = false; }
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value.trim())) { document.getElementById("contact-email-error").textContent = "Valid email required."; isValid = false; }
            if (message.value.trim().length < 10) { document.getElementById("contact-message-error").textContent = "Message must be at least 10 chars."; isValid = false; }
            if (!policy.checked) { document.getElementById("contact-policy-error").textContent = "You must agree to the privacy policy."; isValid = false; }

            if (isValid) {
                success.className = "success-box-visible";
                // Simulating sending an email per the rubric
                success.innerHTML = `<strong>Email Sent!</strong> An email has been dispatched from ${email.value} to admin@campuscash.co.za.`;
                contactForm.reset();
            }
        });
    }

    /* --- 5. INTERACTIVE MAP (Leaflet.js) --- */
    const mapElement = document.getElementById('map');
    if (mapElement && typeof L !== 'undefined') {
        // Set coordinates for Rosebank College area
        const map = L.map('map').setView([-26.1432, 28.0461], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        L.marker([-26.1432, 28.0461]).addTo(map)
            .bindPopup('<b>CampusCash Helpdesk</b><br>Rosebank College Main Campus.')
            .openPopup();
    }

    /* --- 6. STAT COUNTERS --- */
    const counters = document.querySelectorAll('.counter');
    const speed = 200; 
    
    const countUp = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => countUp(counter), 15);
        } else {
            counter.innerText = target + "+";
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countUp(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));

    /* --- 7. BACK TO TOP BUTTON --- */
    const backToTopBtn = document.getElementById("backToTop");
    if(backToTopBtn) {
        window.onscroll = function() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        };

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

/* --- 8. LIGHTBOX FUNCTIONS --- */
function openLightbox(imgElement) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");
    
    lightbox.style.display = "block";
    lightboxImg.src = imgElement.src;
    caption.innerHTML = imgElement.alt;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}