import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

import UseServices from "./UseServices";

const MoreProduct = () => {
  const [services, setServices] = useState([]);
   const { isLoading, setLoading } = useAuth();
  useEffect(() => {
    fetch("https://vast-fortress-12735.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [setLoading]);
  if (isLoading) {
    return (
      <div className="text-center spiner-style">
        <Spinner animation="grow" variant="danger" />
      </div>
    );
  }
  return (
    <div>
      <h3 className="p-3">  All Products are available here  </h3>
      <div>
        {services.map((service) => (
          <UseServices key={service.id} service={service}></UseServices>
        ))}
      </div>
    </div>
  );
};

export default MoreProduct;
