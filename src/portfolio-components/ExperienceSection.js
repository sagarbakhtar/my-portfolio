import React from 'react';
import Card from 'react-bootstrap/Card';

function ExperienceSection() {
    return (
        <Card id="experience-section">
            <Card.Body>
            <h4>Experience</h4>
			<ul className="timeline">
				<li>
                    <h5><a target="_blank" rel="noopener noreferrer" href="https://www.chtrbox.com/">Chtrbox.com</a></h5>
					<h6 class="text-muted">Jan 2017 - June 2018</h6>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
				</li>
				<li>
					<h5><a target="_blank" rel="noopener noreferrer" href="https://www.bookeventz.com/">Bookeventz.com</a></h5>
					<h6 class="text-muted">November 2015 - December 2016</h6>
					<p>Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
				</li>
				<li>
					<h5><a target="_blank" rel="noopener noreferrer" href="https://www.quicsolv.com/">Quicsolv Technologies</a></h5>
					<h6 class="text-muted">March 2015 - October 2015</h6>
					<p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
				</li>
			</ul>
            </Card.Body>
        </Card>
    );
}

export { ExperienceSection };