import React from 'react'
import styled /* ,{ css } */ from 'react-emotion'
import Header from '../Header'

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

const Wrapper = () =>
<ApplicationWrapper>
  <MainContainer>
    <Header />
  </MainContainer>
</ApplicationWrapper>

export default Wrapper
