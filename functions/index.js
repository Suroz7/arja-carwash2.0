const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// Import the email sending function
const { sendBookingConfirmationEmail } = require('./email');

// Expose the email function (onCreate trigger) through Firebase Cloud Functions
exports.sendBookingConfirmationEmail = sendBookingConfirmationEmail;
