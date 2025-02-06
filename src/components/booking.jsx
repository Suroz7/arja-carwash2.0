import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/booking.css"; // Import the new CSS file
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc, deleteDoc, query, where, Timestamp } from "firebase/firestore";
import BookedSlots from "./BookedSlots";
import Footer from "./footer"; // Import the Footer component

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState(""); // New state for email
  const [bookedSlots, setBookedSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cancelName, setCancelName] = useState("");
  const [cancelPhone, setCancelPhone] = useState("");
  const [cancelEmail, setCancelEmail] = useState("");

  // 🔥 Fetch booked slots from Firestore
  useEffect(() => {
    const fetchBookedSlots = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "bookings"));
        
        if (!querySnapshot.empty) {
          const bookedTimes = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            
            // 🔥 Convert Firestore timestamp to JavaScript Date
            const bookedDate = new Date(data.date.seconds * 1000);
  
            console.log("🔥 Converted Booked Date:", bookedDate); // Debugging
  
            return bookedDate;
          });
  
          setBookedSlots(bookedTimes);
        } else {
          console.log("⚠️ No bookings found in Firestore.");
        }
      } catch (error) {
        console.error("❌ Error fetching bookings:", error);
      }
    };
  
    fetchBookedSlots();
  }, []);
  
  // 🔥 Check if date is already booked
  const isBooked = (date) => {
    return bookedSlots.some((bookedDate) => {
      return (
        bookedDate.getTime() === date.getTime()
      );
    });
  };

  const isPastTime = (date) => {
    return date < new Date();
  };

  // 🔥 Filter available times based on the day of the week
  const filterTime = (time) => {
    const date = new Date(time);
    const day = date.getDay();
    const hours = date.getHours();

    if (day === 0 || day === 6) {
      // Weekend: 12:00 - 18:00
      return hours >= 12 && hours < 18;
    } else {
      // Weekday: 16:00 - 20:00
      return hours >= 16 && hours < 20;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Check if the selected date and time is already booked or in the past
    if (isBooked(selectedDate) || isPastTime(selectedDate)) {
      alert("The selected time is either already booked or in the past. Please choose a different time.");
      setLoading(false);
      return;
    }

    try {
      // Save booking in Firestore
      await addDoc(collection(db, "bookings"), {
        service: selectedService,
        date: Timestamp.fromDate(selectedDate), // Ensure this is a Firestore Timestamp
        name: customerName,
        phone: customerPhone,
        email: customerEmail, // Save email to Firestore
        createdAt: new Date(),
      });

      alert("Booking Confirmed!");
      setSelectedService("");
      setSelectedDate(null);
      setCustomerName("");
      setCustomerPhone("");
      setCustomerEmail(""); // Reset email state
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Failed to book, please try again.");
    }

    setLoading(false);
  };

  const handleCancel = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const q = query(collection(db, "bookings"), where("name", "==", cancelName), where("phone", "==", cancelPhone), where("email", "==", cancelEmail));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });
        alert("Booking Cancelled!");
        setCancelName("");
        setCancelPhone("");
        setCancelEmail("");
      } else {
        alert("Unable to cancel booking because the details you entered are incorrect.");
      }
    } catch (error) {
      console.error("Error cancelling booking:", error);
      alert("Failed to cancel booking, please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Service Selection */}<h1 className="text-3xl font-bold mb-6">Book a Car Wash</h1>
        <label className="block mb-2 font-medium">Choose a Service</label>
        <select
          className="w-full p-2 border rounded mb-4"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          required
        >
          <option value="">Select Service</option>
          <option value="basic">Basic Wash</option>
          <option value="premium">Premium Wash</option>
          <option value="deluxe">Deluxe Wash</option>
        </select>

        {/* Date Picker */}
        <label className="block mb-2 font-medium">Select Date & Time</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          showTimeSelect
          dateFormat="Pp"
          className="w-full p-2 border rounded mb-4"
          filterDate={(date) => !isBooked(date) && !isPastTime(date)} // 🔥 Now correctly disables booked and past slots
          filterTime={filterTime} // 🔥 Restrict booking times
          required
        />

        {/* Customer Info */}
        <label className="block mb-2 font-medium">Your Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />

        <label className="block mb-2 font-medium">Phone Number</label>
        <input
          type="tel"
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your phone number"
          value={customerPhone}
          onChange={(e) => setCustomerPhone(e.target.value)}
          required
        />

        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your email"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Booking..." : "Confirm Booking"}
        </button>
      </form>

      

      {/* Booked Slots */}
      <BookedSlots bookedSlots={bookedSlots} className="booked-slots" />
{/* Cancel Booking */}
<form onSubmit={handleCancel} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-6">
        <h2 className="text-2xl font-bold mb-4 cancel-booking">Cancel Booking</h2>
        <p className="mb-4 text-gray-600 cancel-booking-info">
          Please enter the same information you used to book your appointment to successfully cancel your booking. If you encounter any issues, please contact customer support.
        </p>

        <label className="block mb-2 font-medium">Your Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your name"
          value={cancelName}
          onChange={(e) => setCancelName(e.target.value)}
          required
        />

        <label className="block mb-2 font-medium">Phone Number</label>
        <input
          type="tel"
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your phone number"
          value={cancelPhone}
          onChange={(e) => setCancelPhone(e.target.value)}
          required
        />

        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter your email"
          value={cancelEmail}
          onChange={(e) => setCancelEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-red-600 text-white p-3 rounded hover:bg-red-700"
          disabled={loading}
        >
          {loading ? "Cancelling..." : "Cancel Booking"}
        </button>
      </form>
      <Footer /> {/* Position the Footer component at the bottom */}
    </div>
  );
}

