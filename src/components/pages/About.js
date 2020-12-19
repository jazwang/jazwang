import React from 'react';
import '../../App.css';
import styled from 'styled-components';
import ProfilePic from '../../images/profilepic.JPG'

export default function About() {
  return (
    <div className="page">
      <h1>about</h1>
      <AboutContainer>
        <ProfileImg src={ProfilePic} />
        <Description>
          <p>
            Hey! Glad you&#39;re here. :-)

            <br/>
            <br/>

            My name is Jaz. I&#39;m a software engineer, and I occasionally 
            make Youtube videos on my <a href="https://www.youtube.com/channel/UC3SSXBY7FpecK0d9r7n9uqA"
            rel="noreferrer" target="_blank">channel</a>.

            <br/>
            <br/>

            Some of my interests include hiking, building legos, kayaking, trying out new restaurants,
            and cuddling with cats.

            <br/>
            <br/>

            Here I share my thoughts and projects, and, who knows what I will come up with!

            <br/>
            <br/>

            If you would like to message me, feel me to do so
            at <a href="mailto:codingwithjaz@gmail.com">  Jaz Wang</a>.
            Hoping to hear from you!
            <br/>
            <br/>
          </p>
        </Description>
      </AboutContainer>
    </div>
  
  )
}

const AboutContainer = styled.div`
  display: inline-block;
  flex-direction: row-reverse;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Description = styled.div`
`;

const ProfileImg = styled.img`
  width: 370px;
  height: 370px;
  border-radius: 50%;
  object-fit: cover;
  padding-left: 10px;
  @media (max-width: 700px) {
    padding: 20px 0 20px 0;
    width: 80vw;
    height: 80vw;
    margin: auto;
  }
`;
