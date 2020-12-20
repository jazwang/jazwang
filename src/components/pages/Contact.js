import React from 'react';
import '../../App.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faYoutubeSquare } from '@fortawesome/fontawesome-free-brands'

export default function Contact() {
  return (
      <div className="page">
        <h1>contact</h1>
        <Description>
            <p>
                <br/>
                <br/>
                Feel free to get in touch! You can email me at
                <a href="mailto:codingwithjaz@gmail.com"> here</a>.
                <br/>
                <br/>

            </p>
            <SocialMedia>
              <a 
                href='https://www.youtube.com/channel/UC3SSXBY7FpecK0d9r7n9uqA'
                target='_blank'
                rel="noreferrer">
                 <FontAwesomeIcon icon={faYoutubeSquare} />
              </a>
              <a 
                href='http://linkedin.com/in/jingyi-jasmine-wang'
                target='_blank'
                rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href='https://www.instagram.com/jaz_wang'
                target='_blank'
                rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </SocialMedia>
        </Description>
      </div>
  )
}

const Description = styled.div`
`;

const SocialMedia = styled.div`
background: none;
font-size: 30px;
display: flex;
grid-gap: 10px;
flex-direction: row;
justify-content: flex-start;
position: relative;
@media (max-width: 420px) {
    margin: 20px 0;
  }
`;
