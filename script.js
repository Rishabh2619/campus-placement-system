// script.js

// Function to validate form fields
function validateForm() {
    const form = document.getElementById('myForm');
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    let valid = true;

    // Validate name
    if (name === '') {
        alert('Name must be filled out');
        valid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Invalid email address');
        valid = false;
    }

    return valid;
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission behavior

    if (validateForm()) {
        // Proceed with form submission logic
        alert('Form submitted successfully!');
        // You can add your submission logic here (e.g., AJAX call)
    }
}

// Add event listener for form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', handleFormSubmission);
});
