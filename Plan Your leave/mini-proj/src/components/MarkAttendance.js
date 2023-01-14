import { Component } from "react";
import { Container } from "react-bootstrap";
import "../css/MarkAttendance.css";
import { saveAttendance } from "../Services/EmpApiService";
export class MarkAttendance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Emp_Id: "",
      Attnd_Date: "",
      Entry_Time: "",
      Exit_Time: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    //to prevent reloading
    event.preventDefault();

    //to make the api call to server
    const response = await saveAttendance(this.state);
    console.log(response.data);
    alert(response.data.message);
  };
  render() {
    return (
      <div className="attendanceBody">
        <Container className="text-center ">
          <div className="container">
            <div className="row justify-content-center ">
              {/* page heading */}
              <div className="col-md-5 mt-5  attendHeading">
                <div className="row">
                  <div className="col-2">
                    <div className="pgicon">
                      <img src="../Images/attendance.png" alt="" />
                    </div>
                  </div>
                  <div className="col-10">
                    <h3>Mark Your Attendance</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-between">
              {/*  content here  */}
              <div className="col-md-12 attendContent">
                <div className="row mb-5">
                  <form
                    method="POST"
                    action="./"
                    onSubmit={this.handleSubmit}
                    className="attendForm"
                    name="attendForm">
                    <div className="row mb-2">
                      <div className="col">
                        <div className="form-outline">
                          <label className="form-label" htmlFor="emplyid">
                            Employee Id
                          </label>
                          <input
                            type="number"
                            id="emplyid"
                            className="form-control"
                            required=""
                            min={1}
                            name="Emp_Id"
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-outline">
                          <label
                            className="form-label"
                            id="datePickerId"
                            htmlFor="date">
                            Date
                          </label>
                          <input
                            type="date"
                            id="date"
                            className="form-control"
                            required=""
                            name="Attnd_Date"
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-outline mb-2">
                      <label className="form-label" htmlFor="entrytime">
                        Entry time
                      </label>
                      <input
                        type="time"
                        id="entrytime"
                        className="form-control"
                        required=""
                        name="Entry_Time"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-outline mb-2">
                      <label className="form-label" htmlFor="exittime">
                        Exit time
                      </label>
                      <input
                        type="time"
                        id="exittime"
                        className="form-control"
                        required=""
                        name="Exit_Time"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="button"
                        onclick=" AddRow()"
                        defaultValue="Save"
                        className="SaveBtn"
                        onClick={this.handleSubmit}
                      />
                    </div>
                  </form>
                </div>
                {/* <div className="AttendanceTable">
                  <table
                    className="  table table-striped table-bordered table-hover"
                    id="table">
                    <tbody>
                      <tr>
                        <th>Employee I'd</th>
                        <th>Date</th>
                        <th>Entry Time</th>
                        <th>Exit Time</th>
                        <th>Attendance Status</th>
                      </tr>
                    </tbody>
                  </table>
                </div> */}
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
