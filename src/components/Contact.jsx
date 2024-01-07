import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const emailAddress = "av95766@gmail.com";
  const phoneNumber = "9576630507";

  const handleEmailButtonClick = () => {
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  };

  const handleCallButtonClick = () => {
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };

  return (
    <>
      <div className="contact-container">
        <p>
          If You are Interested In My Profile You Can Email Or Directly Contact
          Me
        </p>
        <button onClick={handleEmailButtonClick}> <MdMailOutline /> Email Me</button>
        <button onClick={handleCallButtonClick}>
          <IoCallOutline /> Call Me
        </button>
      
        <div className="additional-details">
          <h5>Address</h5>
          <hr />
          <li>Patna,Bihar(803212)</li>
          <li>Mail <MdMailOutline /> - Av95766@gmail.com</li>
          <li>Call <IoCallOutline /> - 9576630507</li>
          <li>WhatsApp <RiMessengerLine /> - 9576630507</li>
          <li>Telegram <FaTelegram /> - 9576630507</li>
        </div>
      </div>
    </>
  );
}
