import { Component } from "react";
import { Container, Alert, Col, Row, Form, Button } from "react-bootstrap";
import "../css/AboutUs.css";

export class AboutUs extends Component {
  render() {
    return (
      <div>
        <Container className="  mt-5 mb-5">
          <div className="container">
            <div className="row justify-content-center">
              {/* page heading */}
              <div className="col-md-5 heading">
                <div className="row ">
                  <div className="col-2">
                    <div className="pgicon">
                      <img src="../Images/img18.png" alt="" />
                    </div>
                  </div>
                  <div className="col-10">
                    <h3>About Us</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-between">
              <div className="col-md-12 content">
                {/*  content here  */}
                <p>
                  A leave management system is a process within an organization
                  that determines how leave is requested by employees and
                  approved by managers . Companies need efficient ways to track
                  employees’ attendance records and leaves of absence.
                  <br />
                  <br />
                  Plan Your Leave is a user-friendly employee leave management
                  solution that helps you to reduce the time and costs
                  associated with leave management. With Plan Your Leave you can
                  easily track all types of leave, including casual leave, sick
                  leave, paid leave and unpaid leave. The approval process is
                  fast, and the result is clear and visible to everyone
                  involved.&nbsp; Plan your Leave allows managers to maintain
                  employee information in one seamlessly integrated application.
                </p>
                <ul>
                  <li>No more endless email chains</li>
                  <li>Fast approvals</li>
                  <li>Transparent history of approvals</li>
                </ul>
                <p />
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
