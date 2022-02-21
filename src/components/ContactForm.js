import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';

const StyledP = styled.p `
    margin-top: 40px;
    text-align: center;
    color: #fff;
`

const StyledForm = styled(Form) `
    display: block;
`

const StyledTop = styled.div `
    margin-top: 40px;
    margin-bottom: 40px;
`

const StyledBottom = styled.div `
    margin-top: 20px;
    margin-bottom: 40px;
`

const StyledButtonDiv = styled.div `
    text-align: center;
    margin-bottom: 40px;
`

const StyledButton = styled(Button) `
  color: #f1d302;
  background: transparent;
  border: 1px solid #f1d302;
  text-align: center;
  padding: 10px 20px;
  transition: all 0.25s;
  font-size: 18px;

  &:hover {
    color: #161925;
    background: #f1d302;
    border: 1px solid #f1d302;
    filter: drop-shadow(0px 0px 5px #fae140);
    transition: filter 0.25s;
  }
`

function ContactForm() {
    const [state, handleSubmit] = useForm("contactForm");

    if (state.succeeded) {
        return <StyledP>Thank you for your submission. I will get back to you ASAP!</StyledP>;
    }
    
    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledTop>
                <Row className="g-3">
                    <Col md>
                        <Form.Label hidden>Name</Form.Label>
                        <Form.Control id="name" type="name" name="name" placeholder="Name"/>
                    </Col>
                    <Col md>
                        <Form.Label hidden>Email</Form.Label>
                        <Form.Control id="email" type="email" name="email" placeholder="Email"/>
                        <ValidationError prefix="Email" field="email" errors={state.errors}/>
                    </Col>
                    <Col md>
                        <Form.Label hidden>Phone Number</Form.Label>
                        <Form.Control id="tel" type="tel" name="tel" placeholder="Phone Number"/>
                    </Col>
                </Row>
            </StyledTop>
            <StyledBottom>
                <Form.Label hidden>Message</Form.Label>
                <Form.Control as="textarea" name="message" placeholder="Your message..."/>
                <ValidationError prefix="Message" field="message" errors={state.errors}/>
            </StyledBottom>
            <StyledButtonDiv>
                <StyledButton type="submit" disabled={state.submitting}>Send</StyledButton>
            </StyledButtonDiv>
        </StyledForm>
    )
}

export default ContactForm