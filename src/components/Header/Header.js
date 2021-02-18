import React from 'react';
import { Container } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import SearchBar from './SearchBar';

function Header() {
    return (
        <Container fluid>
            <NavigationBar />
            <SearchBar />
        </Container>
    );
}

export default Header;
