import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from "../../images/4.png"
import img1 from "../../images/doctor2.png"
import "./About.css"
const About = () => {
    return (
        <div className="about">
            <div className="about__image align-center">
                <img src={img} className="img-fluid" alt="" />
                <div className="about__text">
                    <h1 className="about__title">About us</h1>
                </div>
            </div>

            <div className="about-content">
                <Container>
                    <Row>
                        <Col md={4} sm={12} xs={12}>
                            <img src={img1} alt="" className="img-fluid" />
                        </Col>
                        <Col md={8} sm={12} xs={12}>
                            <h3 className="about-content__sub-title">Diversity is in our DNA</h3>
                            <p className="text-justify">
                                We are  physician-owned and -led partnership and a leader in acute care innovation that is committed to transforming healthcare for the benefit of all. Our patient-first focus drives everything we do, from improving clinical outcomes to reaching patients where and when they need us most. Here we set a standard of excellence in our recruiting and hiring practices, prioritizing representation and engagement of diverse backgrounds. Our diversity efforts are ongoing to build awareness and create opportunity for education, personal and professional development. Our goal is to positively impact the communities we serve through volunteer, mentorship and social impact programs.
                            </p>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default About
