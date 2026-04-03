import React from "react";
import "./BookAnAppointment.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function BookAnAppointment() {
  return (
    <div className="book-section">
      <div className="book-box">
        <div className="book-content">
          <h2>Schedule a meeting with our team today!</h2>
        </div>

        <div className="book-action">
          <iframe
            src="https://lottie.host/embed/83797e48-8db4-4296-8ad0-a23574598951/On1yLnQ4EY.lottie"
            style={{ border: "none" }}
            title="Booking Animation"
          ></iframe>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=riddhi.rana@exoticinfotech.com&su=Project%20Discussion&body=Hi%2C%20I%20would%20like%20to%20discuss%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="book-btn"
          >
            Book An Appointment
          </a>
        </div>
      </div>
    </div>
  );
}
