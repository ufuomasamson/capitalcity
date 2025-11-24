// EmailJS Configuration
// This file contains your EmailJS configuration
// IMPORTANT: Replace these values with your actual EmailJS credentials

// Initialize EmailJS when the page loads
document.addEventListener('DOMContentLoaded', function() {
    if (typeof emailjs !== 'undefined') {
        // Replace 'YOUR_PUBLIC_KEY' with your EmailJS Public Key
        // You can find this in your EmailJS Dashboard > Account > API Keys
        emailjs.init('qy-cykar2zy7AjmOf');
        
        // Update the service and template IDs in script.js
        // Service ID: Found in EmailJS Dashboard > Email Services
        // Template ID: Found in EmailJS Dashboard > Email Templates
    }
});

