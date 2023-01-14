import axios from "axios";
const BASE_URL = "http://localhost:9800/";
const LEAVE_URL = "http://localhost:9800/leave_req";
const APPROVAL_URL = "http://localhost:9800/approvals";
const ATTENDANCE_URL = "http://localhost:9800/mark-attendance";

//--------- save leave requests----------
export async function saveLeaveReq(leave_req) {
  return axios.post(BASE_URL, leave_req);
}

//--------- get all leave requests----------
export async function getAllLeaveRequestsFromServer() {
  return axios.get(BASE_URL);
}

//--------- delete leave requests----------
export function deleteLeaveRequestFromServer(Emp_ID) {
  return axios.delete(`${LEAVE_URL}/${Emp_ID}`);
}

//--------- get pending leave requests----------
export async function getAllPendingRequestsFromServer() {
  return axios.get(APPROVAL_URL);
}

//--------- approve leave requests----------
export function approveLeaveRequestFromServer(Emp_ID) {
  return axios.put(`${APPROVAL_URL}/${Emp_ID}`);
}

//--------- reject leave requests----------
export function rejectLeaveRequestFromServer(Emp_ID) {
  return axios.delete(`${APPROVAL_URL}/${Emp_ID}`);
}

//--------- save attendance ----------
export async function saveAttendance(attendance) {
  return axios.post(ATTENDANCE_URL, attendance);
}
