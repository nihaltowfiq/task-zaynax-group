/* eslint-disable react/jsx-props-no-spreading */
import { faCalendarAlt, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import sliderData from '../../data/sliderData';
import './Blogs.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
};

function Blogs() {
    const [blogs] = useState(sliderData);
    return (
        <Container className="blogs">
            <div className="text-center bg-transparent pt-5 pb-3">
                <h5>LATEST BLOGS</h5>
                <p>
                    This is a place devoted to giving you deeper insight into the news, <br />
                    trends, people and technology behind Bing
                </p>
            </div>

            <Slider {...settings}>
                {blogs.map((blog) => (
                    <Col key={blog.id}>
                        <Card className="ml-3 text-white ">
                            <Card.Img src={blog.img} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>{blog.type}</Card.Title>
                                <Card.Text className="cardText">
                                    <span>
                                        <FontAwesomeIcon icon={faCalendarAlt} /> {blog.date}
                                    </span>
                                    <span className="ml-3">
                                        <FontAwesomeIcon icon={faCommentAlt} /> {blog.comments}
                                    </span>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                ))}
            </Slider>
        </Container>
    );
}

export default Blogs;
