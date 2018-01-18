import React from 'react'
import styled from 'react-emotion'

const NavigationWrapper = styled('nav')`
  box-sizing: border-box;
  background-color: #002577;
  color: white;
  line-height: 50px;
  padding: 0 10px;
`

const LinksWrapper = styled('ul')`
    align-items: center;
    align-content: flex-start;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`

const Link = styled('li')`
    font-size: 12px;
    letter-spacing: 0.6px;
    font-weight: 700;
    padding: 0 15px;
    margin: 0;
`

const Navigation = () =>
    <NavigationWrapper>
        <LinksWrapper>
            <Link>Example Link</Link>
            <Link>Example Link</Link>
            <Link>Example Link</Link>
        </LinksWrapper>
    </NavigationWrapper>
export default Navigation
