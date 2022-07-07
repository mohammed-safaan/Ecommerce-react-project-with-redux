import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { IoBasket } from "react-icons/io5";
import { RiMenu4Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Cart from "./Cart/Cart";
export default function MainNav() {

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" className="mb-3 shadow fixed-top">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`}>
            <RiMenu4Fill className="display-6" />
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="start"
          >
            <Offcanvas.Header
              className="bg-dark text-light"
              closeButton
              closeVariant="white"
            >
              <Offcanvas.Title
                className="d-flex justify-content-center align-items-center"
                id={`offcanvasNavbarLabel-expand-md`}
              >
                Basket <IoBasket />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="bg-dark text-light">
              <Nav className="text-light flex-grow-1 pe-3">
                <NavLink className="nav-link text-light" to="/home">
                  Home 
                </NavLink>
                <NavLink className="nav-link text-light" to="/about">
                  About
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="center w-75 justify-content-around">
            <NavLink
              to="/home"
              className=" navbar-brand m-0 center"
            >
              <span className="d-none d-sm-block">Basket</span> 
              <IoBasket />
            </NavLink>
            <Cart />
          </div>
        </Container>
      </Navbar>
    </header>
  );
}
