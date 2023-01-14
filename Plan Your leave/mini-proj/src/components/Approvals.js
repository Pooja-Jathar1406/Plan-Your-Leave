import { useEffect, useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";

import { getAllPendingRequestsFromServer } from "../Services/EmpApiService";
import { approveLeaveRequestFromServer } from "../Services/EmpApiService";
import { rejectLeaveRequestFromServer } from "../Services/EmpApiService";

export function Approvals() {
  const [leaveReqList, setleaveReqList] = useState([]);
  const [selectedRequestsReq_Id, setselectedRequestsReq_Id] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  //
  const openModal2 = () => {
    setIsModal2Open(true);
  };

  const closeModal2 = () => {
    setIsModal2Open(false);
  };
  const rejectReq = async () => {
    const response = await rejectLeaveRequestFromServer(selectedRequestsReq_Id);
    console.log(response.data);
    closeModal2();
    getLeaveRequests();
  };
  //
  async function getLeaveRequests() {
    const response = await getAllPendingRequestsFromServer();
    setleaveReqList(response.data);
  }

  const approveReq = async () => {
    const response = await approveLeaveRequestFromServer(
      selectedRequestsReq_Id
    );
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
        {/* <div className="row mt-5">
          {/* show request button */}
        {/* <div className="col-md-12 shoreq">
            <div id="showreqbtn"> Leave Requests</div>
          </div>
        </div> */}
        {/* my req panel */}
        <div className="row mb-5 mt-5">
          <h4 className="row mb-5 mt-2">
            Hi, these requests are pending for your approval!
          </h4>
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
                {leaveReqList.map((approvals) => {
                  return (
                    <tr>
                      <td>{approvals.Req_Id}</td>
                      <td>{approvals.Emp_ID}</td>
                      <td>{approvals.From_Date}</td>
                      <td>{approvals.To_Date}</td>
                      <td>{approvals.No_of_Days}</td>
                      <td>{approvals.Leave_Type}</td>
                      <td>{approvals.Reason}</td>
                      <td>{approvals.Req_Status}</td>
                      <td>
                        {/* <Button variant="outline-warning" className="btn-sm">
                          Edit
                        </Button>{" "} */}
                        <Button
                          variant="success"
                          className="btn-sm"
                          onClick={() => {
                            setselectedRequestsReq_Id(approvals.Req_Id);
                            console.log(approvals.Req_Id);
                            openModal();
                          }}>
                          Approve
                        </Button>{" "}
                        <Button
                          variant="danger"
                          className="btn-sm"
                          onClick={() => {
                            setselectedRequestsReq_Id(approvals.Req_Id);
                            console.log(approvals.Req_Id);
                            openModal2();
                          }}>
                          Reject
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
          Are you sure you want to aprove the request with id={" "}
          {selectedRequestsReq_Id}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={approveReq}>
            Yes, Approve
          </Button>
          <Button variant="danger" onClick={closeModal}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
      {/* -------------------------------------------------- */}
      <Modal show={isModal2Open} onHide={closeModal2}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to reject the request with id={" "}
          {selectedRequestsReq_Id}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={rejectReq}>
            Yes, Reject
          </Button>
          <Button variant="danger" onClick={closeModal2}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
