import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { IoBasket, IoCartSharp } from "react-icons/io5";
import { RiMenu4Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
export default function MainNav() {
  return (
    <header>
      <Navbar
        bg="dark"
        variant="dark"
        expand="md"
        className="mb-3 shadow"
      >
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
              <Nav className="text-light justify-content-center flex-grow-1 pe-3">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
                <NavDropdown
                  title="Gategory"
                  id={`offcanvasNavbarDropdown-expand-md`}
                >
                  <NavLink className="dropdown-item" to="/clothes">
                    Clothes
                  </NavLink>
                  <NavDropdown.Divider />
                  <NavLink className="dropdown-item" to="/shoes">
                    Shoes
                  </NavLink>
                  <NavDropdown.Divider />
                  <NavLink className="dropdown-item" to="/other">
                    other
                  </NavLink>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <NavLink
            to="/home"
            className="w-25 navbar-brand m-0 d-flex justify-content-center align-items-center"
          >
            Basket
            <IoBasket />
          </NavLink>
          <div className="text-light w-25 d-flex justify-content-center align-items-center">
            <IoCartSharp />
          </div>
        </Container>
      </Navbar>
    </header>
  );
}