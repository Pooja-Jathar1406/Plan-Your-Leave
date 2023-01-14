import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { ApplyLeave } from "./components/ApplyLeave";
import { MarkAttendance } from "./components/MarkAttendance";
import { Approvals } from "./components/Approvals";
import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { LeaveRequests } from "./components/LeaveRequests";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/apply-leave"
            element={<ApplyLeave></ApplyLeave>}></Route>
          <Route
            path="/leave_req"
            element={<LeaveRequests></LeaveRequests>}></Route>
          {/* <Route
            path="/apply-leave"
            element={<ApplyLeave></ApplyLeave>}></Route> */}
          <Route
            path="/mark-attendance"
            element={<MarkAttendance></MarkAttendance>}></Route>
          <Route path="/approvals" element={<Approvals></Approvals>}></Route>
          <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
          <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
          <Route path="/sign-out" element={<Login></Login>}></Route>
        </Routes>
        {/* <LeaveRequests></LeaveRequests> */}
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
