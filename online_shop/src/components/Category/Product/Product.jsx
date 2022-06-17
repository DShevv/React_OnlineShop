import React from "react";
import styled from "styled-components";
import { Context } from "../../../context/Context";
import iconCard from "../../../assets/AddToCard.svg";
import { NavLink } from "react-router-dom";

const AddTo = styled.button`
  position: absolute;
  right: 30px;
  bottom: 72px;
  height: 52px;
  width: 52px;
  border-radius: 100%;
  border: none;
  outline: none;
  background: #5ece7b;
  background-image: url(${iconCard});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 24px;
  filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
  transition: all 0.2s ease-in;
  opacity: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.07);
  }
`;

const Container = styled(NavLink)`
  position: relative;
  height: 444px;
  width: 386px;
  padding: 16px;
  background-color: #ffffff;
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
  }

  &:hover ${AddTo} {
    opacity: ${(props) => (props.stock ? "1" : "0")};
  }

  &.out {
    filter: opacity(0.5);
    cursor: default;

    &::after {
      content: "OUT OF STOCK";
      position: absolute;
      top: 50%;
      left: 50%;

      text-transform: uppercase;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 160%;
      color: #000000;

      transform: translate(-50%, -50%);
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 330px;
  object-fit: contain;
`;

const Caption = styled.div`
  margin-top: 24px;
  width: 100%;
`;

const Title = styled.h5`
  width: 100%;
  height: 29x;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 160%;
  color: #1d1f22;
`;

const Price = styled.div`
  width: 100%;
  height: 29px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 160%;
  color: #1d1f22;
`;

class Product extends React.Component {
  render() {
    return (
      <Container
        to={this.props.data.id}
        stock={this.props.data.inStock ? 1 : 0}
        className={this.props.data.inStock ? "" : "out"}
      >
        <Image src={this.props.data.gallery[0]} alt={this.props.data.name} />
        <Caption>
          <Title>
            {this.props.data.brand} {this.props.data.name}
          </Title>
          <Price>
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
          </Price>
        </Caption>
        <AddTo />
      </Container>
    );
  }
}

export default Product;
