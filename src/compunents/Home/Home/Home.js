import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Review from "./Review";

import Services from "./Services";
import TopSeeling from "./TopSeeling";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const newServices = services?.slice(0, 6);
  return (
    <div className="home-border">
      <Banner></Banner>

      <h1 className="p-4"> Different Types of Cameras</h1>
      <div>
        {newServices.map((service) => (
          <Services key={service._id} service={service}></Services>
        ))}
      </div>
      <Button className=" all-btn  mb-4 p-1 text-white">
        {" "}
        More products---
      </Button>
      <TopSeeling></TopSeeling>
      <Review></Review>
    </div>
  );
};

export default Home;
