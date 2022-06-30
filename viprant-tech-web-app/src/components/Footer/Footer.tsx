import React from 'react'
import { Navbar, Container, NavbarBrand } from 'react-bootstrap'

export default function Footer() {
  return (
    <div className="fixed-bottom">
     <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          <NavbarBrand  className="justify-content-center">© Copyright ViprantTek LLP 2022, All Rights Reserved</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  )
}
