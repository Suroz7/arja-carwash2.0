import React, { useEffect, useState } from 'react';
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";
import { format, addDays, startOfWeek, addWeeks, endOfWeek } from 'date-fns';
import './BookedSlots.css';

const BookedSlots = () => {
  const [bookedSlots, setBookedSlots] = useState([]);
  const [weekOffset, setWeekOffset] = useState(0);

  const fetchBookedSlots = async (weekStart, weekEnd) => {
    try {
      const q = query(collection(db, "bookings"), where("date", ">=", weekStart), where("date", "<=", weekEnd));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const bookedTimes = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return new Date(data.date.seconds * 1000);
        });
        setBookedSlots(bookedTimes);
      } else {
        console.log("⚠️ No bookings found in Firestore.");
        setBookedSlots([]); // Clear booked slots if no bookings found
      }
    } catch (error) {
      console.error("❌ Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    const startDate = startOfWeek(addWeeks(new Date(), weekOffset), { weekStartsOn: 0 });
    const endDate = endOfWeek(addWeeks(new Date(), weekOffset), { weekStartsOn: 0 });
    fetchBookedSlots(startDate, endDate);
  }, [weekOffset]);

  const handleWeekChange = (offset) => {
    setWeekOffset(offset);
  };

  const handleBooking = async (date, time) => {
    try {
      const [hour, minute] = time.split(':').map(Number);
      const bookingDate = new Date(date);
      bookingDate.setHours(hour, minute, 0, 0);
      await addDoc(collection(db, "bookings"), { date: bookingDate });
      setBookedSlots([...bookedSlots, bookingDate]);
    } catch (error) {
      console.error("❌ Error booking slot:", error);
    }
  };

  const openingHours = {
    weekday: { start: 16, end: 20 },
    weekend: { start: 12, end: 18 },
  };

  const generateTimeSlots = (day) => {
    const slots = [];
    const { start, end } = day === 0 || day === 6 ? openingHours.weekend : openingHours.weekday;
    for (let hour = start; hour < end; hour++) {
      slots.push(`${hour}:00`);
      slots.push(`${hour}:30`);
    }
    return slots;
  };

  const isPastTime = (date, time) => {
    const [hour, minute] = time.split(':').map(Number);
    const slotDate = new Date(date);
    slotDate.setHours(hour, minute, 0, 0);
    return slotDate < new Date();
  };

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const startDate = startOfWeek(addWeeks(new Date(), weekOffset), { weekStartsOn: 0 });

  return ( <> 
  
    <div className="week-navigation">
      <h2 className="title">Already Booked Times</h2>
        <button onClick={() => handleWeekChange(weekOffset - 1)} disabled={weekOffset === 0}>Previous Week</button>
        <button onClick={() => handleWeekChange(weekOffset + 1)} disabled={weekOffset === 4}>Next Week</button>
      </div>
      <div className="booked-slots-container">
    
      
      <table className="booked-slots-table">
        <thead>
          <tr>
            <th>Time</th>
            {daysOfWeek.map((day, index) => {
              const currentDate = addDays(startDate, index);
              return <th key={index}>{day} ({format(currentDate, 'dd/MM/yyyy')})</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {generateTimeSlots(0).map((time, idx) => (
            <tr key={idx}>
              <td>{time}</td>
              {daysOfWeek.map((day, index) => {
                const currentDate = addDays(startDate, index);
                const isBooked = bookedSlots.some(
                  (bookedDate) =>
                    bookedDate.getDay() === currentDate.getDay() &&
                    format(bookedDate, 'HH:mm') === time
                );
                const isWithinOperatingHours = (day) => {
                  const [hour, minute] = time.split(':').map(Number);
                  const { start, end } = day === 0 || day === 6 ? openingHours.weekend : openingHours.weekday;
                  return hour >= start && hour < end;
                };
                const isPast = isPastTime(currentDate, time);
                return (
                  <td key={index} className={isBooked ? 'booked' : isPast ? 'past' : isWithinOperatingHours(index) ? 'available' : 'unavailable'}>
                    {isBooked ? 'Booked' : isPast ? 'Past' : isWithinOperatingHours(index) ? 'Available' : 'Unavailable'}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div></>
  );
};

export default BookedSlots;
