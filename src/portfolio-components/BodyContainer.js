import React, { Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AboutSection } from './sections/AboutSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { SkillsSection } from './sections/SkillsSection';
import { ContactSection } from './sections/ContactSection';
import { HorizontalCarPath } from './car-paths/HorizontalCarPath';
import { VerticalCarPath } from './car-paths/VerticalCarPath';

class BodyContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 0,
            width: 0,
            firstCanvasEndPoints: {},
        }
        this.updateLastPoints = this.updateLastPoints.bind(this);
    }
    updateLastPoints(key, values) {        
        this.setState({[key]: values})
    }
    render() {
        const { firstCanvasEndPoints } = this.state;
        return (
            <div className="main-container">
                <Container >
                    <Row id="about">
                        <Col xs = {2}>                        
                            <VerticalCarPath canvasKey="firstCanvasEndPoints" updateLastPoints={this.updateLastPoints} />
                        </Col>
                        <Col xs = {10}>
                            <AboutSection />
                        </Col>
                    </Row>    
                    <Row >
                        <Col xs = {12}>                            
                            <HorizontalCarPath prevEndPoints={firstCanvasEndPoints} />
                        </Col>                        
                    </Row>                    
                    <Row id="experience">
                        <Col xs ={10}>
                            <ExperienceSection />
                        </Col>
                    </Row>
                    <Row >
                        <Col xs = {12}>                            
                            <HorizontalCarPath />
                        </Col>                        
                    </Row> 
                    <Row id="skills">
                        <Col xs = {{offset: 2}}>
                            <SkillsSection />
                        </Col>
                    </Row>
                    <Row >
                        <Col xs = {12}>                            
                            <HorizontalCarPath />
                        </Col>                        
                    </Row> 
                    <Row id="contacts">
                        <Col xs = {10}>
                            <ContactSection />
                        </Col>
                    </Row>                    
                </Container>
            </div>
        );
    }
}

export { BodyContainer };