import React, { useState } from "react";
import "../assets/css/booking-page.css";

function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function pickDate(e) {
    e.preventDefault();
    setDate(e.target.value);
    console.log("picked date");
  }
  return (
    <>
      <section className="form">
        <div className="form__container">
          <h1>Book a Table</h1>
          <p>Use the form below to book a table with us.</p>
          <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={pickDate} />
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time "
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion">
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
            <input
              type="submit"
              id="submitBtn"
              value="Make Your reservation"
            ></input>
          </form>
        </div>
      </section>
    </>
  );
}

export default BookingForm;
