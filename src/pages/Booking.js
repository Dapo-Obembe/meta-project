import React from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import "../assets/css/booking.css";

const Booking = () => {
  const navigate = useNavigate();

  return (
    <main className="booking">
      <h1>Booking Page</h1>
      <section className="booking__form">
        <BookingForm navigate={navigate} />
      </section>
    </main>
  );
};

export default Booking;
