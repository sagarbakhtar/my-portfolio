import React from 'react';
import Card from 'react-bootstrap/Card';

function ExperienceSection() {
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    <h4>Experience</h4>
                </Card.Title>            
                <ul className="timeline">
                    <li>
                        <h5><a target="_blank" rel="noopener noreferrer" href="https://www.chtrbox.com/">Chtrbox.com</a></h5>
                        <h6 className="text-muted">Jan 2017 - Jun 2018</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque scelerisque diam non nisi semper, et elementum lorem ornare. 
                        </p>
                    </li>
                    <li>
                        <h5><a target="_blank" rel="noopener noreferrer" href="https://www.bookeventz.com/">Bookeventz.com</a></h5>
                        <h6 className="text-muted">Nov 2015 - Dec 2016</h6>
                        <p>Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis.
                            Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin
                        </p>
                    </li>
                    <li>
                        <h5><a target="_blank" rel="noopener noreferrer" href="https://www.quicsolv.com/">Quicsolv Technologies</a></h5>
                        <h6 className="text-muted">Mar 2015 - Oct 2015</h6>
                        <p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. 
                            Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. 
                        </p>
                    </li>
                </ul>
            </Card.Body>
        </Card>
    );
}

export { ExperienceSection };