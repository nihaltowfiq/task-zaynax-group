import React from 'react';
import { Button, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function SearchBar() {
    return (
        <div className="border-top border-bottom py-3">
            <Navbar bg="tranparent" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Text className="text-dark mr-md-5">
                        Showing 1 - 400 of 80,068 products
                    </Navbar.Text>
                    <Nav className="mr-auto">
                        <Navbar.Text className="text-dark font-weight-bold pl-5">
                            Refine By
                        </Navbar.Text>
                        <span className="border mx-4"></span>
                        <NavDropdown title="Price" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#highest">Highest</NavDropdown.Item>
                            <NavDropdown.Item href="#lowest">Lowest</NavDropdown.Item>
                        </NavDropdown>

                        <Navbar.Text className="text-dark font-weight-bold ml-md-5 pl-5">
                            Sort By
                        </Navbar.Text>
                        <span className="border mx-4"></span>
                        <NavDropdown title="Best Seller" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#year">Year</NavDropdown.Item>
                            <NavDropdown.Item href="#month">Month</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#all-time">All Time</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Form inline>
                    <InputGroup>
                        <FormControl
                            // className="bg-secondary text-white"
                            type="text"
                            placeholder="Search"
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary">$</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
            </Navbar>
        </div>
    );
}

export default SearchBar;
