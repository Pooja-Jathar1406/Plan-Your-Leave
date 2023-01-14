import { Component } from "react";
import { Container, Alert, Col, Row, Form, Button } from "react-bootstrap";
import "../css/Home.css";

export class Home extends Component {
  render() {
    return (
      <div>
        <Container fluid className="text-center main-text">
          {/* <div className="container-fluid"> */}
          <div className="bodyFirst mainContent center">
            <h1 className="pgheading">
              Employee Leave and Attendance Management
            </h1>
            <br />
            <br />
            <h5 className="pgsubheading">
              User-friendly employee leave management solution that helps you to
              reduce the time and costs associated with <br></br>leave
              management
            </h5>
          </div>
          <div className="row d-flex justify-content-between">
            <div className="container1  ">
              {/*  content here  */}
              <div className="row section">
                <div className="col-md-5">
                  <div className="Section1" />
                </div>
                <div className="col-md-7 sectionContent center">
                  <p>
                    Reconciling employee attendance is a very crucial task for
                    each HR manager and involves a lot of expensive time.
                    Defining leave rules is not just where it ends but managing
                    leaves and updating employee leaves on a regular basis to
                    keep the payroll accurate is a very tedious and time
                    consuming task. This Leave management module simplifies the
                    complex task of monthly reconciliation of leaves of each
                    employee and allows the managers and HR admins to handle
                    employee leave efficiently and systematically maintaining
                    the flexibility.
                  </p>
                </div>
              </div>
              <div className="row section">
                <div className="col-md-7 sectionContent center">
                  Significant amount of expensive employee, manager and HR time
                  is wasted in a very basic HR process. To handle this we have
                  seamlessly integrated the leave and attendance management with
                  employee that allows employees to apply attendance and leaves
                  / submit a leave request which goes to the immediate reporting
                  head. Employees can also view their leave balances and track
                  their leaves for each month using the employee self-service
                  portal. This tool, leave management with employee self-service
                  portal considerably reduces the load on HR and simplify the
                  cumbersome task of managing the employee attendance and leave
                  on a month to month basis.
                </div>
                <div className="col-md-5">
                  <div className="Section2" />
                </div>
                <div className="row section">
                  <div className="row section">
                    <hr />
                  </div>
                  <h1 className="sectionHeading center">Key Features</h1>
                  <div className="col-md-4">
                    <div className="card center">
                      <img
                        className="card-img-top "
                        src="../Images/card1.png"
                        alt="Card image"
                      />
                      <div className="card-body">
                        <h4 className="card-title" align="center">
                          Transparency of leave records
                          <br />
                        </h4>
                        <p className="card-text">
                          Whenever employees want to know about their remaining
                          leaves, this software has full transparency of leave
                          records. Employees will be able to see the their leave
                          balance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card center">
                      <img
                        className="card-img-top  attendanceImg"
                        src="../Images/card2.2.jpg"
                        alt="Card image"
                      />
                      <div className="card-body">
                        <h4 className="card-title" align="center">
                          Complete Integration with attendance system
                        </h4>
                        <p className="card-text">
                          When employees are encouraged to update their own
                          personnel information, the result is not only a
                          reduction in data-entry errors but more relevant and
                          up-to-date information.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card center">
                      <img
                        className="card-img-top"
                        src="../Images/faters1.png"
                        alt="Card image"
                      />
                      <div className="card-body">
                        <h4 className="card-title" align="center">
                          Reduce time of leave approval process
                        </h4>
                        <p className="card-text">
                          Software to reduce the time for discussion with HR,
                          employees can see their online status of all leave
                          because the software have transparency of leave
                          records.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center section">
                  <div className="col-md-4">
                    <div className="card center">
                      <img
                        className="card-img-top"
                        src="../Images/er1.png"
                        alt="Card image"
                      />
                      <div className="card-body">
                        <h4 className="card-title" align="center">
                          Improve transparency in the organization
                          <br />
                        </h4>
                        <p className="card-text">
                          Transparency in the management and employees are
                          essential for any organization to become successful in
                          the market. Through Timelabs software your
                          organization can improve transparency between.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card center">
                      <img
                        className="card-img-top"
                        src="../Images/gg.png"
                        alt="Card image"
                      />
                      <div className="card-body">
                        <h4 className="card-title" align="center">
                          Save Paper and Go Green
                        </h4>
                        <p className="card-text">
                          When you use a Leave Management App, there is no need
                          to worry about keeping paperwork organized or using
                          paperwork to respond to leave requests. It also helps
                          to save the environment by saving the papers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </Container>
      </div>
    );
  }
}
