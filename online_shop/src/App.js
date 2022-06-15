import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header/Header";
import { Context } from "./context/Context";
import { Query } from "@apollo/client/react/components";

import Store from "./store/store";
import { GET_CATEGORIES } from "./queries/queries";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1240px;
  height: 100%;
  align-items: center;
`;

const store = new Store();

class App extends React.Component {
  render() {
    return (
      <Context.Provider value={{ store }}>
        <BrowserRouter>
          <Query query={GET_CATEGORIES}>
            {({ loading, error, data }) => {
              if (error) return <div>Error</div>;
              if (loading || !data) return <div>Loading..</div>;
              return (
                <Wrapper>
                  <Header navData={data.categories} />
                  <Routes>
                    <Route path="/" element={<div />} />
                    <Route
                      path={data.categories[1].name}
                      element={<div>clothes</div>}
                    />
                    <Route
                      path={data.categories[2].name}
                      element={<div>tech</div>}
                    />
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
