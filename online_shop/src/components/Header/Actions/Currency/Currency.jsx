import React from "react";
import styled from "styled-components";
import arrow from "../../../../assets/arrow.svg";
import Item from "./Item/Item";
import { Query } from "@apollo/client/react/components";
import { GET_CURRENCY } from "../../../../queries/queries";
import { Context } from "../../../../context/Context";

const StyledCurrency = styled.div`
  height: 29px;
  width: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const SightCont = styled.div`
  display: flex;
`;

const Sight = styled.div`
  width: 32px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  color: #1d1f22;
`;

const Arrow = styled.img`
  transition: all 0.3s ease-in-out;
`;

const DropDown = styled.div`
  left: -10px;
  top: 31px;
  display: flex;
  position: absolute;
  flex-direction: column;
  height: 0px;
  background-color: #ffffff;
  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
  transition: all 0.5s ease-out;
  overflow: hidden;
`;

const DropDownActive = {
  height: "auto",
  padding: "5px 0px",
  transition: "all 0.2s ease-out",
  rowGap: "5px",
  width: "114px",
};

class Currency extends React.Component {
  constructor() {
    super();
    this.state = { opened: false };
  }

  toggle = () => {
    this.setState((prev, props) => ({
      opened: !prev.opened,
    }));
  };
  close = () => {
    this.setState({ opened: false });
  };

  render() {
    let { store } = this.context;

    return (
      <Query query={GET_CURRENCY}>
        {({ loading, error, data }) => {
          if (error) return <div>Error</div>;
          if (loading || !data) return <div>Loading..</div>;
          return (
            <Container>
              <StyledCurrency>
                <SightCont onClick={this.toggle}>
                  <Sight>
                    {
                      data.currencies.find(
                        (elem) => elem.label === store.currency
                      ).symbol
                    }
                  </Sight>
                  <Arrow
                    src={arrow}
                    style={
                      this.state.opened
                        ? { transform: "rotate(180deg)" }
                        : undefined
                    }
                  />
                </SightCont>
                <DropDown
                  style={this.state.opened ? DropDownActive : undefined}
                >
                  {data.currencies.map((elem) => {
                    return (
                      <Item
                        key={elem.symbol}
                        cur={elem.label}
                        close={this.close}
                      >
                        {elem.symbol} {elem.label}
                      </Item>
                    );
                  })}
                </DropDown>
              </StyledCurrency>
            </Container>
          );
        }}
      </Query>
    );
  }
}
Currency.contextType = Context;

export default Currency;
