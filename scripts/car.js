'use strict';

class Car {

  constructor(car, speed, x, y) {
    this.carSprite = document.querySelector(car);
    this.speed = speed;
    this.positionX = x;
    this.positionY = y;
    this.rotation = 180;
    this.render();
    this.controls = {};

    document.addEventListener('keydown', this.move);
  }

  moveUp() {
    this.positionY -= this.speed;
    this.rotation = 90;
  }

  moveDown() {
    this.positionY += this.speed;
    this.rotation = 270;
  }

  moveLeft() {
    this.positionX -= this.speed;
    this.rotation = 0;
  }

  moveRight() {
    this.positionX += this.speed;
    this.rotation = 180;
  }

  render() {
    this.carSprite.style.top = `${this.positionY}px`;
    this.carSprite.style.left = `${this.positionX}px`;
    this.carSprite.style.transform = `rotate(${this.rotation}deg)`;
  }

  move = (e) => {
    switch (e.keyCode) {
        case this.controls[0]:
            this.moveLeft();
            this.render();
            break;
        case this.controls[1]:
            this.moveRight();
            this.render();
            break;
        case this.controls[2]:
            this.moveUp();
            this.render();
            break;
        case this.controls[3]:
            this.moveDown();
            this.render();
            break;
        case 13:
            this.pedalToTheMetal();
            break;
    }
  }

  pedalToTheMetal() {
    this.moveRight();
    this.render();
    if (this.positionX < document.body.clientWidth) {
      this.pedalToTheMetal();
    }
  }
}
