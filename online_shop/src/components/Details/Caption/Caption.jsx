import React from "react";
import styled from "styled-components";
import { Context } from "../../../context/Context";
import SelectorText from "./SelectorText/SelectorText";

const Container = styled.div`
  width: 292px;
  display: flex;
  flex-direction: column;
`;

const Brand = styled.h1`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  color: #1d1f22;
`;

const Name = styled.h2`
  margin-top: 16px;
  margin-bottom: 43px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 27px;
  color: #1d1f22;
`;

const PriceTitle = styled.div`
  width: 100%;
  margin-top: 36px;
  margin-bottom: 10px;
  font-family: "Roboto Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #1d1f22;
`;
const Price = styled.div`
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 18px;

  color: #1d1f22;
`;

const CartButton = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  text-transform: uppercase;
  border: none;
  background-color: #5ece7b;
  color: #ffffff;
  cursor: pointer;
  transition: color 0.2s ease, background-color 0.2s ease;

  &:hover {
    color: #5ece7b;
    border: solid 2px #5ece7b;
    background-color: transparent;
  }

  &:disabled {
    color: #5ece7b;
    border: solid 2px #5ece7b;
    background-color: transparent;
    cursor: default;
  }
`;

const Description = styled.div`
  margin-top: 40px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 159.96%;
  color: #1d1f22;
`;

class Caption extends React.Component {
  constructor(props) {
    super(props);

    const product = props.data;
    const attributes = {};
    product.attributes.forEach((elem) => {
      attributes[elem.name] = elem.items[0].value;
    });
    this.state = { ...attributes };
  }

  componentDidMount() {
    console.log(this.state);
    console.log(this.props.data);
  }

  changeAtrs = (name, value) => {
    this.setState((prev, props) => ({ ...prev, [name]: value }));
  };

  render() {
    const product = this.props.data;
    return (
      <Container>
        <Brand>{product.brand}</Brand>
        <Name>{product.name}</Name>
        {product.attributes.map((elem) => (
          <SelectorText
            key={elem.id}
            attr={elem}
            selected={this.state}
            change={this.changeAtrs}
          />
        ))}
        <PriceTitle>Price</PriceTitle>
        <Context.Consumer>
          {(store) => (
            <Price>
              {
                this.props.data.prices.find((elem) => {
                  return elem.currency.label === store.currency;
                }).currency.symbol
              }
              {
                this.props.data.prices.find((elem) => {
                  return elem.currency.label === store.currency;
                }).amount
              }
            </Price>
          )}
        </Context.Consumer>
        <Context.Consumer>
          {(store) => (
            <CartButton
              disabled={!product.inStock}
              onClick={(e) => {
                store.addToBag({
                  ...product,
                  selected: this.state,
                });
              }}
            >
              {product.inStock ? "Add to cart" : "out of stock"}
            </CartButton>
          )}
        </Context.Consumer>
        <Description
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></Description>
      </Container>
    );
  }
}

export default Caption;
