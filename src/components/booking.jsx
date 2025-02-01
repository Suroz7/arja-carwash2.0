import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [bookedSlots, setBookedSlots] = useState([]);
  const [loading, setLoading] = useState(false);

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
        bookedDate.getFullYear() === date.getFullYear() &&
        bookedDate.getMonth() === date.getMonth() &&
        bookedDate.getDate() === date.getDate() &&
        bookedDate.getHours() === date.getHours() &&
        bookedDate.getMinutes() === date.getMinutes()
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Save booking in Firestore
      const docRef = await addDoc(collection(db, "bookings"), {
        service: selectedService,
        date: selectedDate,
        name: customerName,
        phone: customerPhone,
        createdAt: new Date(),
      });

      alert("Booking Confirmed!");
      setSelectedService("");
      setSelectedDate(null);
      setCustomerName("");
      setCustomerPhone("");
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Failed to book, please try again.");
    }

    setLoading(false);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Book a Car Wash</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Service Selection */}
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
  filterDate={(date) => !isBooked(date)} // 🔥 Now correctly disables booked slots
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Booking..." : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
}
