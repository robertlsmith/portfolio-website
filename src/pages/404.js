import * as React from "react"
import { Button, Container } from "react-bootstrap"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Layout from "../components/Layout"

// Styled Components
const StyledContainer = styled(Container)`
  width: 100%;
  height: 100vh;
  padding-top: 20px;
  padding-bottom: 100px;
`

const StyledDiv = styled.div`
  text-align: center;
  margin-bottom: 40px;
`

const StyledH1 = styled.h1`
  margin-top: 20px;
  max-width: auto;
  color: #f1d302;
  font-size: 100px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
`

const StyledP = styled.p`
  padding: 20px 10vw;
  text-align: center;
  font-size: 20px;
`

const StyledButton = styled(Button)`
  color: #161925;
  background: white;
  border-style: none;
  text-align: center;
  display: inline-block;
  padding: 10px 20px;
  transition: all 0.25s;
  
  &:hover {
    color: #161925;
    background: #f1d302;
    filter: drop-shadow(0px 0px 5px #fae140);
    transition: filter 0.25s;
  }
`

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" name="viewport" content="width=device-width,initial-scale=1.0"></meta>
        <title>404: Page Not Found</title>
      </Helmet>
      <StyledContainer>
        <title>Not found</title>
        <StyledH1>404: Page Not Found</StyledH1>
        <StyledP>Yikes! It looks like there's no page here. Check that you've searched for the right item or click the button below to go...</StyledP>
        <StyledDiv>
          <StyledButton href="/">Back Home</StyledButton>
        </StyledDiv>
      </StyledContainer>
    </Layout>
  )
}

export default NotFoundPage
