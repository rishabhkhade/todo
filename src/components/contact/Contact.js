import React from "react";
import "./Contact.scss";
import { MdLocalPhone } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

function Contact() {
  return (
    <>
      <div class="parent parent-contact">
        <div class="container cont-contact">
          <div class="left">
            <h2>
              Get <span>in Touch</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni.
            </p>
            <div class="form">
              <p>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone" />
              </p>
              <input type="text" placeholder="Email" />
              <textarea name="" id="" placeholder="Message"></textarea>

              <a className="btn" style={{ width: "fit-content" }}>
                Send Message
              </a>
            </div>
          </div>
          <div class="right">
            <div class="phone-wrap">
              <span>
                <MdLocalPhone />
              </span>
              <div class="phone">
                <span>Phone</span>
                <h5>+91 9865782645</h5>
              </div>
            </div>

            <div class="phone-wrap">
              <span>
                <FaEnvelope />
              </span>
              <div class="phone">
                <span>Mail</span>
                <h5>Lorem, ipsum dolor.</h5>
              </div>
            </div>

            <div class="phone-wrap">
              <span>
                <MdLocationOn />
              </span>
              <div class="phone">
                <span>Address</span>
                <h5>Lorem ipsum dolor sit amet.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
