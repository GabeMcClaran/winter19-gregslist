import _store from "../store.js";
import Home from "../Models/Home.js";
// import Car from "../Models/Car.js"

class HomeService {
  addHome(homeData) {
    let home = new Home(homeData);
    _store.State.home.push(home);
    console.log(_store.State.home);
  }
}

const HOMESERVICE = new HomeService();
export default HOMESERVICE;
