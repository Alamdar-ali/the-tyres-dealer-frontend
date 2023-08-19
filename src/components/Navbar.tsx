import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function CustomNavbar() {
  return (
    <Navbar style={{ position: "sticky" }} className="p-3 bg-black top-0 ">
      <Container>
        <Navbar.Brand className="text-white" href="#home">
          The Tyre Dealers
        </Navbar.Brand>
        <Nav className="flex gap-8 justify-end">
          <NavLink className="text-white" to="/">
            Sign in
          </NavLink>
          <NavLink className="text-white" to="/signin">
            Sign in
          </NavLink>
          <NavLink className="text-white" to="/signup">
            Sign up
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
