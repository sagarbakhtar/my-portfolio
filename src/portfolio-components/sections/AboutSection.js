import React from 'react';
import Card from 'react-bootstrap/Card';

function AboutSection(props) {
    return (
    <Card>
        <Card.Body className="text-center">
            <h1 className="text-center">
                Hello, I am <span className="text-primary">{process.env.REACT_APP_PORTFOLIO_NAME}</span><br/>                
            </h1>
            <h2 className="text-muted">
                Full Stack developer
            </h2>            
            <p>
                I want to make things that make difference.
                <br/>             
            </p>   
        </Card.Body>
    </Card>
    );
}

export { AboutSection };