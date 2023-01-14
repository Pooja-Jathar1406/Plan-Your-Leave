import { useEffect, useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";

import { getAllLeaveRequestsFromServer } from "../Services/EmpApiService";
import { deleteLeaveRequestFromServer } from "../Services/EmpApiService";

export function LeaveRequests() {
  const [leaveReqList, setleaveReqList] = useState([]);
  const [selectedRequestsReq_Id, setselectedRequestsReq_Id] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  //
  async function getLeaveRequests() {
    const response = await getAllLeaveRequestsFromServer();
    setleaveReqList(response.data);
  }

  const deleteRequest = async () => {
    const response = await deleteLeaveRequestFromServer(selectedRequestsReq_Id);
    console.log(response.data);
    closeModal();
    getLeaveRequests();
  };

  useEffect(() => {
    getLeaveRequests();
  }, []);

  return (
    <div>
      <Container>
        <div className="row mt-5">
          {/* show request button */}
          <div className="col-md-12 shoreq">
            <div id="showreqbtn"> Leave Requests</div>
          </div>
        </div>
        {/* my req panel */}
        <div className="row mb-5">
          <div className="col-md-12" id="myReqTbl">
            <table
              className="table table-striped table-bordered table-hover "
              id="table">
              <tbody>
                <tr className="tblRow">
                  <th scope="col-md-1">Req_Id</th>
                  <th scope="col-md-1">Emp_Id</th>
                  <th scope="col-md-2">From Date</th>
                  <th scope="col-md-2">To Date</th>
                  <th scope="col-md-1">No of Days</th>
                  <th scope="col-md-1">Leave Type</th>
                  <th scope="col-md-3">Reason</th>
                  <th scope="col-md-1">Status</th>
                  <th scope="col-md-1">Actions</th>
                </tr>
                {leaveReqList.map((leave_req) => {
                  return (
                    <tr>
                      <td>{leave_req.Req_Id}</td>
                      <td>{leave_req.Emp_ID}</td>
                      <td>{leave_req.From_Date}</td>
                      <td>{leave_req.To_Date}</td>
                      <td>{leave_req.No_of_Days}</td>
                      <td>{leave_req.Leave_Type}</td>
                      <td>{leave_req.Reason}</td>
                      <td>{leave_req.Req_Status}</td>
                      <td>
                        {/* <Button variant="outline-warning" className="btn-sm">
                          Edit
                        </Button>{" "} */}
                        <Button
                          variant="outline-danger"
                          className="btn-sm"
                          onClick={() => {
                            setselectedRequestsReq_Id(leave_req.Req_Id);
                            console.log(leave_req.Req_Id);
                            openModal();
                          }}>
                          Delete
                        </Button>{" "}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the request with id={" "}
          {selectedRequestsReq_Id}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={deleteRequest}>
            Yes, Delete
          </Button>
          <Button variant="danger" onClick={closeModal}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
