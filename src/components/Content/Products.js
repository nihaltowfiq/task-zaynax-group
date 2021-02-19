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
