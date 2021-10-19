import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import "./DetailService.css"

const DetailService = () => {
    const [serviceDetails, setServiceDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch("/service.json")
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [id])

    const findItem = serviceDetails.find(item => item.id === parseInt(id))

    return (
        <div>
            <Container>
                <Row className="mt-5">
                    <Col md={6} sm={6} xs={12}>
                        <img src={findItem?.src} alt="" style={{ width: "100%" }} />
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                        <h1 className="detail__title"> {findItem?.name}</h1>
                        <p>
                            {findItem?.dec}
                        </p>
                        <Link to="/home">
                            <button className="detail__service">Back To Home</button>
                        </Link>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DetailService
