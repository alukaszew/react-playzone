import React from 'react'
import { string } from 'prop-types'
import styled from 'react-emotion'

const Link = props => <StyledLink href={props.url} title={props.text}>{props.text}</StyledLink>

Link.propTypes = {
  url: string,
  text: string,
}

Link.defaultProps = {
  url: '',
  text: '',
}

const StyledLink = styled('a')`
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

export default Link

