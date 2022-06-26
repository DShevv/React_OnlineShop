import React from "react";

export const store = {
  bag: [],
  currency: "USD",
};

export const Context = React.createContext({
  bag: store.bag,
  currency: store.currency,

  addToBag: () => {},
  changeItem: () => {},
  setCurrency: () => {},
});
