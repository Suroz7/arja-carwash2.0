const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Create a transporter for sending the email (e.g., using Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

exports.sendBookingConfirmationEmail = functions.firestore
  .document('bookings/{bookingId}')
  .onCreate(async (snap, context) => {
    const booking = snap.data();
    const { name, phone, service, date } = booking;

    // Format the email content
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'recipient-email@example.com', // or booking.email
      subject: 'Booking Confirmation - Car Wash',
      text: `Hello ${name},\n\nYour booking for a ${service} has been confirmed.\n\nDetails:\n- Name: ${name}\n- Phone: ${phone}\n- Service: ${service}\n- Date: ${date.toDate().toString()}\n\nThank you for choosing our service!`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  });
