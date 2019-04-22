import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs } from '@fortawesome/free-brands-svg-icons/faJs';
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5';
import { faCss3 } from '@fortawesome/free-brands-svg-icons/faCss3';
import { faPhp } from '@fortawesome/free-brands-svg-icons/faPhp';

function SkillsSection(props) {
    return (
    <Card>    
        <Card.Body>        
            <Card.Title>
                <h4>Skills</h4>
            </Card.Title>
            <Row>
                <Col className="text-center" xs={6} sm={4} md={2}>
                    <section>
                        <FontAwesomeIcon size="4x" icon={faJs} color="#F0DA50" />
                        <p>Javascript</p>
                    </section>
                </Col>
                <Col className="text-center" xs={6} sm={4} md={2}>
                    <section>
                        <FontAwesomeIcon size="4x" icon={faReact} color="#61DAFB" />
                        <p>ReactJs</p>
                    </section>
                </Col>
                <Col className="text-center" xs={6} sm={4} md={2}>
                    <section>
                        <FontAwesomeIcon size="4x" icon={faHtml5} color="#E34B26" />
                        <p>HTML5</p>
                    </section>
                </Col>
                <Col className="text-center" xs={6} sm={4} md={2}>
                    <section>
                        <FontAwesomeIcon size="4x" icon={faCss3} color="#264DE4" />
                        <p>CSS3</p>
                    </section>
                </Col>
                <Col className="text-center" xs={6} sm={4} md={2}>
                    <section>
                        <FontAwesomeIcon size="4x" icon={faPhp} color="#777BB3" />
                        <p>PHP</p>
                    </section>
                </Col>
            </Row>
        </Card.Body>
    </Card>
    );
}

export { SkillsSection };