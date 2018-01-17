import React, { Component } from 'react'
import Header from '../Header'
import styled, { css } from 'react-emotion'


const ApplicationWrapper = styled('div')`
  background-color: #fafafa;
  font-size: 12px;
  line-height: 1.5;
  font-family: Roboto;
  margin: 0;
  padding: 0;
`

const MainContainer = styled('div')`
  background-color: #ffffff;
  display: block;
  height: 100vh;
  margin: 0 auto;
  width: 1200px;
`

export default class Wrapper extends Component {
  render() {
    return (
      <ApplicationWrapper>
        <MainContainer>
          <Header></Header>
        </MainContainer>
      </ApplicationWrapper>
    )
  }
}
