import React from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { SocialLinks } from './SocialLinks';

function ContactSection(props) {
    return (
    <Card id="contact">    
        <Card.Body>        
            <Card.Title>
                <h4>Contact</h4>
            </Card.Title>
            <section>
                <FontAwesomeIcon size="2x" icon={faEnvelope} /> <a href="mailto:s.v.bakhtar@gmail.com">s.v.bakhtar@gmail.com</a>
            </section>

            <SocialLinks linkIconSize="2x" />
        </Card.Body>
    </Card>
    );
}

export { ContactSection };