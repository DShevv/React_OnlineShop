export default class Store {
  bag = [];
  currency = "USD";

  addToBag(item) {
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
  }
}
