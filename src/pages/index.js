import * as React from "react"
import { Helmet } from "react-helmet"
import 'bootstrap/dist/css/bootstrap.min.css';
import Me from "../images/me.png"
import styled from "styled-components";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import Layout from "../components/Layout"

// Styled Components
const StyledContainer = styled(Container)`
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  overflow: hidden;

`

const StyledImage = styled(Image)`
  max-width: 100%;
  border: 4px solid #f1d302;
  transition: ease 0.15s;

  &:hover {
    transition: ease 0.15s;
    border: 0px solid #f1d302;
    opacity: 1;
  }
`

const StyledImgCol = styled(Col)  `
  flex-basis: 40%;
`

const StyledTextbox = styled(Col) `
  flex-basis: 60%;
`

const StyledSubtext = styled.h2 `
  color: #fff;
  font-weight: 400;
  font-size: 28px;
`
const StyledHeader = styled.h1 `
  color: #f1d302;
  font-weight: 700;
  font-size: 42px;
`
const StyledPara = styled.p `
  color: #fff;
  font-weight: 300;
  font-size: 18px;
`

const StyledButtonRow = styled(Row) `
  
`
const StyledButtonCol = styled(Col) `
  padding-top: 10px;
`

const StyledButton = styled(Button)`
  color: #f1d302;
  background: transparent;
  border: 1px solid #f1d302;
  text-align: center;
  padding: 15px 15px;
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

// Markdown
const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" name="viewport" content="width=device-width,initial-scale=1.0"></meta>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Robert Smith"/>
        <meta property="og:description" content="Portfolio website for Robert Smith"/>
        <meta property="og:image" content="../images/me.png"/>
        <meta property="og:url" content="https://codewithsmith.com"/>

        <title>Robert Smith | Developer and UI Designer</title>
      </Helmet>
      <StyledContainer>
        <Row>
          <StyledTextbox xs="auto">
            <StyledSubtext>Hi, nice to meet you!</StyledSubtext>
            <StyledHeader>My name is Robert</StyledHeader>
            <StyledPara>I am a current computer science student with 4+ years of programming and design experience. I have designed and developed mobile and web applications primarily using React and other relevant frameworks. I am seeking opportunities in software development/engineering.</StyledPara>
            <StyledButtonRow xs="auto">
              <StyledButtonCol>
                <StyledButton href="/portfolio">My Work</StyledButton>
              </StyledButtonCol>
              <StyledButtonCol>
                <StyledButton href="/contact">Contact Me</StyledButton>
              </StyledButtonCol>
            </StyledButtonRow>
          </StyledTextbox>
          <StyledImgCol xs="auto">
            <StyledImage src={Me} rounded></StyledImage>
          </StyledImgCol>
        </Row>
      </StyledContainer>
    </Layout>
  )
}

export default IndexPage
