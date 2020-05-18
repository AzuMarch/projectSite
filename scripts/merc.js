'use strict';

class Merc extends Car {
  constructor() {
    super('.merc', 40, 30, 200);
    this.controls = [37, 39, 38, 40];
  }
}
