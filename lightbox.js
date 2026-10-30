/**
 * lightbox.js - Opens images in a modal overlay when clicked
 */
document.addEventListener('DOMContentLoaded', () => {
    // Select all service images intended for lightbox interaction
    const images = document.querySelectorAll('.service-image');

    if (images.length === 0) return;

    // Create Lightbox DOM structure dynamically
    const lightboxModal = document.createElement('div');
    lightboxModal.id = 'lightbox-modal';
    lightboxModal.innerHTML = `
        <div class="lightbox-overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 9999; justify-content: center; align-items: center;">
            <span class="lightbox-close" style="position: absolute; top: 20px; right: 30px; font-size: 40px; color: #fff; cursor: pointer; font-weight: bold;">&times;</span>
            <img class="lightbox-img" src="" alt="Enlarged view" style="max-width: 90%; max-height: 90%; border-radius: 4px; box-shadow: 0 5px 15px rgba(0,0,0,0.3);">
        </div>
    `;
    document.body.appendChild(lightboxModal);

    const overlay = lightboxModal.querySelector('.lightbox-overlay');
    const lightboxImg = lightboxModal.querySelector('.lightbox-img');
    const closeBtn = lightboxModal.querySelector('.lightbox-close');

    // Attach click event to each service image
    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            overlay.style.display = 'flex';
        });
    });

    // Close lightbox functions
    const closeLightbox = () => {
        overlay.style.display = 'none';
        lightboxImg.src = '';
    };

    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeLightbox();
        }
    });

    // Close on pressing the 'Escape' key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});

/**
 * lightbox.js - Opens service and gallery images in a modal overlay when clicked
 */
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.service-image, .lightbox-target');
    
    if (images.length === 0) return;

    // Dynamically inject the lightbox modal container into the DOM
    let lightboxModal = document.getElementById('lightbox-modal');
    if (!lightboxModal) {
        lightboxModal = document.createElement('div');
        lightboxModal.id = 'lightbox-modal';
        lightboxModal.innerHTML = `
            <div class="lightbox-overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 9999; justify-content: center; align-items: center;">
                <span class="lightbox-close" style="position: absolute; top: 20px; right: 30px; font-size: 40px; color: #fff; cursor: pointer; font-weight: bold;">&times;</span>
                <img class="lightbox-img" src="" alt="Enlarged view" style="max-width: 90%; max-height: 90%; border-radius: 4px; box-shadow: 0 5px 15px rgba(0,0,0,0.3);">
            </div>
        `;
        document.body.appendChild(lightboxModal);
    }

    const overlay = lightboxModal.querySelector('.lightbox-overlay');
    const lightboxImg = lightboxModal.querySelector('.lightbox-img');
    const closeBtn = lightboxModal.querySelector('.lightbox-close');

    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt || 'Enlarged image';
            overlay.style.display = 'flex';
        });
    });

    const closeLightbox = () => {
        overlay.style.display = 'none';
        lightboxImg.src = '';
    };

    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeLightbox();
        }
    });

    // Close on pressing 'Escape' key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});

/**
 * lightbox.js - Opens images with the .lightbox-target class in a modal overlay when clicked
 */
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.lightbox-target, .service-image');
    
    if (images.length === 0) return;

    // Dynamically inject the lightbox modal container into the DOM if not already present
    let lightboxModal = document.getElementById('lightbox-modal');
    if (!lightboxModal) {
        lightboxModal = document.createElement('div');
        lightboxModal.id = 'lightbox-modal';
        lightboxModal.innerHTML = `
            <div class="lightbox-overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 9999; justify-content: center; align-items: center;">
                <span class="lightbox-close" style="position: absolute; top: 20px; right: 30px; font-size: 40px; color: #fff; cursor: pointer; font-weight: bold;">&times;</span>
                <img class="lightbox-img" src="" alt="Enlarged view" style="max-width: 90%; max-height: 90%; border-radius: 4px; box-shadow: 0 5px 15px rgba(0,0,0,0.3);">
            </div>
        `;
        document.body.appendChild(lightboxModal);
    }

    const overlay = lightboxModal.querySelector('.lightbox-overlay');
    const lightboxImg = lightboxModal.querySelector('.lightbox-img');
    const closeBtn = lightboxModal.querySelector('.lightbox-close');

    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt || 'Enlarged location view';
            overlay.style.display = 'flex';
        });
    });

    const closeLightbox = () => {
        overlay.style.display = 'none';
        lightboxImg.src = '';
    };

    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeLightbox();
        }
    });

    // Close on pressing the 'Escape' key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});

/**
 * lightbox.js - Dynamically creates a modal overlay to enlarge clicked images
 */
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.lightbox-target, .service-image');
    
    if (images.length === 0) return;

    // Build and inject the lightbox DOM elements if they don't exist
    let lightboxModal = document.getElementById('lightbox-modal');
    if (!lightboxModal) {
        lightboxModal = document.createElement('div');
        lightboxModal.id = 'lightbox-modal';
        lightboxModal.innerHTML = `
            <div class="lightbox-overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 9999; justify-content: center; align-items: center;">
                <span class="lightbox-close" style="position: absolute; top: 20px; right: 30px; font-size: 40px; color: #fff; cursor: pointer; font-weight: bold;">&times;</span>
                <img class="lightbox-img" src="" alt="Enlarged view" style="max-width: 90%; max-height: 90%; border-radius: 4px; box-shadow: 0 5px 15px rgba(0,0,0,0.3);">
            </div>
        `;
        document.body.appendChild(lightboxModal);
    }

    const overlay = lightboxModal.querySelector('.lightbox-overlay');
    const lightboxImg = lightboxModal.querySelector('.lightbox-img');
    const closeBtn = lightboxModal.querySelector('.lightbox-close');

    // Attach click listeners to target images
    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt || 'Enlarged image preview';
            overlay.style.display = 'flex';
        });
    });

    const closeLightbox = () => {
        overlay.style.display = 'none';
        lightboxImg.src = '';
    };

    closeBtn.addEventListener('click', closeLightbox);
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeLightbox();
        }
    });

    // Support closing the modal via the Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});

/**
 * lightbox.js - Opens images with the .lightbox-target or .service-image class in a modal overlay when clicked
 */
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.lightbox-target, .service-image');
    
    if (images.length === 0) return;

    // Dynamically inject the lightbox modal container into the DOM if not already present
    let lightboxModal = document.getElementById('lightbox-modal');
    if (!lightboxModal) {
        lightboxModal = document.createElement('div');
        lightboxModal.id = 'lightbox-modal';
        lightboxModal.innerHTML = `
            <div class="lightbox-overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 9999; justify-content: center; align-items: center;">
                <span class="lightbox-close" style="position: absolute; top: 20px; right: 30px; font-size: 40px; color: #fff; cursor: pointer; font-weight: bold;">&times;</span>
                <img class="lightbox-img" src="" alt="Enlarged view" style="max-width: 90%; max-height: 90%; border-radius: 4px; box-shadow: 0 5px 15px rgba(0,0,0,0.3);">
            </div>
        `;
        document.body.appendChild(lightboxModal);
    }

    const overlay = lightboxModal.querySelector('.lightbox-overlay');
    const lightboxImg = lightboxModal.querySelector('.lightbox-img');
    const closeBtn = lightboxModal.querySelector('.lightbox-close');

    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt || 'Enlarged image preview';
            overlay.style.display = 'flex';
        });
    });

    const closeLightbox = () => {
        overlay.style.display = 'none';
        lightboxImg.src = '';
    };

    closeBtn.addEventListener('click', closeLightbox);
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeLightbox();
        }
    });

    // Close on pressing the 'Escape' key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});