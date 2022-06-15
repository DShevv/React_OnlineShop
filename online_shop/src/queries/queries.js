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
