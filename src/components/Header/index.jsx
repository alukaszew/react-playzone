import React from 'react'
import styled from 'react-emotion'
import Navigation from './Nav'

const HeaderWrapper = styled('header')`
  display: block;
`

const Header = () =>
<HeaderWrapper>
  <Navigation />
</HeaderWrapper>

export default Header

