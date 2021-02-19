/* eslint-disable react/no-unescaped-entities */
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar border p-3">
            <div className="sidebar_filter">
                <div className="section_title">
                    <span>Filters</span>
                </div>
                <p className="mt-2">
                    <span>
                        Out of Stock <span className="filter_close">&times;</span>
                    </span>
                </p>

                <p>
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
                <span className="dark_bold ml-2">Casual Wear</span>
                <span className="light_normal ml-4">Shirt</span>
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

                <div className="colors d-flex justify-content-between">
                    <div className="p-1">
                        <span className="bg-dark"></span>
                    </div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
