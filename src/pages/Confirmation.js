import React from "react";

const Confirmation = ({
  name,
  date,
  time,
  guests,
  occasion = false,
  table = false,
  request = false,
}) => {
  return (
    <main
      style={{ minHeight: "300px", display: "flex", justifyContent: "center" }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          width: "70%",
          margin: "0 auto",
        }}
      >
        <h1>Thank you for your booking, {name}!</h1>
        <p>
          We confirm your reservation for {date} at {time} for {guests}{" "}
          {guests === 1 ? "guest" : "guests"}.
        </p>
        {occasion && (
          <p>
            We noticed that you want to celebrate{" "}
            {occasion === "birthday" ? "a" : "an"} {occasion}. Thank you for
            your trust in us, we will handle your request with priority!{" "}
          </p>
        )}
        {table && (
          <p>
            Since you expressed the wish to sit {table} we will accomodate to
            your request.
          </p>
        )}
        {request && (
          <p>
            You also sent some specific message. Our team will definetely
            consider your message. In case of necessity we will send you an
            email.
          </p>
        )}
      </section>
    </main>
  );
};

export default Confirmation;
