import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function CustomNavbar() {
  return (
    <Navbar className="p-3 bg-black">
      <Container>
        <Navbar.Brand className="text-white" href="#home">
          Tyre Dealers
        </Navbar.Brand>
        <Nav className="flex gap-8 justify-end">
          <NavLink className="text-white" to="/">
            Sign in
          </NavLink>

          <NavLink className="text-white" to="/">
            Sign in
          </NavLink>
          <NavLink className="text-white" to="/signin">
            Sign in
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
