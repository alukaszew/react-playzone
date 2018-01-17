import React from 'react'
import styled from "react-emotion";

const HeaderWrapper = styled('header')`
  display: block;
`

const Navigation = styled('nav')`
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
    padding: 0 15px;
    margin: 0;
`

const Header = () =>
    <HeaderWrapper>
        <Navigation>
            <LinksWrapper>
                <Link>Example Link</Link>
                <Link>Example Link</Link>
                <Link>Example Link</Link>
            </LinksWrapper>
        </Navigation>
    </HeaderWrapper>

export default Header
