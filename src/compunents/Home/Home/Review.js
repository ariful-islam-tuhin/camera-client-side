import React from "react";
import { Card } from "react-bootstrap";

const Review = () => {
  return (
    <div>
      <h3 className=" mt-4 p-4"> Review about this page </h3>

      <div className="row bg-dark p-4 m-4">
        <Card style={{ width: "18rem", margin: "0 auto" }}>
          <Card.Body>
            <Card.Title>Review</Card.Title>

            <Card.Text></Card.Text>
            <Card.Link href="#">Link</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "0 auto" }}>
          <Card.Body>
            <Card.Title>Review</Card.Title>

            <Card.Text></Card.Text>
            <Card.Link href="#">Link</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "0 auto" }}>
          <Card.Body>
            <Card.Title>Review</Card.Title>

            <Card.Text></Card.Text>
            <Card.Link href="#">Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Review;
