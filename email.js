/**
 * email.js - SJ Holdings and Logistics (Pty) Ltd
 * Handles contact form email submissions and email utilities.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS (Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS Public Key)
    if (typeof emailjs !== 'undefined') {
        emailjs.init('YOUR_PUBLIC_KEY');
    }

    const contactForm = document.querySelector('#contact-form') || document.querySelector('form');

    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

/**
 * Handles submission of enquiry and contact forms
 * @param {Event} event 
 */
async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]') || form.querySelector('.submit-btn');
    const originalBtnText = submitBtn ? submitBtn.textContent : 'Send';

    // Retrieve form field values
    const name = form.querySelector('[name="name"]')?.value.trim() || '';
    const email = form.querySelector('[name="email"]')?.value.trim() || '';
    const phone = form.querySelector('[name="phone"]')?.value.trim() || '';
    const service = form.querySelector('[name="service"]')?.value || 'General Enquiry';
    const message = form.querySelector('[name="message"]')?.value.trim() || '';

    // Basic validation check before sending
    if (!name || !email || !message) {
        alert('Please fill in all required fields (Name, Email, and Message).');
        return;
    }

    // UI Feedback: Show loading state
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending Message...';
    }

    try {
        // Attempt 1: Send via EmailJS integration
        if (typeof emailjs !== 'undefined') {
            const templateParams = {
                from_name: name,
                reply_to: email,
                phone_number: phone,
                service_requested: service,
                message: message,
                to_email: 'sjholdingslogistics@gmail.com'
            };

            // Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your EmailJS credentials
            await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);
            
            showFormFeedback(form, 'success', 'Thank you! Your message has been sent successfully. We will get back to you shortly.');
            form.reset();
        } else {
            // Attempt 2: Fallback to mailto link if no backend/service is configured
            sendMailtoFallback({ name, email, phone, service, message });
            showFormFeedback(form, 'info', 'Opening your email client to complete the message send...');
        }
    } catch (error) {
        console.error('Email Dispatch Error:', error);
        showFormFeedback(form, 'error', 'Failed to send message via automated service. Opening your local email client instead.');
        
        // Fallback on error
        sendMailtoFallback({ name, email, phone, service, message });
    } finally {
        // Reset button state
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    }
}

/**
 * Opens default email client as a fail-safe backup
 */
function sendMailtoFallback(data) {
    const recipient = 'sjholdingslogistics@gmail.com';
    const subject = encodeURIComponent(`New Logistics Enquiry: ${data.service} (${data.name})`);
    const body = encodeURIComponent(
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Phone: ${data.phone}\n` +
        `Service Requested: ${data.service}\n\n` +
        `Message:\n${data.message}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
}

/**
 * Displays visual status messages to the user on submission
 */
function showFormFeedback(form, type, message) {
    let feedbackEl = form.querySelector('.form-feedback');
    
    if (!feedbackEl) {
        feedbackEl = document.createElement('div');
        feedbackEl.className = 'form-feedback';
        feedbackEl.style.marginTop = '15px';
        feedbackEl.style.padding = '12px 16px';
        feedbackEl.style.borderRadius = '6px';
        feedbackEl.style.fontWeight = '500';
        form.appendChild(feedbackEl);
    }

    if (type === 'success') {
        feedbackEl.style.backgroundColor = '#d4edda';
        feedbackEl.style.color = '#155724';
        feedbackEl.style.border = '1px solid #c3e6cb';
    } else if (type === 'error') {
        feedbackEl.style.backgroundColor = '#f8d7da';
        feedbackEl.style.color = '#721c24';
        feedbackEl.style.border = '1px solid #f5c6cb';
    } else {
        feedbackEl.style.backgroundColor = '#e2e3e5';
        feedbackEl.style.color = '#383d41';
        feedbackEl.style.border = '1px solid #d6d8db';
    }

    feedbackEl.textContent = message;
}

/**
 * js/email.js
 * Handles enquiry and contact form submissions for SJ Holdings & Logistics.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS if the library script is included on the page
    if (typeof emailjs !== 'undefined') {
        // Replace with your actual EmailJS Public Key
        emailjs.init('YOUR_PUBLIC_KEY');
    }

    // Target form elements across contactus.html or enquiries.html
    const contactForm = document.querySelector('#contact-form') || 
                        document.querySelector('#enquiry-form') || 
                        document.querySelector('form');

    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

/**
 * Handles form submit events
 * @param {Event} event 
 */
async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]') || form.querySelector('.btn');
    const originalBtnText = submitBtn ? submitBtn.textContent : 'Send Message';

    // Extract input fields safely across various ID/Name conventions
    const name = form.querySelector('[name="name"], #name')?.value.trim() || '';
    const email = form.querySelector('[name="email"], #email')?.value.trim() || '';
    const phone = form.querySelector('[name="phone"], #phone')?.value.trim() || '';
    const service = form.querySelector('[name="service"], #service')?.value || 'General Logistics Enquiry';
    const message = form.querySelector('[name="message"], #message')?.value.trim() || '';

    // Basic input validation
    if (!name || !email || !message) {
        showFormFeedback(form, 'error', 'Please fill in all required fields (Name, Email, Message).');
        return;
    }

    // Set UI loading state
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
    }

    try {
        // Attempt 1: Send via EmailJS integration if SDK is present
        if (typeof emailjs !== 'undefined') {
            const templateParams = {
                from_name: name,
                reply_to: email,
                phone_number: phone,
                service_requested: service,
                message: message,
                to_email: 'sjholdingslogistics@gmail.com'
            };

            // Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID with your EmailJS credentials
            await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);

            showFormFeedback(form, 'success', 'Thank you! Your message has been sent successfully. We will be in touch soon.');
            form.reset();
        } else {
            // Attempt 2: Fallback to opening the user's desktop/mobile mail application
            openMailtoClient({ name, email, phone, service, message });
            showFormFeedback(form, 'info', 'Opening your email app to finish sending your enquiry...');
        }
    } catch (error) {
        console.error('Submission error:', error);
        showFormFeedback(form, 'error', 'Failed to send automatically. Redirecting to your mail client...');
        openMailtoClient({ name, email, phone, service, message });
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    }
}

/**
 * Fallback to construct a standard mailto link
 */
function openMailtoClient(data) {
    const recipient = 'sjholdingslogistics@gmail.com';
    const subject = encodeURIComponent(`Website Enquiry: ${data.service} - ${data.name}`);
    const body = encodeURIComponent(
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Phone: ${data.phone}\n` +
        `Service: ${data.service}\n\n` +
        `Message:\n${data.message}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
}

/**
 * Display status feedback below the form
 */
function showFormFeedback(form, type, message) {
    let feedbackEl = form.querySelector('.form-feedback');

    if (!feedbackEl) {
        feedbackEl = document.createElement('div');
        feedbackEl.className = 'form-feedback';
        feedbackEl.style.marginTop = '1rem';
        feedbackEl.style.padding = '0.75rem 1rem';
        feedbackEl.style.borderRadius = '4px';
        feedbackEl.style.fontSize = '0.95rem';
        feedbackEl.style.fontWeight = '500';
        form.appendChild(feedbackEl);
    }

    if (type === 'success') {
        feedbackEl.style.backgroundColor = '#d4edda';
        feedbackEl.style.color = '#155724';
        feedbackEl.style.border = '1px solid #c3e6cb';
    } else if (type === 'error') {
        feedbackEl.style.backgroundColor = '#f8d7da';
        feedbackEl.style.color = '#721c24';
        feedbackEl.style.border = '1px solid #f5c6cb';
    } else {
        feedbackEl.style.backgroundColor = '#e2e3e5';
        feedbackEl.style.color = '#383d41';
        feedbackEl.style.border = '1px solid #d6d8db';
    }

    feedbackEl.textContent = message;
}

/**
 * js/email.js
 * Handles enquiry form validation, dispatch, and EmailJS integration for SJ Holdings & Logistics.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS if the library script is included on your page
    if (typeof emailjs !== 'undefined') {
        // Replace with your actual EmailJS Public Key
        emailjs.init('YOUR_PUBLIC_KEY');
    }

    // Target your enquiry form or general contact forms
    const enquiryForm = document.querySelector('.enquiry-form') || 
                        document.querySelector('#contact-form') || 
                        document.querySelector('form');

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', handleFormSubmit);
    }
});

/**
 * Handles form submit events
 * @param {Event} event 
 */
async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]') || form.querySelector('.submit-btn');
    const originalBtnText = submitBtn ? submitBtn.textContent : 'Send Enquiry';

    // Extract form values matching your HTML element IDs/names
    const fullName = form.querySelector('[name="fullName"], #fullName')?.value.trim() || '';
    const email = form.querySelector('[name="email"], #email')?.value.trim() || '';
    const phone = form.querySelector('[name="phone"], #phone')?.value.trim() || '';
    const serviceType = form.querySelector('[name="serviceType"], #serviceType')?.value || 'General Enquiry';
    const location = form.querySelector('[name="location"], #location')?.value || 'any';
    const subject = form.querySelector('[name="subject"], #subject')?.value.trim() || 'Website Enquiry';
    const message = form.querySelector('[name="message"], #message')?.value.trim() || '';

    // Basic validation check
    if (!fullName || !email || !phone || !subject || !message) {
        showFormFeedback(form, 'error', 'Please fill in all required fields marked with an asterisk (*).');
        return;
    }

    // Set UI loading state
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending Enquiry...';
    }

    try {
        // Attempt 1: Send via EmailJS integration if SDK is present
        if (typeof emailjs !== 'undefined') {
            const templateParams = {
                from_name: fullName,
                reply_to: email,
                phone_number: phone,
                service_required: serviceType,
                preferred_branch: location,
                enquiry_subject: subject,
                message: message,
                to_email: 'sjholdingslogistics@gmail.com'
            };

            // Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID with your EmailJS credentials
            await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);

            showFormFeedback(form, 'success', 'Thank you! Your enquiry has been sent successfully. Our logistics team will get back to you shortly.');
            form.reset();
        } else {
            // Attempt 2: Fallback to opening the user's mail client
            openMailtoClient({ fullName, email, phone, serviceType, location, subject, message });
            showFormFeedback(form, 'info', 'Opening your email client to complete your submission...');
        }
    } catch (error) {
        console.error('Email Dispatch Error:', error);
        showFormFeedback(form, 'error', 'Automated send failed. Redirecting to your email client...');
        openMailtoClient({ fullName, email, phone, serviceType, location, subject, message });
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    }
}

/**
 * Fallback to construct a structured mailto link
 */
function openMailtoClient(data) {
    const recipient = 'sjholdingslogistics@gmail.com';
    const emailSubject = encodeURIComponent(`[Enquiry] ${data.subject} - ${data.fullName}`);
    const emailBody = encodeURIComponent(
        `Full Name: ${data.fullName}\n` +
        `Email: ${data.email}\n` +
        `Phone: ${data.phone}\n` +
        `Service Required: ${data.serviceType}\n` +
        `Preferred Branch: ${data.location}\n` +
        `Subject: ${data.subject}\n\n` +
        `Message:\n${data.message}`
    );

    window.location.href = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;
}

/**
 * Display clean status feedback inside the form
 */
function showFormFeedback(form, type, message) {
    let feedbackEl = form.querySelector('.form-feedback');

    if (!feedbackEl) {
        feedbackEl = document.createElement('div');
        feedbackEl.className = 'form-feedback';
        form.appendChild(feedbackEl);
    }

    feedbackEl.className = `form-feedback ${type}`;
    feedbackEl.textContent = message;
}
/**
 * js/email.js
 * Handles email submissions and form dispatch for SJ Holdings & Logistics.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS if library is present
    if (typeof emailjs !== 'undefined') {
        // Replace with your actual EmailJS Public Key
        emailjs.init('YOUR_PUBLIC_KEY');
    }

    // Attach listener to any available form on the page
    const contactForm = document.querySelector('#contact-form') || 
                        document.querySelector('.enquiry-form') || 
                        document.querySelector('form');

    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

/**
 * Handles processing and submitting forms
 * @param {Event} event 
 */
async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]') || form.querySelector('.submit-btn') || form.querySelector('.btn');
    const originalBtnText = submitBtn ? submitBtn.textContent : 'Send Message';

    // Extract input values flexibly matching various name/id attributes
    const name = form.querySelector('[name="fullName"], [name="name"], #fullName, #name')?.value.trim() || '';
    const email = form.querySelector('[name="email"], #email')?.value.trim() || '';
    const phone = form.querySelector('[name="phone"], #phone')?.value.trim() || '';
    const service = form.querySelector('[name="serviceType"], [name="service"], #serviceType, #service')?.value || 'General Inquiry';
    const location = form.querySelector('[name="location"], #location')?.value || 'Head Office';
    const subject = form.querySelector('[name="subject"], #subject')?.value.trim() || `Inquiry from ${name || 'Website User'}`;
    const message = form.querySelector('[name="message"], #message')?.value.trim() || '';

    // Validation
    if (!name || !email || !message) {
        showFormFeedback(form, 'error', 'Please fill in all required fields (Name, Email, and Message).');
        return;
    }

    // Loading State
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
    }

    try {
        if (typeof emailjs !== 'undefined') {
            const templateParams = {
                from_name: name,
                reply_to: email,
                phone_number: phone,
                service_requested: service,
                preferred_branch: location,
                subject: subject,
                message: message,
                to_email: 'sjholdingslogistics@gmail.com'
            };

            // Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID with your EmailJS credentials
            await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);

            showFormFeedback(form, 'success', 'Thank you! Your message has been sent successfully. We will get back to you shortly.');
            form.reset();
        } else {
            // Fallback to client mail application
            openMailtoClient({ name, email, phone, service, location, subject, message });
            showFormFeedback(form, 'info', 'Opening your email app to send the message...');
        }
    } catch (error) {
        console.error('Submission error:', error);
        showFormFeedback(form, 'error', 'Failed to send automatically. Redirecting to your mail client...');
        openMailtoClient({ name, email, phone, service, location, subject, message });
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    }
}

/**
 * Fallback mailto launcher
 */
function openMailtoClient(data) {
    const recipient = 'sjholdingslogistics@gmail.com';
    const subject = encodeURIComponent(`[Contact Form] ${data.subject}`);
    const body = encodeURIComponent(
        `Full Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Phone: ${data.phone}\n` +
        `Service / Branch: ${data.service} (${data.location})\n\n` +
        `Message:\n${data.message}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
}

/**
 * Renders status messages to the user
 */
function showFormFeedback(form, type, message) {
    let feedbackEl = form.querySelector('.form-feedback');

    if (!feedbackEl) {
        feedbackEl = document.createElement('div');
        feedbackEl.className = 'form-feedback';
        form.appendChild(feedbackEl);
    }

    feedbackEl.className = `form-feedback ${type}`;
    feedbackEl.textContent = message;
}

/**
 * js/email.js
 * Handles email submissions and form dispatch for SJ Holdings & Logistics.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS if library is present
    if (typeof emailjs !== 'undefined') {
        // Replace with your actual EmailJS Public Key
        emailjs.init('YOUR_PUBLIC_KEY');
    }

    // Attach listener to any available form on the page
    const contactForm = document.querySelector('#contact-form') || 
                        document.querySelector('.enquiry-form') || 
                        document.querySelector('form');

    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

/**
 * Handles processing and submitting forms
 * @param {Event} event 
 */
async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]') || form.querySelector('.submit-btn') || form.querySelector('.btn');
    const originalBtnText = submitBtn ? submitBtn.textContent : 'Send Message';

    // Extract input values flexibly
    const name = form.querySelector('[name="fullName"], [name="name"], #fullName, #name')?.value.trim() || '';
    const email = form.querySelector('[name="email"], #email')?.value.trim() || '';
    const phone = form.querySelector('[name="phone"], #phone')?.value.trim() || '';
    const service = form.querySelector('[name="serviceType"], [name="service"], #serviceType, #service')?.value || 'General Inquiry';
    const location = form.querySelector('[name="location"], #location')?.value || 'Head Office';
    const subject = form.querySelector('[name="subject"], #subject')?.value.trim() || `Inquiry from ${name || 'Website User'}`;
    const message = form.querySelector('[name="message"], #message')?.value.trim() || '';

    // Validation
    if (!name || !email || !message) {
        showFormFeedback(form, 'error', 'Please fill in all required fields (Name, Email, and Message).');
        return;
    }

    // Loading State
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
    }

    try {
        if (typeof emailjs !== 'undefined') {
            const templateParams = {
                from_name: name,
                reply_to: email,
                phone_number: phone,
                service_requested: service,
                preferred_branch: location,
                subject: subject,
                message: message,
                to_email: 'sjholdingslogistics@gmail.com'
            };

            // Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID with your EmailJS credentials
            await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);

            showFormFeedback(form, 'success', 'Thank you! Your message has been sent successfully. We will get back to you shortly.');
            form.reset();
        } else {
            // Fallback to client mail application
            openMailtoClient({ name, email, phone, service, location, subject, message });
            showFormFeedback(form, 'info', 'Opening your email app to send the message...');
        }
    } catch (error) {
        console.error('Submission error:', error);
        showFormFeedback(form, 'error', 'Failed to send automatically. Redirecting to your mail client...');
        openMailtoClient({ name, email, phone, service, location, subject, message });
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    }
}

/**
 * Fallback mailto launcher
 */
function openMailtoClient(data) {
    const recipient = 'sjholdingslogistics@gmail.com';
    const subject = encodeURIComponent(`[Website Inquiry] ${data.subject}`);
    const body = encodeURIComponent(
        `Full Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Phone: ${data.phone}\n` +
        `Service / Branch: ${data.service} (${data.location})\n\n` +
        `Message:\n${data.message}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
}

/**
 * Renders status messages to the user
 */
function showFormFeedback(form, type, message) {
    let feedbackEl = form.querySelector('.form-feedback');

    if (!feedbackEl) {
        feedbackEl = document.createElement('div');
        feedbackEl.className = 'form-feedback';
        form.appendChild(feedbackEl);
    }

    feedbackEl.className = `form-feedback ${type}`;
    feedbackEl.textContent = message;
}