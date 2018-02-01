import React from 'react'
import styled from 'react-emotion'

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

const Item = styled('li')`
  font-size: 14px;
  letter-spacing: 0.6px;
  font-weight: 400;
  margin: 0;
`

const Link = styled('a')`
  color: white;
  display: block;
  height: 100%;
  padding: 0 35px;
  text-decoration: none;
  text-transform: capitalize;
    
  &:hover {
    color: #002577;
    background-color: #fff;
    box-shadow: inset 0px -13px 13px -13px rgba(0,0,0,0.19);
  }
`

// Just mockup of data ;-)

const dataList = [
  '/news',
  '/articles',
  '/contact',
  '/help',
]

const linkList = dataList.map(item =>
  <Item key={item.id}>
    <Link href={item} title="Test title">
      {item.slice(1)}
    </Link>
  </Item>)

const Navigation = () => (
  <NavigationWrapper>
    <LinksWrapper>
      { linkList }
    </LinksWrapper>
  </NavigationWrapper>
)

export default Navigation
