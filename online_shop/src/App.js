import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header/Header";
import { Context, store } from "./context/Context";
import { Query } from "@apollo/client/react/components";

import { GET_CATEGORIES } from "./queries/queries";
import Category from "./components/Category/Category";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1240px;
  height: 100%;
  align-items: center;
`;

class App extends React.Component {
  constructor() {
    super();

    this.addToBag = (item) => {
      const itemIndex = this.state.bag.findIndex((elem) => elem.id === item.id);
      if (itemIndex !== -1) {
        this.setState((prev, props) => ({
          ...prev,
          bag: prev.bag.map((elem, index) => {
            if (elem.id === item.id) {
              elem.count += 1;
            }
            return elem;
          }),
        }));
      } else {
        this.setState((prev, props) => ({
          ...prev,
          bag: prev.bag.push({ ...item, count: 1 }),
        }));
      }
    };

    this.changeItem = (id, field, value) => {
      this.setState((prev, props) => ({
        ...prev,
        bag: prev.bag.map((elem) => {
          if (elem.id === id) {
            elem[field] = value;
          }
          return elem;
        }),
      }));
    };

    this.setCurrency = (currency) => {
      this.setState((prev, props) => ({
        ...prev,
        currency: currency,
      }));
    };

    this.state = {
      bag: store.bag,
      currency: store.currency,
      addToBag: this.addToBag,
      changeItem: this.changeItem,
      setCurrency: this.setCurrency,
    };
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <BrowserRouter>
          <Query query={GET_CATEGORIES}>
            {({ loading, error, data }) => {
              if (error) return <div>Error</div>;
              if (loading || !data) return <div>Loading..</div>;
              return (
                <Wrapper>
                  <Header navData={data.categories} />
                  <Routes>
                    {data.categories.map((elem, index) => {
                      if (index === 0) {
                        return (
                          <Route
                            key={elem}
                            path="/"
                            element={<Category category={elem.name} />}
                          >
                            <Route path=":id" element={<div>item</div>} />
                          </Route>
                        );
                      } else {
                        return (
                          <Route
                            key={elem}
                            path={elem.name}
                            element={<Category category={elem.name} />}
                          >
                            <Route path=":id" element={<div>item</div>} />
                          </Route>
                        );
                      }
                    })}
                  </Routes>
                </Wrapper>
              );
            }}
          </Query>
        </BrowserRouter>
      </Context.Provider>
    );
  }
}

export default App;
