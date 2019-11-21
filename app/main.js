import ValuesController from "./Controllers/ValuesController.js";
import CarsController from "./Controllers/CarsController.js";

class App {
  valuesController = new ValuesController();
  carsController = new CarsController();

  homesConstroller = new HomesConstroller();
}

window["app"] = new App();
