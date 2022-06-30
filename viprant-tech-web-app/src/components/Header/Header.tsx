import React from 'react'
import { Container } from 'react-bootstrap'
import NavBar from './NavBar/NavBar'

export default function Header() {
    return (
        <>
            <Container>
                <NavBar />
                {/* <div>
                    <div className="grid grid-nogutter surface-section text-800">
                        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                            <section>
                                <span className="block text-6xl font-bold mb-1">Create the screens your</span>
                                <div className="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
                                <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <Button label="Learn More" type="button" className="mr-3 p-button-raised"></Button>
                                <Button label="Live Demo" type="button" className="p-button-outlined"></Button>
                            </section>
                        </div>
                        <div className="col-12 md:col-6 overflow-hidden">
                            <img src="images/blocks/hero/hero-1.png" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                        </div>
                    </div>
                </div> */}
                </Container></>
    )
}
