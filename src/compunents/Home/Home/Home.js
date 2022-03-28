import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Review from "./Review";
import { Spinner } from "react-bootstrap";
import Services from "./Services";
import TopSeeling from "./TopSeeling";
import useAuth from "../../../hooks/useAuth";

const Home = () => {
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
