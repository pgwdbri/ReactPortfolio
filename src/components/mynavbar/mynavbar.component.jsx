import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const MyNavbar = () => {
    return (
    
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Brianna Shade</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="https://github.com/pgwdbri/BudgetTracker">Github</Nav.Link>
                    <Nav.Link href="https://linkedin.com">Linkedin</Nav.Link>
                    
                    
                </Nav>
                </Navbar.Collapse>
                </Navbar>
    
    )
}

export default MyNavbar
