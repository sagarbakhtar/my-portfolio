import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import Image from 'react-bootstrap/Image';

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
                <Nav.Link href="/" active={true}>About</Nav.Link>
                <Nav.Link href="#link">Experience</Nav.Link>
                <Nav.Link href="#link">Skills</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link target="_blank" href={process.env.REACT_APP_GITHUB_PROFILE_URL}>
                    <FontAwesomeIcon icon={faGithub} />
                </Nav.Link>
                <Nav.Link target="_blank" href={process.env.REACT_APP_LINKEDIN_PROFILE_URL}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </Nav.Link>
                <Nav.Link target="_blank" href={process.env.REACT_APP_FACEBOOK_PROFILE_URL}>
                    <FontAwesomeIcon icon={faFacebook} />
                </Nav.Link>
                <Nav.Link target="_blank" href={process.env.REACT_APP_INSTAGRAM_PROFILE_URL}>
                    <FontAwesomeIcon icon={faInstagram} />
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}

export { Header };