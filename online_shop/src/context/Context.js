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

  /* addToBag(item) {
    const itemIndex = this.bag.findIndex((elem) => elem.id === item.id);
    if (itemIndex !== -1) {
      this.bag[itemIndex].count += 1;
    } else {
      this.bag.push({ ...item, count: 1 });
    }
  }

  changeItem(id, field, value) {
    this.bag[this.bag.findIndex((elem) => elem.id === id)][field] = value;
  }

  setCurrency(currency) {
    this.currency = currency;
  } */
});
