import React from 'react';
import '../../App.css';
import styled from 'styled-components';

export default function Message() {

  function mouseOver(e) {
    e.target.style.background = '#9B8884';
    e.target.style.color = '#F2F3EB';
  }

  function mouseOut(e) {
    e.target.style.background = 'none';
    e.target.style.color = '#5A5A5A';
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
  <div className="page">
    <h1>keep in touch</h1>
    <ContactForm onSubmit={handleSubmit}>
      
      <NameDiv>
        <label>name</label>
        <InputBox type="text" placeholder="My name is" name="name" id="name_input" required> 
        </InputBox>
      </NameDiv>

      <EmailDiv>
        <label>email</label>
        <InputBox type="email" placeholder="My e-mail is" name="email" id="email_input" required>
        </InputBox>
      </EmailDiv>

      <TextArea placeholder="I'd like to chat about" id="message_input" cols="30" rows="5" required>
      </TextArea>

      <SqButton type="submit" onMouseOver={mouseOver} onMouseOut={mouseOut} onClick={handleSubmit}>
        Send Message
      </SqButton>
    
    </ContactForm>
  </div>
  )
}


const ContactForm = styled.form`
  padding: 37.5px;
  margin: 50px 0;
`;

const NameDiv = styled.div`
  background: none;
  border: none;
  color: #9B8884;
  font-size: 1.000em;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0em 0 1.875em 0;
  padding: 0 0 0.875em 0;
  text-transform: uppercase;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  float: left;
	width: 45%;
`;

const EmailDiv = styled.div`
  background: none;
  border: none;
  color: #9B8884;
  font-size: 1.000em;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0em 0 1.875em 0;
  padding: 0 0 0.875em 0;
  text-transform: uppercase;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  float: right;
  width: 45%;
`;

const InputBox = styled.input`
  background: none;
  border: none;
	border-bottom: solid 2px #9B8884;
	color: #474544;
	font-size: 1.000em;
  font-weight: 400;
  letter-spacing: 1px;
	margin: 0em 0 1.875em 0;
	padding: 0 0 0.875em 0;
	width: 100%;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	-o-box-sizing: border-box;
	box-sizing: border-box;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	-ms-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
`;

const TextArea = styled.textarea`
  background: none;
  border: none;
  border-bottom: solid 2px #9B8884;
  color: #474544;
  font-size: 1.000em;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0em 0 1.875em 0;
  padding: 0 0 0.875em 0;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  line-height: 150%;
	height: 150px;
	resize: none;
  width: 100%;
`;

const SqButton = styled.button`
  background: none;
  border: solid 2px #9B8884;
  color: #5A5A5A;
  cursor: pointer;
  display: inline-block;
  font-family: 'Helvetica', Arial, sans-serif;
  font-size: 0.875em;
  font-weight: bold;
  outline: none;
  padding: 20px 35px;
  text-transform: uppercase;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
`;