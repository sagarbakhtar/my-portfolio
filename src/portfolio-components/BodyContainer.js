import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AboutSection } from './AboutSection';
import { ExperienceSection } from './ExperienceSection';
import { SkillsSection } from './SkillsSection';
import { ContactSection } from './ContactSection';

function BodyContainer(props) {
    return (
        <div className="main-container">
            <Container>
                <Row id="about">
                    <Col xs = {{offset: 2}}>
                        <AboutSection />
                    </Col>
                </Row>
                <Row id="experience">
                    <Col xs ={10}>
                        <ExperienceSection />
                    </Col>
                </Row>
                <Row id="skills">
                    <Col xs = {{offset: 2}}>
                        <SkillsSection />
                    </Col>
                </Row>
                <Row id="contacts">
                    <Col xs = {10}>
                        <ContactSection />
                    </Col>
                </Row>
                <Row>
                    
                </Row>
            </Container>
        </div>
    );
}

export { BodyContainer };