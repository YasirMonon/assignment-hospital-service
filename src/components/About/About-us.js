import React from 'react'
import { Container } from 'react-bootstrap'
import Banner from '../Banner/Banner'
import "./About.css"


const AboutUs = () => {
    return (
        <div>
            <Banner />
            <h1 className="about__title">About us</h1>
            <div className="about-content">
                <h1 className="about__title">About us</h1>
                <Container>
                    <h3 className="about-content__sub-title">Diversity is in our DNA</h3>
                    <p className="text-justify">
                        We are  physician-owned and -led partnership and a leader in acute care innovation that is committed to transforming healthcare for the benefit of all. Our patient-first focus drives everything we do, from improving clinical outcomes to reaching patients where and when they need us most. Here we set a standard of excellence in our recruiting and hiring practices, prioritizing representation and engagement of diverse backgrounds. Our diversity efforts are ongoing to build awareness and create opportunity for education, personal and professional development. Our goal is to positively impact the communities we serve through volunteer, mentorship and social impact programs.
                    </p>
                </Container>
            </div>

        </div>

    )
}

export default AboutUs
