// email.js - EmailJS configuration
const serviceID = 'service_n5cvsup'; 
const templateID = 'template_v1gc5te'; 
const publicKey = '2OZVRrC172FSE2hM4';

if (typeof emailjs !== 'undefined') {
    emailjs.init({
        publicKey: publicKey
    });
}