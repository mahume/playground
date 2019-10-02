import React from "react";
import { Wrapper } from "./styles";

const Navbar = (props) => {
  return (
    <Wrapper>{props.children}</Wrapper>
  )
}

export default Navbar;