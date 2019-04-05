import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { AboutSection } from './AboutSection';

function BodyContainer(props) {
    return (
        <Container>
            <Row>
                <Col md = {{offset: 3}}>
                    <h3>Portfolio Coming soon</h3>
                </Col>
            </Row>
        </Container>
    );
}

export { BodyContainer };