import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className=" footer">
        <div className="row">
          <div className="col-lg-2 ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPPWcGFIcjLDBxbekDJiEhqetNPaZkWueHw&usqp=CAU"
              alt="logo"
            />
          </div>
          <div className="col-lg-4 ">
            <h5>About Us</h5>
            <p className="NavLink">
              Founded over 20 years ago, Photography Day Online Shope is one of
              the oldest sites offering less then proper price.Read More
            </p>
          </div>

          <div className="col-lg-2 ">
            <h5>Follow Us</h5>
            <p>
              {" "}
              <Link className="NavLink" to="/contact">
                Facebook
              </Link>{" "}
            </p>
            <p>
              {" "}
              <Link className="NavLink" to="/contact">
                Twitter
              </Link>{" "}
            </p>
            <p>
              {" "}
              <Link className="NavLink" to="/contact">
                Linkedin
              </Link>{" "}
            </p>
            <p>
              {" "}
              <Link className="NavLink" to="/contact">
                Youtube
              </Link>{" "}
            </p>
          </div>
          <div className="col-lg-4 last-footer ">
            <h5>Contact Us</h5>
            <p className="NavLink">
              Location:Sylhet,Bangladesh <br />
              Mobile Number:+088645747474 <br />
              Shop Contact:+088645747474 <br />
              FAX Number:+0886458774 <br />
              Email Address:info@amc.edu.bd
            </p>
          </div>
        </div>
      </div>
      <p className="last-fotter">
        © Copyright by AMC - all rights reserved. Developed by Arif.
      </p>
    </div>
  );
};

export default Footer;
