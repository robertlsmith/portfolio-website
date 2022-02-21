import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
    text-align: center;
    font-size: 14px;
    padding-bottom: 40px;
`

const StyledLink = styled.a`
    text-decoration: none;
    color: #fff;

    &:hover {
        color: #f1d302;
    }
`

export default function Footer() {
    return (
        <StyledFooter>
            © {new Date().getFullYear()},
            {` `}
            <StyledLink href="https://www.github.com/robertlsmith" target="_blank">Robert Smith</StyledLink>
        </StyledFooter>
    )
}