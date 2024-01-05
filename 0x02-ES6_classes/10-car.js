export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Symbol.species to get the constructor of the class
  static get [Symbol.species]() {
    return this;
  }

  // Clone method
  cloneCar() {
    // Use Symbol.species to get the constructor
    const Clone = this.constructor[Symbol.species];

    // Create a new instance of the same species (class)
    return new Clone();
  }
}
