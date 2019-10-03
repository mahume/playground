import React, { Component, Fragment } from 'react';
import Navbar from '../Navbar/index';
import { GlobalStyle, StyledMain } from './styles';


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
        <StyledMain>
          <p>Hey</p>
          <p>Hey</p>
          <p>Hey</p>
          <p>Hey</p>
          <p>Hey</p>
          <p>Hey</p>
        </StyledMain>
      </Fragment>
    )
  }
}

export default App;