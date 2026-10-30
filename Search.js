/**
 * search.js - Handles live filtering of service cards based on user input
 */
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('service-search');
    
    if (!searchInput) return; // Exit if the search input doesn't exist on this page

    // Grab all individual service cards inside the grid
    const serviceCards = document.querySelectorAll('.services-grid .service-card');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        serviceCards.forEach(card => {
            // Extract text content from the card title and bullet points
            const titleElement = card.querySelector('h4');
            const descriptionElement = card.querySelector('.service-content p');
            const listItems = card.querySelectorAll('ul li');

            let matchText = '';
            if (titleElement) matchText += titleElement.textContent.toLowerCase() + ' ';
            if (descriptionElement) matchText += descriptionElement.textContent.toLowerCase() + ' ';
            
            listItems.forEach(li => {
                matchText += li.textContent.toLowerCase() + ' ';
            });

            // Show or hide the card based on whether it matches the search query
            if (matchText.includes(query)) {
                card.style.display = ''; // Revert to default display (flex/block)
            } else {
                card.style.display = 'none';
            }
        });
    });
});

/**
 * search.js - Handles live filtering of service cards based on user input
 */
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('service-search');
    
    if (!searchInput) return; // Exit gracefully if search input is missing on the current page

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

            // Toggle visibility using a CSS utility class
            if (matchText.includes(query)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

/**
 * search.js - Handles live filtering of service cards based on user input
 */
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('service-search');
    
    if (!searchInput) return; // Exit gracefully if search input is not on this page

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

            // Toggle visibility using a CSS utility class (.hidden)
            if (matchText.includes(query)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

/**
 * search.js - Handles live filtering of service cards based on user input
 */
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('service-search');
    
    // Exit gracefully if the search input is not present on the current page
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