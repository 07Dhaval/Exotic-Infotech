import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "918511624907";
  const message = "Hello! I would like to know more about your services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-wrapper"
    >
      <svg
        viewBox="0 0 64 64"
        className="wa-icon"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="premiumGreen" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#88c722" />
            <stop offset="60%" stopColor="#88c722" />
            <stop offset="100%" stopColor="#88c722" />
          </radialGradient>

          <linearGradient id="innerShine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        <circle cx="32" cy="32" r="30" fill="url(#premiumGreen)" />

        <circle cx="24" cy="24" r="20" fill="url(#innerShine)" opacity="0.4" />

        <path
          fill="#fff"
          d="M32 16c-8.837 0-16 7.163-16 16 0 2.837.75 5.5 2.05 7.8L16 48l8.4-2.2A15.93 15.93 0 0032 48c8.837 0 16-7.163 16-16S40.837 16 32 16zm0 29.2c-2.5 0-4.95-.7-7.05-2l-.5-.3-5 1.3 1.3-4.9-.3-.5c-1.3-2.1-2-4.55-2-7.05 0-7.6 6.2-13.8 13.8-13.8s13.8 6.2 13.8 13.8-6.2 13.8-13.8 13.8zm7.6-10.3c-.4-.2-2.3-1.1-2.7-1.2-.4-.2-.6-.2-.9.2s-1 1.2-1.2 1.4c-.2.2-.4.3-.8.1-2.3-1.1-3.8-3.4-4-3.8-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.3.3-.4.4-.7.1-.3 0-.5 0-.7-.1-.2-.9-2.2-1.3-3-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1 .4-.3.3-1.3 1.2-1.3 2.9 0 1.7 1.3 3.3 1.5 3.5.2.2 2.5 3.9 6.1 5.3 1.9.8 2.6.9 3.5.8.5-.1 1.5-.6 1.7-1.3.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
