import React from "react";
import styled from "styled-components";
import { Context } from "../../../../../context/Context";

const StyledItem = styled.div`
  width: 100%;
  height: 45px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  background-color: #ffffff;
  line-height: 160%;
  transition: all 0.2s ease-in-out;
  opacity: inherit;

  &:hover {
    cursor: pointer;
    background: #eeeeee;
  }
`;

class Item extends React.Component {
  render() {
    let { store } = this.context;
    return (
      <StyledItem
        onClick={(e) => {
          store.setCurrency(this.props.cur);
          this.props.close();
        }}
      >
        {this.props.children}
      </StyledItem>
    );
  }
}
Item.contextType = Context;

export default Item;
