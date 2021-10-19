import React from 'react'
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ShowFacility.css"

const ShowFacility = (props) => {
    const { id, name, position, dec, src } = props.item;
    return (
        <Col md={4} sm={4} xs={12} className="facility">
            <Card>
                <img src={src} alt="" />
                <Card.Body>
                    <Card.Title className="facility__name">{name}</Card.Title>
                    <Card.Title className="facility__position">{position}</Card.Title>
                    <Card.Text>{dec}</Card.Text>
                    <Link to={`/DetailFacility/${id}`}>
                        <Button variant="warning" className="facility__btn w-100">Show Details</Button>
                    </Link>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default ShowFacility
