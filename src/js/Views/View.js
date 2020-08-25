import 'bootstrap/js/dist/tooltip';
import $ from 'jquery';
export default class View {
  constructor() {
    this.nameCity = document.getElementById('header-name');
    this.description = document.getElementById('header-desc');
    this.img = document.getElementById('header-img');
    this.temperatue = document.getElementById('header-temp');
    this.humidity = document.getElementById('w-humidity');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
    this.btnConfirm = document.getElementById('btn-save');
    this.newName = document.querySelector('input.form-control');
  }

  get _getValue() {
    let newValue;
    if (this.newName.value.length === 0) {
      return this.newName.value;
    } else {
      return this.newName.value;
    }
  }

  bindChangeCity(handler) {
    this.btnConfirm.addEventListener('click', () => {
      if (this._getValue) {
        handler(this._getValue);
      } else {
        this.showTooltip();
      }
    });
  }

  showTooltip() {
    $('[data-toggle="tooltip"]').tooltip('show');
    setTimeout(function () {
      $('[data-toggle="tooltip"]').tooltip('hide');
    }, 3000);
  }
}
