import Value from "./Models/Value.js";
import Car from "./Models/Car.js";
import Home from "./Models/Home.js;";

let _state = {
  activeValue: new Value({ title: "something" }),
  /** @type {Value[]} */
  values: [],
  cars: [new Car({ make: "Chevy", model: "Tracker", year: 1989, price: 2000 })],
  home: [
    new Home({ hometype: "single family", price: 250000, beds: 2, rooms: 3 })
  ]
};

//NOTE You should not need to change the code from this point down

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const store = new Store();
export default store;
