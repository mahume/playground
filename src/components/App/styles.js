import styled, { createGlobalStyle } from "styled-components";
import { palette } from "../../utils/colorPalette";

export const GlobalStyle = createGlobalStyle`
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
export const StyledMain = styled.main`
  background-color: ${palette.primary};

  display: grid;
  grid-template-columns: 1fr 50% 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas: "...... ...... ......"
                       "...... center ......"
                       "...... ...... ......";
`
