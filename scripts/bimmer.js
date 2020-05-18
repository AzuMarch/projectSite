'use strict';

class Bimmer extends Car {
  constructor() {
    super('.another-car', 30, 30, 100);
    this.controls = [65, 68, 87, 83];
  }
}
