import * as React from "react";
import { Container, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import styled from "styled-components"
import Layout from "../components/Layout"

// Styled Components
const StyledContainer = styled(Container)`
  width: 100%;
  height: 100vh;
  padding-bottom: 100px;
`

const StyledHeader = styled.h1 `
    color: #f1d302;
    font-weight: 700;
    text-align: center;
    margin-bottom: 40px;
`

const StyledPara = styled.p `
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  margin-left: 100px;
  margin-right: 100px;
`

const StyledButtonDiv = styled.div `
    text-align: center;
    margin-top: 40px;
`

const StyledButton = styled(Button)`
  color: #f1d302;
  background: transparent;
  border: 1px solid #f1d302;
  text-align: center;
  display: inline-block;
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

const about = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" name="viewport" content="width=device-width,initial-scale=1.0"></meta>
                <title>Robert Smith | About</title>
            </Helmet>
            <StyledContainer>
                <StyledHeader>About Me</StyledHeader>
                <StyledPara>
                  I am a second-year computer science and engineering major at the University of Nevada, Reno. I have 5+ years of programming and design experience. I have designed and developed mobile and web applications primarily using React and other relevant frameworks. I am seeking opportunities in software development/engineering.
                </StyledPara>
                <StyledPara>
                  I have some high school experience with Java as well as college experience with C and C++.
                </StyledPara>
                <StyledButtonDiv>
                  <StyledButton href="https://drive.google.com/file/d/1F-7-Z8ATU8MS8H-zer7nJoiH9iptmWJq/view?usp=sharing" target="_blank">My Resume</StyledButton>
                </StyledButtonDiv>
            </StyledContainer>
        </Layout>
    )
}

export default about