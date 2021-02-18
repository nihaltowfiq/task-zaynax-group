import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faTwitter,
    // eslint-disable-next-line prettier/prettier
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import amex from '../../assets/amex.png';
import bkash from '../../assets/bkash.png';
import customerService from '../../assets/customerService.png';
import mainSend from '../../assets/mainSend.png';
import mastercard from '../../assets/mastercard.png';
import nagad from '../../assets/nagad.png';
import phoneLine from '../../assets/phoneLine.png';
import rocket from '../../assets/rocket.png';
import footerImage from '../../assets/svg-icons/footerImage.svg';
import visa from '../../assets/visa.png';
import './BottomFooter.css';

function BottomFooter() {
    return (
        <div className="border-top mb-3">
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="mt-5">
                            <img className="p-1" src={footerImage} alt="footerImage" />
                        </div>
                    </Col>

                    <Col md={6} className="text-center">
                        <div className="social_icons mt-5">
                            <a href="#facebook">
                                <FontAwesomeIcon
                                    className="icon"
                                    color="lightgray"
                                    icon={faFacebookF}
                                    size="lg"
                                />
                            </a>
                            <a href="#twitter">
                                <FontAwesomeIcon
                                    className="icon"
                                    color="lightgray"
                                    icon={faTwitter}
                                    size="lg"
                                />
                            </a>
                            <a href="#linkedin">
                                <FontAwesomeIcon
                                    className="icon"
                                    color="lightgray"
                                    icon={faLinkedinIn}
                                    size="lg"
                                />
                            </a>
                            <a href="#instagram">
                                <FontAwesomeIcon
                                    className="icon"
                                    color="lightgray"
                                    icon={faInstagram}
                                    size="lg"
                                />
                            </a>
                            <a href="#youtube">
                                <FontAwesomeIcon
                                    className="icon"
                                    color="lightgray"
                                    icon={faYoutube}
                                    size="lg"
                                />
                            </a>
                        </div>

                        <div className="subscribe my-4">
                            <h6>SUBSCRIBE</h6>
                            <p className="my-0">Get the latest news from zDrop</p>
                            <Form>
                                <InputGroup>
                                    <FormControl
                                        className="border-0 form-focus pl-0"
                                        placeholder="Email Address"
                                    />
                                    <InputGroup.Append>
                                        <Button className="border-0" variant="transparent">
                                            <FontAwesomeIcon
                                                color="black"
                                                size="lg"
                                                icon={faPaperPlane}
                                            />
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Form>
                        </div>

                        <div className="more_queries">
                            <Button variant="link">About zDrop</Button>
                            <Button variant="link">FAQ & Support</Button>
                            <Button variant="link">Terms & Conditions</Button>
                            <Button variant="link">Privacy Policy</Button>
                        </div>

                        <div className="payment_option mt-4">
                            <img src={bkash} alt="" />
                            <img src={nagad} alt="" />
                            <img src={rocket} alt="" />
                            <img src={visa} alt="" />
                            <img src={mastercard} alt="" />
                            <img src={amex} alt="" />
                        </div>
                    </Col>

                    <Col md={3}>
                        <div className="contact_us mt-md-5 pt-md-5 ">
                            <h6>CONTACT US</h6>
                            <p className="mt-3 mb-0 pb-0">
                                <img src={customerService} alt="" /> Hotline:
                            </p>
                            <small className="ml-4">01929459195 (10am-10pm/Sat-Thur)</small>

                            <p className="mb-0 mt-2 pb-0">
                                <img src={phoneLine} alt="" /> Whole Sales:
                            </p>
                            <small className="ml-4">01929459195 (10am-12pm)</small>

                            <p className="mb-0 mt-2 pb-0">
                                <img src={mainSend} alt="" /> Email:
                            </p>
                            <small className="ml-4">support.example@gmail.com</small>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BottomFooter;
