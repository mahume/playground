import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import Navbar from './Navbar';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
  }
`

class App extends Component {
  render() {
    return ( 
      <Fragment>
        <GlobalStyle />
        <Navbar>
          <h1>Hello World</h1>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </Navbar>
      </Fragment>
    )
  }
}

export default App;