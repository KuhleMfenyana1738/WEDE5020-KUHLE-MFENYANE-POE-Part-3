/**
 * main.js - Handles global site navigation and mobile menu toggles
 */
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle logic (if you implement a hamburger button later)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('header nav ul');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});


/**
 * main.js - Global site navigation and interactive behaviors
 */
document.addEventListener('DOMContentLoaded', () => {
    // Optional mobile menu toggle support if a hamburger button is added later
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('header nav ul');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});

/**
 * main.js - Global site navigation and interactive behaviors
 */
document.addEventListener('DOMContentLoaded', () => {
    // Optional mobile menu toggle support if a hamburger button is added later
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('header nav ul');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});

/**
 * main.js - Global site navigation and interactivity
 */
document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle (if a menu button with class .mobile-menu-toggle exists)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('header nav ul');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Highlight current page in navigation if class="active" is missing
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath && !link.classList.contains('active')) {
            link.classList.add('active');
        }
    });
});

/**
 * search.js - Handles live filtering of service cards based on user input
 */
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('service-search');
    
    // Exit safely if the search input is not present on the current page
    if (!searchInput) return;

    const serviceCards = document.querySelectorAll('.services-grid .service-card');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        serviceCards.forEach(card => {
            const titleElement = card.querySelector('h4');
            const descriptionElement = card.querySelector('.service-content p');
            const listItems = card.querySelectorAll('ul li');

            let matchText = '';
            if (titleElement) matchText += titleElement.textContent.toLowerCase() + ' ';
            if (descriptionElement) matchText += descriptionElement.textContent.toLowerCase() + ' ';
            
            listItems.forEach(li => {
                matchText += li.textContent.toLowerCase() + ' ';
            });

            // Toggle visibility using the CSS utility class (.hidden)
            if (matchText.includes(query)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

/**
 * main.js - Global site navigation and interactive behaviors
 */
document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle (if a menu toggle button exists)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('header nav ul');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Automatically highlight the active page link if class="active" is missing
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath && !link.classList.contains('active')) {
            link.classList.add('active');
        }
    });
});