import React from "react";
import styled from "styled-components";

import Currency from "./Currency/Currency";

const StyledActions = styled.div`
  height: 40px;
  display: flex;
  column-gap: 22px;
  float: right;
`;

class Actions extends React.Component {
  render() {
    return (
      <StyledActions>
        <Currency></Currency>
      </StyledActions>
    );
  }
}

export default Actions;
