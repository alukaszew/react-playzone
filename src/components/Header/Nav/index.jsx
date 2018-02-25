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
      <LinkList data={data} />
    </LinksWrapper>
  </NavigationWrapper>
)

const NavigationWrapper = styled('nav')`
  box-sizing: border-box;
  background-color: #b2b2b2;
  border-radius: 6px 6px 0 0;
  line-height: 40px;
`

const LinksWrapper = styled('ul')`
  align-items: center;
  align-content: flex-start;
  box-sizing: border-box;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 20px 0 0;
`


export default Navigation
