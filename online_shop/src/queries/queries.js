import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
    }
  }
`;

export const GET_CURRENCY = gql`
  query GetCurrencies {
    currencies {
      label
      symbol
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProducts($category: String!) {
    category(input: { title: $category }) {
      name
      products {
        id
        name
        inStock
        brand
        description
        gallery
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

export const GET_DETAILS = gql`
  query GetProducts($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      brand
      description
      gallery
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
    }
  }
`;
