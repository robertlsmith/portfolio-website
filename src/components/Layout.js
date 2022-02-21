import React from 'react'
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const StyledMain = styled.div`
  background: #161925;
  width: auto;
  height: auto;
  color: white;
`

function Wrapper(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default function Layout(props) {
    return (
        <StyledMain>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"></link>
            <Navbar/>
            <Wrapper>
                <main>{props.children}</main>
                <Footer/>
            </Wrapper>
        </StyledMain>
    )
}