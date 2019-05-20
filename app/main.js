import TriviaController from "./components/TriviaController.js";

class App {
  constructor() {
    this.controllers = {
      trivController: new TriviaController()
    }
  }
}
window['app'] = new App