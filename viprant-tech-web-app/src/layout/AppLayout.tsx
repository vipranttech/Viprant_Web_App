import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'

export default function AppLayout() {
  return (
    <>
      <Container>
        <Header /><Home /><Footer />
      </Container>
    </>
  )
}
