import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FastDelivery from '../../assets/svg-icons/FastDelivery.svg';
import GlobalBrands from '../../assets/svg-icons/GlobalBrands.svg';
import ProfessionalService from '../../assets/svg-icons/ProfessionalService.svg';
import QualitySaving from '../../assets/svg-icons/QualitySaving.svg';
import SecurePayment from '../../assets/svg-icons/SecurePayment.svg';
import './CenterFooter.css';

function CenterFooter() {
    return (
        <Container className="my-5">
            {/* <div className="d-flex">
                <div className="text-center centerFooter_card">
                    <img className="my-3" src={QualitySaving} alt="" />
                    <h6>Quality and Saving</h6>
                    <p>Comprehensive quality control and affordable prices</p>
                </div>

                <div className="text-center centerFooter_card">
                    <img className="my-3" src={QualitySaving} alt="" />
                    <h6>Quality and Saving</h6>
                    <p>Comprehensive quality control and affordable prices</p>
                </div>

                <div className="text-center centerFooter_card">
                    <img className="my-3" src={QualitySaving} alt="" />
                    <h6>Quality and Saving</h6>
                    <p>Comprehensive quality control and affordable prices</p>
                </div>

                <div className="text-center centerFooter_card">
                    <img className="my-3" src={QualitySaving} alt="" />
                    <h6>Quality and Saving</h6>
                    <p>Comprehensive quality control and affordable prices</p>
                </div>

                <div className="text-center centerFooter_card">
                    <img className="my-3" src={QualitySaving} alt="" />
                    <h6>Quality and Saving</h6>
                    <p>Comprehensive quality control and affordable prices</p>
                </div>
            </div> */}

            <Row>
                <Col>
                    <div className="text-center centerFooter_card">
                        <img className="my-3" src={QualitySaving} alt="" />
                        <h6>Quality and Saving</h6>
                        <p>Comprehensive quality control and affordable prices</p>
                    </div>
                </Col>

                <Col>
                    <div className="text-center centerFooter_card">
                        <img className="my-3" src={GlobalBrands} alt="" />
                        <h6>Global Brands</h6>
                        <p>Buy you favorite items from your favorite global brands</p>
                    </div>
                </Col>

                <Col>
                    <div className="text-center centerFooter_card">
                        <img className="my-3" src={FastDelivery} alt="" />
                        <h6>Fast Delivery</h6>
                        <p>
                            Fast and convenient
                            <br />
                            door to door delivery
                        </p>
                    </div>
                </Col>

                <Col>
                    <div className="text-center centerFooter_card">
                        <img className="my-3" src={SecurePayment} alt="" />
                        <h6>Secure Payment</h6>
                        <p>
                            Different secure
                            <br />
                            payment methods
                        </p>
                    </div>
                </Col>

                <Col>
                    <div className="text-center p-1 centerFooter_card">
                        <img className="my-3" src={ProfessionalService} alt="" />
                        <h6>Professional Service</h6>
                        <p>Efficient customer support from passionate team</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default CenterFooter;
