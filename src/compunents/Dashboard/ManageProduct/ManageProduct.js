import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ".//ManageProduct.css";

const ManageProduct = () => {
  const [camaras, setCamaras] = useState([]);
  useEffect(() => {
    const uri = "https://vast-fortress-12735.herokuapp.com/services";
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        setCamaras(data);
      });
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "are you sure, you want to delete your product!!!"
    );
    if (proceed) {
      fetch(`https://vast-fortress-12735.herokuapp.com/services/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingCamaras = camaras?.filter(
              (camara) => camara._id !== id
            );
            setCamaras(remainingCamaras);
          }
        });
    }
  };
  return (
    <div className="products-style">
      <h1 className="text-center"> Manage Products</h1>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {camaras.map((camara) => (
            <Col key={camara._id}>
              <Card className="products-card-style">
                <Card.Img
                  variant="top"
                  src={camara.img}
                  className="products-card-img"
                />
                <Card.Body>
                  <Card.Title>{camara.name}</Card.Title>
                  <Card.Text>{camara.description?.slice(0, 170)}...</Card.Text>
                  <Card.Text>Price: ${camara.price}</Card.Text>

                  <button
                    onClick={() => handleDelete(camara?._id)}
                    className="products-card-button"
                  >
                    delete
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ManageProduct;
