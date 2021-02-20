/* eslint-disable react/no-unescaped-entities */
import { faChevronDown, faChevronRight, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import black from '../../assets/colors/black.png';
import blue from '../../assets/colors/blue.png';
import brown from '../../assets/colors/brown.png';
import golden from '../../assets/colors/golden.png';
import gray from '../../assets/colors/gray.png';
import white from '../../assets/colors/white.png';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar border p-3">
            <div className="sidebar_filter">
                <div className="section_title">
                    <span>Filters</span>
                </div>
                <p className="mt-2 ">
                    <span>
                        Out of Stock <span className="filter_close">&times;</span>
                    </span>
                </p>

                <p className="py-1">
                    <span>
                        Size: XL <span className="filter_close">&times;</span>
                    </span>
                </p>

                <p className="clear">
                    <span>Clear All</span>
                </p>
            </div>

            <hr />

            <div className="sidebar_category">
                <div className="section_title d-flex justify-content-between">
                    <span>Category</span>
                    <span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </div>

                <span className="light_normal">Men's Clothing</span>
                <span className="dark_bold ml-2 py-1">Casual Wear</span>
                <span className="light_normal ml-4">Shirts</span>
            </div>

            <hr />

            <div className="sidebar_brand">
                <div className="section_title d-flex justify-content-between">
                    <span>Brand</span>
                    <span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </div>
                <Form inline>
                    <InputGroup className="search_bar mb-3">
                        <FormControl className="border-right-0" type="text" placeholder="Search" />
                        <InputGroup.Append>
                            <Button
                                className="border border-left-0 text-center"
                                variant="transparent"
                            >
                                <FontAwesomeIcon icon={faSearch} />
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
                <Form>
                    <Form.Check type="radio" label="Aeropostale" />
                    <Form.Check type="radio" label="Antony Morato" />
                    <Form.Check type="radio" label="Arrow" />
                    <Form.Check type="radio" label="Arrow Blue Jeans" />
                    <Form.Check type="radio" label="Arrow Sport" />
                    <Form.Check type="radio" label="Mufti" />
                    <Form.Check type="radio" label="Raymond" />
                    <Form.Check type="radio" label="United Colors of Benetton" />
                </Form>
                <br />
                <p className="bold_green">236 MORE</p>
            </div>

            <hr />

            <div className="sidebar_country">
                <div className="section_title d-flex justify-content-between">
                    <span>Country</span>
                    <span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </div>
                <Form>
                    <Form.Check type="radio" label="USA" />
                    <Form.Check type="radio" label="Germany" />
                    <Form.Check type="radio" label="Italy" />
                    <Form.Check type="radio" label="UK" />
                    <Form.Check type="radio" label="Bangladesh" />
                </Form>
                <br />
                <p className="bold_green">2 MORE</p>
            </div>

            <hr />

            <div className="sidebar_size">
                <div className="section_title d-flex justify-content-between">
                    <span>Size</span>
                    <span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </div>

                <div className="sizes d-flex justify-content-between">
                    <span className="border rounded p-2">XS</span>
                    <span className="border rounded p-2">S</span>
                    <span className="border rounded p-2">M</span>
                    <span className="border rounded p-2">L</span>
                    <span className="border rounded p-2">XL</span>
                    <span className="border rounded p-2">XXL</span>
                </div>
            </div>

            <hr />

            <div className="sidebar_color">
                <div className="section_title">
                    <span>Color</span>
                </div>

                <div className="mt-2 d-flex justify-content-between">
                    <img src={black} width="30px" height="30px" className="img-thumbnail" alt="" />
                    <img src={brown} width="30px" height="30px" className="img-thumbnail" alt="" />
                    <img src={golden} width="30px" height="30px" className="img-thumbnail" alt="" />
                    <img src={gray} width="30px" height="30px" className="img-thumbnail" alt="" />
                    <img src={white} width="30px" height="30px" className="img-thumbnail" alt="" />
                    <img src={blue} width="30px" height="30px" className="img-thumbnail" alt="" />
                </div>
            </div>

            <hr />

            <div className="sidebar_discount">
                <div className="section_title d-flex justify-content-between">
                    <span>Discount</span>
                    <span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </div>

                <Form>
                    <Form.Check type="radio" label="10% - 30%" />
                    <Form.Check type="radio" label="30% - 50%" />
                    <Form.Check type="radio" label="50% - 70%" />
                </Form>
            </div>

            <hr />

            <div className="sidebar_price">
                <div className="section_title">
                    <span>Price</span>
                </div>

                <Form className="d-flex justify-content-between">
                    <Form.Control style={{ width: '70px' }} type="number" placeholder="Min" />
                    <span className="mt-1"> - </span>
                    <Form.Control style={{ width: '70px' }} type="number" placeholder="Max" />
                    <span> </span>
                    <Button variant="tranparent" className="rounded-circle">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Button>
                </Form>
            </div>

            <hr />

            <div className="sidebar_rating">
                <div className="section_title">
                    <span>Rating</span>
                </div>

                <Form className="" style={{ color: '#01c765' }}>
                    <div className="d-flex">
                        <Form.Check type="radio" />
                        <FontAwesomeIcon className="icon ml-3" icon={faStar} />
                        <FontAwesomeIcon className="icon" icon={faStar} />
                        <FontAwesomeIcon className="icon" icon={faStar} />
                        <FontAwesomeIcon className="icon" icon={faStar} />
                        <FontAwesomeIcon className="icon" icon={faStar} />
                    </div>

                    <div className="d-flex">
                        <Form.Check type="radio" />
                        <FontAwesomeIcon className="icon ml-3" icon={faStar} />
                        <FontAwesomeIcon className="icon" icon={faStar} />
                        <FontAwesomeIcon className="icon" icon={faStar} />
                        <FontAwesomeIcon className="icon" icon={faStar} />
                    </div>

                    <div className="d-flex">
                        <Form.Check type="radio" />
                        <FontAwesomeIcon className="icon ml-3" icon={faStar} />
                        <FontAwesomeIcon className="icon" icon={faStar} />
                        <FontAwesomeIcon className="icon" icon={faStar} />
                    </div>

                    <div className="d-flex">
                        <Form.Check type="radio" />
                        <FontAwesomeIcon className="icon ml-3" icon={faStar} />
                        <FontAwesomeIcon className="icon" icon={faStar} />
                    </div>

                    <div className="d-flex">
                        <Form.Check type="radio" />
                        <FontAwesomeIcon className="icon ml-3" icon={faStar} />
                    </div>
                </Form>
            </div>

            <hr />

            <div className="sidebar_fabric">
                <div className="section_title d-flex justify-content-between">
                    <span>Fabric</span>
                    <span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </div>
                <Form>
                    <Form.Check type="radio" label="Cotton Blend" />
                    <Form.Check type="radio" label="Cotton Linen Blend" />
                    <Form.Check type="radio" label="Cotton Silk" />
                    <Form.Check type="radio" label="Linene Blend" />
                    <Form.Check type="radio" label="Nylon Blend" />
                    <Form.Check type="radio" label="Poly Silk" />
                    <Form.Check type="radio" label="Polycotton" />
                    <Form.Check type="radio" label="Pure Cotton" />
                    <Form.Check type="radio" label="Rayon" />
                </Form>
                <br />
                <p className="bold_green">5 MORE</p>
            </div>

            <div className="sidebar_pattern">
                <div className="section_title d-flex justify-content-between">
                    <span>Pattern</span>
                    <span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </div>
                <Form>
                    <Form.Check type="radio" label="Checkered" />
                    <Form.Check type="radio" label="Chevron/Zig Zag" />
                    <Form.Check type="radio" label="Color Block" />
                    <Form.Check type="radio" label="Floral Print" />
                    <Form.Check type="radio" label="Houndstooth" />
                    <Form.Check type="radio" label="Polka Print" />
                    <Form.Check type="radio" label="Printed" />
                    <Form.Check type="radio" label="Self Design" />
                    <Form.Check type="radio" label="Solid" />
                </Form>
                <br />
                <p className="bold_green">26 MORE</p>
            </div>

            <hr />

            <div className="sidebar_service">
                <div className="section_title d-flex justify-content-between">
                    <span>Service</span>
                    <span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </div>
                <Form>
                    <Form.Check type="radio" label="Cash on Delivery" />
                    <Form.Check type="radio" label="Free Shipping" />
                </Form>
            </div>

            <hr />

            <div>
                <div className="section_title d-flex justify-content-between">
                    <span>Clothing Style</span>
                    <span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </div>
            </div>

            <hr />

            <div>
                <div className="section_title d-flex justify-content-between">
                    <span>Men's Trend</span>
                    <span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </div>
            </div>

            <hr />

            <div>
                <div className="section_title d-flex justify-content-between">
                    <span>Fit Type</span>
                    <span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
