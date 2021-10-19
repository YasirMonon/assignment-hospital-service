import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

const DetailFacility = () => {
    const [DetailFacility, setDetailFacility] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch("/facility.json")
            .then(res => res.json())
            .then(data => setDetailFacility(data))
    }, [id])

    const findItem = DetailFacility.find(item => item.id === parseInt(id));

    return (
        <div>
            <Container>
                <Row className="mt-5">
                    <Col md={6} sm={6} xs={12}>
                        <img src={findItem?.src} alt="" style={{ width: "100%" }} />
                    </Col>
                    <Col md={6} sm={6} xs={12}>
                        <h1 className="detail__title"> {findItem?.name}</h1>
                        <h2 style={{ fontSize: "25px" }}>{findItem?.position}</h2>
                        <p>
                            {findItem?.dec}
                        </p>
                        <Link to="/facility">
                            <button className="detail__service">Back To Home</button>
                        </Link>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DetailFacility
