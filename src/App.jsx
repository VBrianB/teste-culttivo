import { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import { createGlobalStyle } from 'styled-components';
import Container from './components/Container';

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Montserrat', sans-serif;
  }
  html, body, #root{
    height: 100%
  }
  b{
    font-weight: 800;
    color: white;
  }
`

const App = () => {

  return (
    <>
      <GlobalStyle />
      <Container/>
    </> 
  )
}

export default App
