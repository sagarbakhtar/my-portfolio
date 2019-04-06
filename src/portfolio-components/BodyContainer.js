import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AboutSection } from './AboutSection';
import { ExperienceSection } from './ExperienceSection';

function BodyContainer(props) {
    return (
        <div className="main-container">
            <Container>
                <Row>
                    <Col md = {{offset: 2}}>
                        <AboutSection />
                    </Col>
                </Row>
                <Row>
                    <Col md ={10}>
                        <ExperienceSection />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { BodyContainer };