import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function NavigationBar() {
    return (
        <Navbar bg="transparent" variant="light">
            <Nav className="mr-auto py-2">
                <Nav.Link href="#homepage">Homepage</Nav.Link>
                <Nav.Link className="text-dark" href="/">
                    All Products
                </Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavigationBar;
