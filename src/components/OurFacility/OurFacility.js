import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import ShowFacility from '../ShowFacility/ShowFacility';
import "./OurFacility.css"

const OurFacility = () => {
    const [facility, setFacility] = useState([]);

    useEffect(() => {
        fetch("/facility.json")
            .then(res => res.json())
            .then(data => setFacility(data))
    }, [])
    return (
        <div>
            <Container>
                <h1 className="facility__title">Our Speciality & Expertise</h1>
                <Row className="g-3">
                    {
                        facility.map(item => <ShowFacility key={item.id} item={item} />)
                    }
                </Row>
            </Container>
        </div>
    )
}

export default OurFacility
