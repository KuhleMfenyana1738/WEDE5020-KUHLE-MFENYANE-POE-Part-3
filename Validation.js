/**
 * validation.js - Handles client-side form validation across contact/enquiry pages
 */
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            let isValid = true;

            // Validate Email fields
            const emailInputs = form.querySelectorAll('input[type="email"]');
            emailInputs.forEach(input => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value.trim())) {
                    showError(input, 'Please enter a valid email address.');
                    isValid = false;
                } else {
                    clearError(input);
                }
            });

            // Validate Phone numbers (South African format check or general requirement)
            const phoneInputs = form.querySelectorAll('input[type="tel"]');
            phoneInputs.forEach(input => {
                const phoneVal = input.value.trim();
                // Basic check for digits/spaces/plus sign
                if (phoneVal && phoneVal.length < 10) {
                    showError(input, 'Please enter a valid phone number.');
                    isValid = false;
                } else {
                    clearError(input);
                }
            });

            // Validate required text/textarea fields
            const requiredInputs = form.querySelectorAll('[required]');
            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    showError(input, 'This field is required.');
                    isValid = false;
                } else if (input.type !== 'email' && input.type !== 'tel') {
                    clearError(input);
                }
            });

            if (!isValid) {
                e.preventDefault(); // Stop form submission if validation fails
            }
        });
    });

    function showError(inputElement, message) {
        inputElement.classList.add('error');
        
        // Check if an error message container already exists next to the input
        let errorMsg = inputElement.parentElement.querySelector('.error-message');
        if (!errorMsg) {
            errorMsg = document.createElement('span');
            errorMsg.className = 'error-message';
            errorMsg.style.color = '#e74c3c';
            errorMsg.style.fontSize = '0.85rem';
            errorMsg.style.marginTop = '4px';
            errorMsg.style.display = 'block';
            inputElement.parentElement.appendChild(errorMsg);
        }
        errorMsg.textContent = message;
    }

    function clearError(inputElement) {
        inputElement.classList.remove('error');
        const errorMsg = inputElement.parentElement.querySelector('.error-message');
        if (errorMsg) {
            errorMsg.remove();
        }
    }
});

/**
 * validation.js - Handles client-side form validation for contact and enquiry pages
 */
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    if (forms.length === 0) return;

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            let isValid = true;

            // 1. Validate Email fields
            const emailInputs = form.querySelectorAll('input[type="email"]');
            emailInputs.forEach(input => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value.trim())) {
                    showError(input, 'Please enter a valid email address.');
                    isValid = false;
                } else {
                    clearError(input);
                }
            });

            // 2. Validate Phone number fields
            const phoneInputs = form.querySelectorAll('input[type="tel"]');
            phoneInputs.forEach(input => {
                const phoneVal = input.value.trim();
                if (phoneVal && phoneVal.length < 10) {
                    showError(input, 'Please enter a valid phone number (at least 10 digits).');
                    isValid = false;
                } else {
                    clearError(input);
                }
            });

            // 3. Validate general required fields
            const requiredInputs = form.querySelectorAll('[required]');
            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    showError(input, 'This field is required.');
                    isValid = false;
                } else if (input.type !== 'email' && input.type !== 'tel') {
                    clearError(input);
                }
            });

            // Block submission if any validation checks fail
            if (!isValid) {
                e.preventDefault();
            }
        });
    });

    function showError(inputElement, message) {
        inputElement.classList.add('error');
        
        let errorMsg = inputElement.parentElement.querySelector('.error-message');
        if (!errorMsg) {
            errorMsg = document.createElement('span');
            errorMsg.className = 'error-message';
            inputElement.parentElement.appendChild(errorMsg);
        }
        errorMsg.textContent = message;
    }

    function clearError(inputElement) {
        inputElement.classList.remove('error');
        const errorMsg = inputElement.parentElement.querySelector('.error-message');
        if (errorMsg) {
            errorMsg.remove();
        }
    }
});

/**
 * validation.js - Handles client-side form validation for enquiry and contact forms
 */
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    if (forms.length === 0) return;

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            let isValid = true;

            // 1. Validate Email fields
            const emailInputs = form.querySelectorAll('input[type="email"]');
            emailInputs.forEach(input => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value.trim())) {
                    showError(input, 'Please enter a valid email address.');
                    isValid = false;
                } else {
                    clearError(input);
                }
            });

            // 2. Validate Phone number fields
            const phoneInputs = form.querySelectorAll('input[type="tel"]');
            phoneInputs.forEach(input => {
                const phoneVal = input.value.trim();
                if (phoneVal && phoneVal.length < 10) {
                    showError(input, 'Please enter a valid phone number (at least 10 digits).');
                    isValid = false;
                } else {
                    clearError(input);
                }
            });

            // 3. Validate general required fields (inputs, textareas, selects)
            const requiredInputs = form.querySelectorAll('[required]');
            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    showError(input, 'This field is required.');
                    isValid = false;
                } else if (input.type !== 'email' && input.type !== 'tel') {
                    clearError(input);
                }
            });

            // Block form submission if any validation checks fail
            if (!isValid) {
                e.preventDefault();
            }
        });
    });

    function showError(inputElement, message) {
        inputElement.classList.add('error');
        
        let errorMsg = inputElement.parentElement.querySelector('.error-message');
        if (!errorMsg) {
            errorMsg = document.createElement('span');
            errorMsg.className = 'error-message';
            inputElement.parentElement.appendChild(errorMsg);
        }
        errorMsg.textContent = message;
    }

    function clearError(inputElement) {
        inputElement.classList.remove('error');
        const errorMsg = inputElement.parentElement.querySelector('.error-message');
        if (errorMsg) {
            errorMsg.remove();
        }
    }
});

/**
 * validation.js - Client-side form validation for contact and enquiry forms
 */
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    if (forms.length === 0) return;

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            let isValid = true;

            // 1. Validate Email fields
            const emailInputs = form.querySelectorAll('input[type="email"]');
            emailInputs.forEach(input => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value.trim())) {
                    showError(input, 'Please enter a valid email address.');
                    isValid = false;
                } else {
                    clearError(input);
                }
            });

            // 2. Validate Phone number fields
            const phoneInputs = form.querySelectorAll('input[type="tel"]');
            phoneInputs.forEach(input => {
                const phoneVal = input.value.trim();
                if (phoneVal && phoneVal.length < 10) {
                    showError(input, 'Please enter a valid phone number (at least 10 digits).');
                    isValid = false;
                } else {
                    clearError(input);
                }
            });

            // 3. Validate general required inputs, selects, and textareas
            const requiredInputs = form.querySelectorAll('[required]');
            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    showError(input, 'This field is required.');
                    isValid = false;
                } else if (input.type !== 'email' && input.type !== 'tel') {
                    clearError(input);
                }
            });

            // Prevent form submission if validation fails
            if (!isValid) {
                e.preventDefault();
            }
        });
    });

    function showError(inputElement, message) {
        inputElement.classList.add('error');
        
        let errorMsg = inputElement.parentElement.querySelector('.error-message');
        if (!errorMsg) {
            errorMsg = document.createElement('span');
            errorMsg.className = 'error-message';
            inputElement.parentElement.appendChild(errorMsg);
        }
        errorMsg.textContent = message;
    }

    function clearError(inputElement) {
        inputElement.classList.remove('error');
        const errorMsg = inputElement.parentElement.querySelector('.error-message');
        if (errorMsg) {
            errorMsg.remove();
        }
    }
}); 

/**
 * validation.js - Client-side form validation for contact and enquiry forms
 */
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    if (forms.length === 0) return;

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            let isValid = true;

            // 1. Validate Email fields
            const emailInputs = form.querySelectorAll('input[type="email"]');
            emailInputs.forEach(input => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value.trim())) {
                    showError(input, 'Please enter a valid email address.');
                    isValid = false;
                } else {
                    clearError(input);
                }
            });

            // 2. Validate Phone number fields
            const phoneInputs = form.querySelectorAll('input[type="tel"]');
            phoneInputs.forEach(input => {
                const phoneVal = input.value.trim();
                if (phoneVal && phoneVal.length < 10) {
                    showError(input, 'Please enter a valid phone number (at least 10 digits).');
                    isValid = false;
                } else {
                    clearError(input);
                }
            });

            // 3. Validate general required inputs, selects, and textareas
            const requiredInputs = form.querySelectorAll('[required]');
            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    showError(input, 'This field is required.');
                    isValid = false;
                } else if (input.type !== 'email' && input.type !== 'tel') {
                    clearError(input);
                }
            });

            // Prevent form submission if any validation checks fail
            if (!isValid) {
                e.preventDefault();
            }
        });
    });

    function showError(inputElement, message) {
        inputElement.classList.add('error');
        
        let errorMsg = inputElement.parentElement.querySelector('.error-message');
        if (!errorMsg) {
            errorMsg = document.createElement('span');
            errorMsg.className = 'error-message';
            inputElement.parentElement.appendChild(errorMsg);
        }
        errorMsg.textContent = message;
    }

    function clearError(inputElement) {
        inputElement.classList.remove('error');
        const errorMsg = inputElement.parentElement.querySelector('.error-message');
        if (errorMsg) {
            errorMsg.remove();
        }
    }
});