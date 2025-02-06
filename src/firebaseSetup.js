import { db } from './firebase';

// Create a new booking
const createBooking = (userId, serviceId, date, time, status = 'pending', notes = '') => {
  const bookingRef = db.collection('bookings').doc();
  const bookingData = {
    bookingId: bookingRef.id,
    userId,
    serviceId,
    date,
    time,
    status,
    notes
  };

  return bookingRef.set(bookingData)
    .then(() => {
      console.log('Booking created successfully!');
    })
    .catch((error) => {
      console.error('Error creating booking:', error);
    });
};

// Listen for changes in bookings
const listenForBookings = () => {
  db.collection('bookings').onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        console.log('New booking:', change.doc.data());
      } else if (change.type === 'modified') {
        console.log('Booking updated:', change.doc.data());
      } else if (change.type === 'removed') {
        console.log('Booking deleted:', change.doc.data());
      }
    });
  });
};

export { createBooking, listenForBookings };
