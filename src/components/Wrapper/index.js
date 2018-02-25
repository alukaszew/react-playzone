import React from 'react'
import styled /* ,{ css } */ from 'react-emotion'
import Header from '../Header'
import Top from '../Top'

const ApplicationWrapper = styled('div')`
    background-color: #002577;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 1.5;
  font-family: Roboto;
  margin: 0;
  padding: 0 10px;
`

const MainContainer = styled('div')`
  background-color: #ffffff;
  border-radius: 6px 6px 0 0;
  display: block;
  height: 100vh;
  margin: 0 auto;
  width: 100%;
`

const Wrapper = () =>
<ApplicationWrapper>
  <Top />


  <MainContainer>
    <Header />
  </MainContainer>
</ApplicationWrapper>

export default Wrapper
