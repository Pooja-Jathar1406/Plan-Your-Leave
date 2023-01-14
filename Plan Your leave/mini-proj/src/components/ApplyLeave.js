import { Component } from "react";
import { Container, Alert, Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/ApplyLeave.css";
import { saveLeaveReq } from "../Services/EmpApiService";
export class ApplyLeave extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Req_Id: "",
      Emp_ID: "",
      From_Date: "",
      To_Date: "",
      No_of_Days: "",
      Leave_Type: "",
      Reason: "",
      Req_Status: "Pending",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    //to prevent reloading
    event.preventDefault();

    //to make the api call to server
    const response = await saveLeaveReq(this.state);
    console.log(response.data);
    alert(response.data.message);
  };

  render() {
    return (
      <div>
        <Container className="text-center mt-5">
          <div className="container">
            <div className="row justify-content-center">
              {/* page heading */}
              <div className="col-md-5 heading">
                <div className="row">
                  <div className="col-2">
                    <div className="pgicon">
                      <img src="../Images/leavereq.png" alt="" />
                    </div>
                  </div>
                  <div className="col-10">
                    <h3>Apply For Leave</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-between">
              {/*  content here  */}
              <div className="col-md-12 content mb-5">
                <div className="row">
                  <div className="col-md-5 availableLeaves">
                    <div className="row m-3">
                      <h2>Available leaves</h2>
                    </div>
                    <div className="row">
                      <div className="col-md-6 LeaveCard card1">
                        Casual <br />
                        leaves <br />6
                      </div>
                      <div className="col-md-6 LeaveCard card2">
                        Sick <br />
                        leaves <br />4
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 LeaveCard card3">
                        Paid <br />
                        leaves <br />4
                      </div>
                      <div className="col-md-6 LeaveCard card4">
                        Unpaid <br />
                        leaves <br />5
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 leaveApplnForm" id="ApplyLeaveForm">
                    {/* apply leave form */}
                    <div className="row">
                      <div className="container">
                        <form
                          method="POST"
                          name="addleaveform"
                          is="addleaveform"
                          action="./"
                          onSubmit={this.handleSubmit}>
                          <div className="row mb-2">
                            <div className="col">
                              <div className="form-outline">
                                <label
                                  className="form-label"
                                  htmlFor="fromdate">
                                  {" "}
                                  From Date
                                </label>
                                <input
                                  type="date"
                                  id="fromdate"
                                  name="From_Date"
                                  className="form-control"
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-outline">
                                <label className="form-label" htmlFor="todate">
                                  To Date
                                </label>
                                <input
                                  type="date"
                                  id="todate"
                                  name="To_Date"
                                  className="form-control"
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row mb-2">
                            <div className="col">
                              <div className="form-outline mb-2">
                                <label
                                  className="form-label"
                                  htmlFor="NoOfdays">
                                  no of days
                                </label>
                                <input
                                  type="number"
                                  id="NoOfdays"
                                  name="No_of_Days"
                                  className="form-control"
                                  min={1}
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-outline mb-2">
                                <label className="form-label" htmlFor="empid">
                                  Employee Id
                                </label>
                                <input
                                  type="number"
                                  id="empid"
                                  name="Emp_ID"
                                  className="form-control"
                                  min={1}
                                  onChange={this.handleChange}
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-outline mb-2">
                            <label
                              className="form-label"
                              id="leavetype"
                              htmlFor="form6Example3">
                              Leave type
                            </label>
                            {/* <input type="text" id="form6Example3" class="form-control"  required/> */}
                            <select
                              name="Leave_Type"
                              id="leavetype"
                              className="form-control"
                              onChange={this.handleChange}
                              required>
                              <option value="" disabled="" hidden="">
                                Select leave type
                              </option>
                              <option value="Casual leave">Casual Leave</option>
                              <option value="Sick leave">Sick Leave</option>
                              <option value="Paid leave">Paid Leave</option>
                              <option value="Unpaid leave">Unpaid Leave</option>
                            </select>
                          </div>
                          <div className="form-outline mb-2">
                            <label
                              className="form-label"
                              htmlFor="reason"
                              required>
                              Reason
                            </label>
                            <textarea
                              type="textArea"
                              id="reason"
                              name="Reason"
                              className="form-control"
                              rows={3}
                              required
                              defaultValue={" "}
                              onChange={this.handleChange}
                            />
                          </div>
                          <div className="form-outline mb-2">
                            <input
                              type="button"
                              defaultValue="Apply"
                              className="ApplyResetBtn"
                              onClick={this.handleSubmit}
                            />{" "}
                            <button type="reset" className="ApplyResetBtn">
                              Reset
                            </button>
                          </div>
                        </form>
                        <br></br>
                        <Link to="/leave_req">
                          {" "}
                          <button
                            type="reset"
                            className=" ApplyResetBtn shoreq ">
                            Show Leave Requests
                          </button>{" "}
                        </Link>
                      </div>
                    </div>
                    {/* <marquee
                      width="60%"
                      direction="left"
                      height="100px"
                      className="note">
                      Scroll down to see your leave requests below.
                    </marquee> */}
                  </div>
                </div>
              </div>
            </div>
            {/* -----------------------Leave Request  table----------------------- */}
            {/* <div className="row"> */}{" "}
            {/* <div className="col-md-12 shoreq">
                <div id="showreqbtn">My Leave Requests</div>
              </div>
            </div> */}
            {/* my req panel */}
            {/* <div className="row mb-5">
              <div className="col-md-12" id="myReqTbl">
                <table
                  className="table table-striped table-bordered table-hover "
                  id="table">
                  <tbody>
                    <tr className="tblRow">
                      <th scope="col-md-1">Emp_Id</th>
                      <th scope="col-md-2">From Date</th>
                      <th scope="col-md-2">To Date</th>
                      <th scope="col-md-1">No of Days</th>
                      <th scope="col-md-1">Leave Type</th>
                      <th scope="col-md-3">Reason</th>
                      <th scope="col-md-1">Status</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> */}
          </div>
        </Container>
      </div>
    );
  }
}
