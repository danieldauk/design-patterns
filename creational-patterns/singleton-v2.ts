class Store {
  private static instance: Store;

  constructor() {
    if (!Store.instance) {
      Store.instance = this;
    }

    return Store.instance;
  }
}

const clientCode = () => {
  const store1 = new Store();
  const store2 = new Store();

  if (store1 === store2) {
    console.log('store is singleton');
  }
}

clientCode(); // store is singleton

export {}
