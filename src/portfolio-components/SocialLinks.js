import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';

function SocialLinks(props) {
    return (
    <section>
        <a className={props.linkClassName} rel="noopener noreferrer" target="_blank" href={process.env.REACT_APP_GITHUB_PROFILE_URL}>
            <FontAwesomeIcon size={props.linkIconSize} icon={faGithub} />
        </a>
        <a className={props.linkClassName} rel="noopener noreferrer" target="_blank" href={process.env.REACT_APP_LINKEDIN_PROFILE_URL}>
            <FontAwesomeIcon size={props.linkIconSize} icon={faLinkedin} />
        </a>
        <a className={props.linkClassName} rel="noopener noreferrer" target="_blank" href={process.env.REACT_APP_FACEBOOK_PROFILE_URL}>
            <FontAwesomeIcon size={props.linkIconSize} icon={faFacebook} />
        </a>
        <a className={props.linkClassName} rel="noopener noreferrer" target="_blank" href={process.env.REACT_APP_INSTAGRAM_PROFILE_URL}>
            <FontAwesomeIcon size={props.linkIconSize} icon={faInstagram} />
        </a>
    </section>
    );
}

export { SocialLinks };