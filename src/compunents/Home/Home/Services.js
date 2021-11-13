import Button from "@restart/ui/esm/Button";
import React from "react";

const Services = (props) => {
  const { name, price, desc, picture } = props.service;
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 p-4 mb-3">
          <h3 className="text-primary">{name}</h3>
          <h3 className="text-warning">{price}/-</h3>
          <p> {desc}</p>
        </div>
        <div className="col-lg-6 p-4 mb-3 ">
          <img className="img-fluid" src={picture} alt="img" />
          <Button className="all-btn p-1 m-3">Order now</Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
