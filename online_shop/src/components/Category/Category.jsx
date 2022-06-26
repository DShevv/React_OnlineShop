import React from "react";
import styled from "styled-components";
import { Query } from "@apollo/client/react/components";
import { GET_PRODUCT } from "../../queries/queries";
import Product from "./Product/Product";

const Container = styled.div`
  width: 100%;
  padding-bottom: 100px;
`;

const Title = styled.h1`
  margin-top: 80px;
  margin-bottom: 100px;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 160%;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const ItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 100px;
`;

class Category extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.category}</Title>
        <Query
          query={GET_PRODUCT}
          variables={{ category: this.props.category }}
        >
          {({ loading, error, data }) => {
            if (error) return <div>Error</div>;
            if (loading || !data) return <div>Loading..</div>;
            return (
              <ItemsContainer>
                {data.category.products.map((elem) => {
                  return <Product key={elem.id} data={elem} />;
                })}
              </ItemsContainer>
            );
          }}
        </Query>
      </Container>
    );
  }
}

export default Category;
