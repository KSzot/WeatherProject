import '../css/main.scss';
import 'bootstrap';
import View from './Views/View';
import { getWeather } from './Modal/apiCall';

class Controller {
  constructor(View) {
    this.view = View;
    this.view.bindChangeCity(this.onHandleChangeCity);
  }

  onHandleChangeCity(obj) {
    getWeather(obj)
      .then((result) => {
        if (!result.ok) throw result;
        return result.json();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log('Error occurred');
        try {
          error.json().then((body) => {
            //Here is already the payload from API
            console.log(body);
          });
        } catch (e) {
          console.log('Error parsing promise');
          console.log(error);
        }
      });
  }
}

const app = new Controller(new View());
