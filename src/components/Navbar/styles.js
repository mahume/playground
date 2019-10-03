import styled from "styled-components";
import { palette } from "../../utils/colorPalette";

export const Wrapper = styled.nav`
  height: 10vh;
  width: 100%;
  background: ${palette.primary};
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`