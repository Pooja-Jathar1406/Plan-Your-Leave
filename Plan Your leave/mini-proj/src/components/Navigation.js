import { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap/";
import { LinkContainer } from "react-router-bootstrap";
import "../css/Navigation.css";
export class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src="./Images/LOGO.png"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
              <LinkContainer to={"/"}>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/apply-leave"}>
                <Nav.Link>Apply Leave</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/mark-attendance"}>
                <Nav.Link>Mark Attendance</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/approvals"}>
                <Nav.Link>Approvals</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/about-us"}>
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/contact-us"}>
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/login"}>
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/sign-up"}>
                <Nav.Link>Sign Up</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/sign-out"}>
                <Nav.Link>Sign Out</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      //   <header>
      //     <nav className="navbar navbar-expand-lg" id="header">
      //       <a className="navbar-brand" href="./HomePage.html">
      //         <img src="" alt="" />
      //       </a>
      //       <button
      //         className="navbar-toggler m-2"
      //         type="button"
      //         data-bs-toggle="collapse"
      //         data-bs-target="#navbarSupportedContent"
      //         aria-controls="navbarSupportedContent"
      //         aria-expanded="false"
      //         aria-label="Toggle navigation">
      //         <span className="navbar-toggler-icon" />
      //       </button>
      //       <div
      //         className="collapse navbar-collapse align-items-end"
      //         id="navbarSupportedContent">
      //         <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
      //           <li className="nav-item">
      //             <a
      //               className="nav-link active"
      //               aria-current="page"
      //               href="#"
      //               target="_blank">
      //               Home
      //             </a>
      //           </li>
      //           <li className="nav-item">
      //             <a
      //               className="nav-link"
      //               href="./LeaveApplication.html"
      //               target="_blank">
      //               Leaves
      //             </a>
      //           </li>
      //           <li className="nav-item">
      //             <a
      //               className="nav-link"
      //               href="./FillAttendance.html"
      //               target="_blank">
      //               Attendance
      //             </a>
      //           </li>
      //           <li className="nav-item">
      //             <a className="nav-link" href="./AboutUs.html" target="_blank">
      //               About Us
      //             </a>
      //           </li>
      //           <li className="nav-item">
      //             <a className="nav-link" href="./ContactUs.html" target="_blank">
      //               Contact Us
      //             </a>
      //           </li>
      //           <li className="nav-item">
      //             <a className="nav-link" href="./Login.html">
      //               Sign out
      //             </a>
      //           </li>
      //         </ul>
      //       </div>
      //     </nav>
      //   </header>
    );
  }
}
