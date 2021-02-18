import React from 'react';
import Blogs from './Blogs';
import BottomFooter from './BottomFooter';
import CenterFooter from './CenterFooter';

function Footer() {
    return (
        <div>
            <Blogs />
            <CenterFooter />
            <BottomFooter />
        </div>
    );
}

export default Footer;
