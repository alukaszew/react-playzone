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
  border-radius: 6px 6px 0 0;
  background-color: #f3f3f3;
  color: #434343;
  display: block;
  margin: 0 5px 0 10px;
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

