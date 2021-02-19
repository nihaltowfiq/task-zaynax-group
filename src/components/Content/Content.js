import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Products from './Products';
import Sidebar from './Sidebar';

function Content() {
    return (
        <Container fluid>
            <Row className="my-3">
                <Col md={3}>
                    <Sidebar />
                </Col>

                <Col md={9}>
                    <Products />
                </Col>
            </Row>
        </Container>
    );
}

export default Content;
