import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import { SocialLinks } from './SocialLinks';

function Header(props) {
    return (
    <Navbar variant="dark" bg="primary" expand="lg">
        <Navbar.Brand href={process.env.PUBLIC_URL + '/'}>
            <Image
                src={process.env.PUBLIC_URL + '/images/logo.png'}                        
                alt="Logo"
                width="40"
                roundedCircle
            />
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#experience">Experience</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>

                <SocialLinks linkClassName="navbar-link" />
            </Navbar.Collapse>
    </Navbar>
    );
}

export { Header };