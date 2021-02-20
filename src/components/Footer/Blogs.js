/* eslint-disable react/jsx-props-no-spreading */
import { faCalendarAlt, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import sliderData from '../../data/sliderData';
import './Blogs.css';

function Blogs() {
    const [blogs] = useState(sliderData);
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
    ];
    return (
        <Container className="blogs">
            <div className="text-center bg-transparent pt-5 pb-3">
                <h5>LATEST BLOGS</h5>
                <p>
                    This is a place devoted to giving you deeper insight into the news, <br />
                    trends, people and technology behind Bing
                </p>
            </div>

            <Carousel breakPoints={breakPoints}>
                {blogs.map((blog) => (
                    <Card key={blog.id} className="ml-3 text-white ">
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
                ))}
            </Carousel>
        </Container>
    );
}

export default Blogs;
