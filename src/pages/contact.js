import * as React from "react";
import { Button, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm";
import { FormspreeProvider } from '@formspree/react'

// Styled Components
const StyledContainer = styled(Container)`
  display: block;
  width: 75%;
  height: 100vh;
`

const StyledHeader = styled.h1 `
  color: #f1d302;
  font-weight: 700;
  text-align: center;
`

const StyledPara = styled.p `
  color: #fff;
  font-weight: 400;
  text-align: center;
`

const contact = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" name="viewport" content="width=device-width,initial-scale=1.0"></meta>
                <title>Robert Smith | Contact</title>
            </Helmet>
            <StyledContainer>
                <StyledHeader>Let's get in touch!</StyledHeader>
                <StyledPara>Want to work together or have a chat?</StyledPara>
                <FormspreeProvider project="1724893264047242891">
                  <ContactForm></ContactForm>
                </FormspreeProvider>
            </StyledContainer>
        </Layout>
    )
}

export default contact