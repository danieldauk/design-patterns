class Store {
  private static instance: Store;
  private data: any

  private constructor() {}

  public static getInstance() {
    if (!Store.instance) {
      Store.instance = new Store();
    }

    return Store.instance;
  }

  getData() {
    return this.data;
  }

  setData(data: any) {
    this.data = data;
  }
}

const clientCode = () => {
  const store1 = Store.getInstance();
  const store2 = Store.getInstance();

  if (store1 === store1) {
    console.log('Both variables contain the same instance');
  }

  const data1 = {
    field1: 'field1',
  };
  store1.setData(data1);

  if (store1.getData() === data1 && store1.getData() === store2.getData()) {
    console.log('Both stores have same data that was set on store1');
  }

  const data2 = {
    field2: 'field2',
  };
  store2.setData(data2);

  if (store2.getData() === data2 && store1.getData() === store2.getData()) {
    console.log('Both stores have same data that was set on store2');
  }
  
}

clientCode();

export {}
