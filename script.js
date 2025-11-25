// Hamburger Menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');
    
    if (hamburger && navLinks) {
        function toggleMenu() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            if (navOverlay) {
                navOverlay.classList.toggle('active');
            }
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
        }
        
        function closeMenu() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            if (navOverlay) {
                navOverlay.classList.remove('active');
            }
            document.body.style.overflow = 'auto';
        }
        
        hamburger.addEventListener('click', toggleMenu);
        
        // Close menu when clicking on overlay
        if (navOverlay) {
            navOverlay.addEventListener('click', closeMenu);
        }
        
        // Close menu when clicking on a link
        const navLinksItems = navLinks.querySelectorAll('a');
        navLinksItems.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all Read More buttons
    const readMoreButtons = document.querySelectorAll('.btn-read-more');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-modal');

    // Open modal when Read More button is clicked
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close modal when X is clicked
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Restore scrolling
            }
        });
    });

    // Close modal when clicking outside the modal content
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
                document.body.style.overflow = 'auto'; // Restore scrolling
            }
        });
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.style.display === 'block') {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto'; // Restore scrolling
                }
            });
        }
    });

    // FAQ Accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const isActive = this.classList.contains('active');

            // Close all other FAQ items
            faqQuestions.forEach(q => {
                if (q !== this) {
                    q.classList.remove('active');
                    q.parentElement.querySelector('.faq-answer').classList.remove('active');
                }
            });

            // Toggle current FAQ item
            if (isActive) {
                this.classList.remove('active');
                answer.classList.remove('active');
            } else {
                this.classList.add('active');
                answer.classList.add('active');
            }
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for sticky navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Learn More button links to About page
    const learnMoreBtn = document.querySelector('.btn-learn-more');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            window.location.href = 'about.html';
        });
    }

    // Contact Form Handling with EmailJS
    const contactForm = document.getElementById('contactForm');
    if (contactForm && typeof emailjs !== 'undefined') {
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formMessage = document.getElementById('formMessage');
            const submitButton = contactForm.querySelector('.btn-submit');
            const formData = new FormData(contactForm);
            const firstName = formData.get('firstName');
            const lastName = formData.get('lastName');
            const email = formData.get('email');
            const message = formData.get('message');
            const combinedMessage = `Email: ${email}

Message:
${message}`;

            // Disable submit button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            formMessage.textContent = '';
            formMessage.className = 'form-message';

            // Prepare email template parameters
            const templateParams = {
                from_name: `${firstName} ${lastName}`,
                from_email: email,
                first_name: firstName,
                last_name: lastName,
                message: combinedMessage,
                to_email: 'hello@ccalawyer.it.com',
                reply_to: email
            };

            // Send email using EmailJS
            emailjs.send('service_hxpjgv7', 'template_otikgg4', templateParams)
                .then(function(response) {
                    // Success
                    formMessage.textContent = 'Thank you! Your message has been sent successfully. We will get back to you soon.';
                    formMessage.className = 'form-message success';
                    contactForm.reset();
                    
                    // Re-enable submit button
                    submitButton.disabled = false;
                    submitButton.textContent = 'Send';
                }, function(error) {
                    // Error
                    console.error('EmailJS Error:', error);
                    formMessage.textContent = 'Sorry, there was an error sending your message. Please try again or call us directly at +1 (480) 914-4872.';
                    formMessage.className = 'form-message error';
                    
                    // Re-enable submit button
                    submitButton.disabled = false;
                    submitButton.textContent = 'Send';
                });
        });
    } else if (contactForm) {
        // Fallback if EmailJS is not loaded
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formMessage = document.getElementById('formMessage');
            formMessage.textContent = 'Email service not configured. Please call us directly at +1 (480) 914-4872 or email hello@ccalawyer.it.com';
            formMessage.className = 'form-message error';
        });
    }
});

