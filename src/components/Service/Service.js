import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowService from '../ShowService/ShowService';
import "./Service.css";

const Service = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch("./service.json")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <>
            <Container>
                <div className="service">
                    <div className="service__center">
                        <h1 className="service__title">Our Services</h1>
                    </div>
                    <Row className="g-5">
                        {
                            service.map(item => <ShowService key={item.id} item={item} />)
                        }
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Service
