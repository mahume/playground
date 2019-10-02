import React from "react";
import styled from "styled-components";

const Wrapper = styled.nav`
  height: 10vh;
  width: 100%;
  background: gray;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Navbar = (props) => {
  return (
    <Wrapper>{props.children}</Wrapper>
  )
}

export default Navbar;