import '../css/main.scss';
import 'bootstrap';
import View from './Views/View';
import { getWeather } from './Modal/apiCall';

class Controller {
  constructor(View) {
    this.view = View;
    this.initWeather();
    this.view.bindChangeCity(this.onHandleChangeCity);
  }
  initWeather() {
    getWeather('Warszawa')
      .then((res) => this.view.displayWeather(res))
      .catch((err) => console.log(err));
  }
  onHandleChangeCity(obj, ondisplayWeather, onTooltip, onCloseModal) {
    getWeather(obj)
      .then((res) => ondisplayWeather(res), onCloseModal())
      .catch((err) => onTooltip(err));
  }
}

const app = new Controller(new View());
