/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import productsData from '../../data/productsData';
import './Products.css';

function Products() {
    const [products] = useState(productsData);
    return (
        <div>
            <Row>
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </Row>

            <nav className="mt-5 mb-3">
                <ul className="pagination p-2  m-auto justify-content-center">
                    <li className="page-item mr-1 active">
                        <a className="page-link rounded-circle border-0" href="#">
                            1
                        </a>
                    </li>
                    <li className="page-item mr-1">
                        <a className="page-link rounded-circle border-0" href="#">
                            2
                        </a>
                    </li>
                    <li className="page-item mr-1">
                        <a className="page-link rounded-circle border-0" href="#">
                            3
                        </a>
                    </li>
                    <li className="page-item mr-1">
                        <a className="page-link rounded-circle border-0" href="#">
                            4
                        </a>
                    </li>
                    <li className="page-item mr-1">
                        <a className="page-link rounded-circle border-0" href="#">
                            5
                        </a>
                    </li>
                    <li className="page-item mr-1">
                        <a className="page-link rounded-circle border-0" href="#">
                            6
                        </a>
                    </li>
                    <li className="page-item mr-1">
                        <a className="page-link rounded-circle border-0" href="#">
                            7
                        </a>
                    </li>
                    <li className="page-item mr-1">
                        <a className="page-link rounded-circle border-0" href="#">
                            8
                        </a>
                    </li>
                    <li className="page-item mr-1">
                        <a className="page-link rounded-circle border-0" href="#">
                            9
                        </a>
                    </li>
                    <li className="page-item mr-1">
                        <a className="page-link rounded-circle border-0" href="#">
                            10
                        </a>
                    </li>
                    <li className="page-item">
                        <a
                            style={{ color: '#01c765' }}
                            className="page-link rounded-circle border-0"
                            href="#"
                        >
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

const Product = ({ product }) => (
    <Col md={3}>
        <Card className="product">
            <div className="img_wrapper">
                <Card.Img src={product.img} />
            </div>

            <Card.Body>
                <Card.Title className="my-0 pt-0 pb-1 ">{product.title}</Card.Title>
                <Card.Text>BDT. {product.discountPrice}</Card.Text>
                <Row className="text-secondary clearfix extra">
                    <Col md={7}>
                        <del>BDT. {product.price}</del>
                    </Col>
                    <Col md={5}>34% Off</Col>
                </Row>
            </Card.Body>
        </Card>
    </Col>
);
export default Products;
