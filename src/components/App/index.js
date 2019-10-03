import React, { Component, Fragment } from 'react';
import { GlobalStyle, StyledMain } from './styles';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
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