import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const Title = styled.div`
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #1d1f22;
`;

const SwitcherContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: ${(props) => (props.text ? "12px" : "8px")};
`;

const Button = styled.button`
  width: 63px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  background-color: ${(props) => (props.active ? "#1D1F22" : "#FFFFFF")};
  color: ${(props) => (props.active ? "#FFFFFF" : "#1d1f22")};
  border: 1px solid #1d1f22;
  transition: all 0.2s ease;
  outline: none;
  cursor: pointer;

  &.swatch {
    width: 36px;
    height: 36px;
    border: solid 1px #ffffff;
    background-color: ${(props) => props.color};

    box-shadow: ${(props) =>
      props.active ? "0px 0px 0px 1px rgba(94, 206, 123, 1)" : "none"};
  }
`;

class SelectorText extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.attr.name}</Title>
        <SwitcherContainer text={this.props.attr.type === "text"}>
          {this.props.attr.items.map((elem) => (
            <Button
              key={elem.value}
              active={this.props.selected[this.props.attr.name] === elem.value}
              className={this.props.attr.type === "text" ? "" : "swatch"}
              color={elem.value}
              onClick={(e) => {
                this.props.change(this.props.attr.name, elem.value);
              }}
            >
              {this.props.attr.type === "text" ? elem.value : ""}
            </Button>
          ))}
        </SwitcherContainer>
      </Container>
    );
  }
}

export default SelectorText;
