
import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import "./Header.css"

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar sticky="top" bg="primary" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} to="/home" className="d-flex justify-content-center align-items-center">
                        <h4 className="mx-2" style={{ color: "#ffffff" }}> <i className="fas fa-clinic-medical"></i>  City Psychiatric Hospital</h4>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} activeClassName="active" to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} activeClassName="active" to="/about">About</Nav.Link>
                            <Nav.Link as={NavLink} activeClassName="active" to="/facility">Facility</Nav.Link>

                            <Nav.Link as={NavLink} activeClassName="active" to="">
                                {user.email && <span className="d-flex justify-content-center" style={{ border: "none", color: "#ffffff" }}>Welcome, {user.displayName}</span>}</Nav.Link>
                            {
                                user.email ? <Button variant="light" style={{ border: "none" }} onClick={logOut}> LogOut</Button> : <span className="d-flex justify-content-center">

                                    <Nav.Link as={NavLink} activeClassName="active" to="/registration"><i className="fas fa-user-plus"></i>  Register</Nav.Link>
                                    <Nav.Link as={NavLink} activeClassName="active" to="/login">Sign In   <i className="fas fa-sign-in-alt"></i></Nav.Link>
                                </span>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
