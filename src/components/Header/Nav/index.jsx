import React from 'react'
import styled from 'react-emotion'
import LinkList from './_List'

// Just mockup of data ;-)
const data = [
  '/news',
  '/articles',
  '/contact',
  '/help',
]

const Navigation = () => (
  <NavigationWrapper>
    <LinksWrapper>
      <LinkList {...data} />
    </LinksWrapper>
  </NavigationWrapper>
)

const NavigationWrapper = styled('nav')`
  box-sizing: border-box;
  background-color: #002577;
  line-height: 70px;
`

const LinksWrapper = styled('ul')`
  align-items: center;
  align-content: flex-start;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`


export default Navigation
