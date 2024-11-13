import React from "react";
import "./Contact.css";

function contact() {
  return (
    <div className="Contact">
      <div className="header-Contact">
        <h1>Contact Us</h1>
        <div className="Rectangle-16-Contact"></div>
        <p>
          We are here to help and answer any question you might here. We look
          forward to hearing from you.
        </p>
      </div>
      <div className="contact">
        <div className="callUs">
          <img src="" alt="" />
          <h3>Call Us</h3>
          <p>Support: +91 1234567890</p>
        </div>
        <div className="img1">
        </div>
        <div className="img2">
        </div>
        <div className="writeUs">
          <img src="" alt="" />
          <h3>Write Us</h3>
          <p>contact.us@befog.in</p>
        </div>
      </div>
      <h2>Get in touch</h2>
      <div className="touch">
        <div className="contact-img">
          <img src="https://images.unsplash.com/photo-1730724620244-40d6e978acd8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D" alt="Contact Image" />
        </div>
        <div className="contact-details">
          <div className="single-line">
            <form>
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Name" />
            </form>
            <form>
            <label htmlFor="">Phone Number</label>
              <input type="tel" placeholder="Phone Number" />
            </form>
          </div>
          <form>
          <label htmlFor="">Email Address</label>
            <input type="email" placeholder="Email Address" />
          </form>
          <form>
          <label htmlFor="">Message</label>
            <textarea placeholder="Message"></textarea>
          </form>
          <button>SEND MESSAGE</button>
        </div>
      </div>
    </div>
  );
}

export default contact;
