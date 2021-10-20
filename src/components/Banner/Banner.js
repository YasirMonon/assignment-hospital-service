
import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img1 from "../../images/1.png"
import img2 from "../../images/2.png"
import img3 from "../../images/4.png"
import img4 from "../../images/3.png"
import "./Banner.css"

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-75"
                        src={img1}
                        alt="First slide"
                    />
                    <div className="carousel-text">
                        <h1 className="carousel-text__title">Welcome To CPH</h1>
                        <h2 className="carousel-text__sub-title">Better Mind For Better Life</h2>
                        <p className="carousel-text__des d-none d-md-block">
                            This is City Psychiatric Hospital.you privide all health related service.we have lot of skilled doctor in this hospital.we bleve this health is everay thing of life.
                        </p>
                        <Link to="/login"><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Subscribe</button></Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                    <div className="carousel-text">
                        <h1 className="carousel-text__title">Great Service , Our First Priority</h1>
                        <h2 className="carousel-text__sub-title">Better Mind For Better Life</h2>
                        <p className="carousel-text__des d-none d-md-block">
                            This is City Psychiatric Hospital.you privide all health related service.we have lot of skilled doctor in this hospital.we bleve this health is everay thing of life.
                        </p>
                        <Link to="/login"><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Subscribe</button></Link>

                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="Third slide"
                    />
                    <div className="carousel-text">
                        <h1 className="carousel-text__title">Welcome To CPH</h1>
                        <h2 className="carousel-text__sub-title">Better Mind For Better Life</h2>
                        <p className="carousel-text__des d-none d-md-block">
                            This is City Psychiatric Hospital.you privide all health related service.we have lot of skilled doctor in this hospital.we bleve this health is everay thing of life.
                        </p>
                        <Link to="/login"><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Subscribe</button></Link>
                    </div>


                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner
