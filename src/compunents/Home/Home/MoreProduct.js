import React, { useEffect, useState } from "react";

import UseServices from "./UseServices";

const MoreProduct = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h4>you can see all products</h4>
      <div>
        {services.map((service) => (
          <UseServices key={service.id} service={service}></UseServices>
        ))}
      </div>
    </div>
  );
};

export default MoreProduct;
