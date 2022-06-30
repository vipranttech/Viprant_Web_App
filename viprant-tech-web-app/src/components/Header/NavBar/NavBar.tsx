import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './NavBar.scss'

export default function NavBar() {
  return (
    <Navbar className="test-color" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Work</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
}
