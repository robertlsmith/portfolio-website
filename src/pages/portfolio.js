import * as React from "react";
import { Button, Container, Card, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Layout from "../components/Layout"
import { MenuItems } from "../components/MenuItems";
import agora from "../images/agora_preview.png"
import weatherfy from "../images/weatherfy_preview.png"

// Styled Components
const StyledContainer = styled(Container) `
  width: 100%;
  padding-bottom: 100px;
  padding-right: 100px;
  padding-left: 100px;
  text-align: center;
`

const StyledHeader = styled.h1 `
    color: #f1d302;
    font-weight: 700;
    text-align: center;
    padding-bottom: 30px;
`


const portfolio = () => {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" name="viewport" content="width=device-width,initial-scale=1.0"></meta>
                <title>Robert Smith | Portfolio</title>
            </Helmet>
            <StyledContainer>
                <StyledHeader>My Work</StyledHeader>
                <div className="project-items">
                    <Row xs="auto">
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={agora} alt="Project Preview"></Card.Img>
                                <Card.Body>
                                    <Card.Title style={{ color: '#000' }}>Agora</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">JavaScript, CSS</Card.Subtitle>
                                    <Card.Text style={{ color: '#000' }}>
                                        Website (team project) built for InternHacks hackathon using Gatsby/React, Firebase, react-bootstrap, and styled-components.
                                    </Card.Text>
                                    <Button href="https://github.com/robertlsmith/agora" target="_blank">Go</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem'}}>
                                <Card.Img variant="top" src={weatherfy}alt="Project Preview"></Card.Img>
                                <Card.Body>
                                    <Card.Title style={{ color: '#000' }}>Agora</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">HTML, JavaScript, CSS</Card.Subtitle>
                                    <Card.Text style={{ color: '#000' }}>
                                        A simple weather website created for my partner's and my final Google CSSI project. It pulls weather data from the OpenWeatherMap API in order to show the weather for the user's geographical location. I coded the JavaScript for it and implemented said API into the project. I also did a bit of the HTML and CSS in collaboration with my partner.
                                    </Card.Text>
                                    <Button href="https://github.com/robertlsmith/weatherfy" target="_blank">Go</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>  
                </div>
            </StyledContainer>
        </Layout>
    )
}

export default portfolio