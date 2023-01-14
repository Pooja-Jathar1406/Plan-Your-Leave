import { Component } from "react";
import { Container, Alert, Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer   footerpadding">
          <div className="container">
            <div className="row">
              <div className="footer-col">
                <h4>Company</h4>
                <ul>
                  <li>
                    <Link to="/about-us">
                      <a href="#">About Us</a>
                    </Link>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Get Help</h4>
                <ul>
                  <li>
                    <a href="#">FAQ</a>{" "}
                  </li>
                  <li>
                    <Link to="/contact-us">
                      <a href="./ContactUs.html" target="_blank">
                        Contact Us
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Policies</h4>
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              {/* <div className="footer-col">
                <h4>Follow us</h4>
                <div className="Social-links" />
                <a href="https://www.facebook.com/" target="_blank">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://twitter.com/home" target="_blank">
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://www.linkedin.com/home" target="_blank">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div> */}
            </div>
            <hr></hr>
            <div className="justify-content-center d-flex">
              <p>Team 23</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
