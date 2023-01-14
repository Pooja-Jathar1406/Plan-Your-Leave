import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/SignUp.css";

export function SignUp() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className="signUpBody">
      <Container>
        <div className="row justify-content-center "></div>
        <Row className=" justify-content-center mt-5  ">
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="m-5 mt-2"
            action="/login">
            <Row className="mb-3 justify-content-center ">
              <Col md={5} className="signupContent  p-5 pt-4">
                <div className="row ">
                  <h3 className="loginform">Sign Up</h3>
                </div>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustom01"
                  className="mb-3">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    pattern="[a-z,A-Z]{3,20}"
                    name="fname"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please Enter Valid Name
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustom02"
                  className="mb-3">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    pattern="[a-z,A-Z]{3,20}"
                    name="lname"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please Enter Valid Name
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustom06"
                  className="mb-3">
                  <Form.Label>Employee ID</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    min={1}
                    placeholder="Employee ID"
                    pattern="[a-z,A-Z]{3,20}"
                    name="Emp_ID"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please Enter Valid Employee ID
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustomUsername"
                  className="mb-3">
                  <Form.Label>Mobile Number</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      +91
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Enter Mobile Number"
                      aria-describedby="inputGroupPrepend"
                      required
                      pattern="[7-9]{1}[0-9]{9}$"
                      name="mobile"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Enter Valid Mobile Number
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustom04"
                  className="mb-3">
                  <Form.Label>Enter Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email Address"
                    required
                    pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$"
                    name="email"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter Valid Email address
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustom03"
                  className="mb-3">
                  <Form.Label>Set password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" className="SignUpbtn">
                  Submit form
                </Button>
              </Col>
            </Row>

            {/* {AddLibrary(
                'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')} */}
          </Form>
        </Row>
      </Container>
    </div>
  );
}

// render(<SignUpForm />);
