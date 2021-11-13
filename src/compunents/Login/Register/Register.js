import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  // const {} = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleRegiSubmit = (e) => {
    if (loginData.password !== loginData.confpassword) {
      alert("Your password did not match");
      return;
    }
  };
  return (
    <div>
      <Container className="py-5">
        <Row>
          <Col xs={12} md={6}>
            <Form
              className="mx-auto pt-4 pb-5 w-75"
              onSubmit={handleRegiSubmit}
            >
              <h2 className="text-center">REGISTER</h2>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>NAME</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onBlur={handleOnBlur}
                  placeholder="Your Full Name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onBlur={handleOnBlur}
                  placeholder="Email Address"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>PASSWORD</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  placeholder="..........."
                  required
                />
              </Form.Group>
              {/* <span>{error || regiError}</span> */}
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>CONFIRM PASSWORD</Form.Label>
                <Form.Control
                  type="password"
                  name="confpassword"
                  placeholder="............"
                  onBlur={handleOnBlur}
                  required
                />
              </Form.Group>
              <div className="d-grid gap-2 my-4">
                <Button variant="secondary" type="submit">
                  Create Account
                </Button>
              </div>
              <div className="">
                <span>already have an account?</span>
                <Link to="/login"> signin</Link>
              </div>
            </Form>
          </Col>
          <Col xs={12} md={6} className="mb-5">
            <h2 className="text-center fw-bold mt-4 ">
              Photography day Online Shope
            </h2>
            <img
              className="mt-4"
              src="https://dronenerds.s3-us-west-2.amazonaws.com/webimages/djifpv.gif"
              alt=""
            />
          </Col>
        </Row>

        {/* <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> */}
      </Container>
    </div>
  );
};

export default Register;
