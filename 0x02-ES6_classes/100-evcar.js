import Car from './10-car';

export default class EVCar extends Car {
  constructor(band, motor, color, range) {
    super(band, motor, color);
    this._range = range;
  }

  cloneCar() {
    const Clone = super.constructor[Symbol.species];
    return new Clone();
  }
}
