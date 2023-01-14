import { Component } from "react";
import { Container, Alert, Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Login.css";

export class Login extends Component {
  render() {
    return (
      <div className="loginBody">
        <Container className="text-center  ">
          <div className="row  p-4">
            <div className="col-md-6 p-5 headingdiv mt-5">
              <div className="loginheading mt-5">
                {/* Employee Attendance <br />
                and <br />
                Leave Management */}
                Let's get started!
              </div>
            </div>

            <div className="loginformBody col-md-5 ">
              <div className="row  ">
                <div className="row ">
                  <h3 className="loginform">Login</h3>
                </div>
                <div className="row ">
                  <div className="col-md-12">
                    <form onclick="return validateForm()" action="./">
                      <div className="row mb-1">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="form6Example1">
                            {" "}
                          </label>
                          <input
                            type="text"
                            id="username"
                            className="form-control"
                            pattern="[a-z,A-Z]{4,12}"
                            placeholder="Enter Username"
                            required
                          />
                          <pre id="nameError" className="error" />
                        </div>
                        <div className="form-outline">
                          <label
                            className="form-label"
                            htmlFor="form6Example2"></label>
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter Password"
                            required
                          />
                          <pre id="passError" className="error" />
                        </div>
                        <div className="form-outline mt-2 mb-2">
                          <div>
                            <button type="submit" className="loginBtn">
                              Login
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="signUpLink">
                  <Link to="/sign-up">
                    {" "}
                    <p type="reset" className="   ">
                      or Sign Up
                    </p>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
