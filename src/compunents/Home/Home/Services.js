import React from "react";
import { Link } from "react-router-dom";

const Services = (props) => {
  const { name, price, description, img, _id } = props.service;
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 p-4 mb-3">
          <h3 className="text-primary">{name}</h3>
          <h3 className="text-warning">{price}/-</h3>
          <p> {description}</p>
        </div>
        <div className="col-lg-6 p-4 mb-3 ">
          <img className="img-fluid" src={img} alt="img" />
          <Link to={`/placeorder/${_id}`}>
            <button className="all-btn p-1 m-3">Order Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
