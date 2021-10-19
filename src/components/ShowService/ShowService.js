import React from 'react'
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ShowService.css"

const ShowService = (props) => {
    const { id, name, src, dec } = props.item;
    return (
        <Col md={4} sm={6} xs={12}>
            <Card>
                <img src={src} alt="" />
                <Card.Body>
                    <div className="d-flex">
                        <Card.Title className="service__header mx-2 justify-content-center align-items-center">{name}</Card.Title>
                    </div>
                    <Card.Text className="py-3 service__text">{dec.slice(0, 200)}</Card.Text>
                    <Link to={`/detailservice/${id}`}>
                        <Button variant="warning" className="service__btn w-100">Details  <i className="fas fa-user-md"></i></Button>
                    </Link>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default ShowService
