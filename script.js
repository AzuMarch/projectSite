'use strict';

const carSprite = document.querySelector('.player-car');
document.addEventListener('keydown', e => {
  car.move(e);
  car.render();
});

const car = {
  positionX: 0,
  positionY: 0,
  rotation: 0,

  moveUp() {
    this.positionY -= 10;
    this.rotation = 90;
  },

  moveDown() {
    this.positionY += 10;
    this.rotation = 270;
  },

  moveLeft() {
    this.positionX -= 10;
    this.rotation = 0;
  },

  moveRight() {
    this.positionX += 10;
    this.rotation = 180;
  },

  render() {
    carSprite.style.top = `${this.positionY}px`;
    carSprite.style.left = `${this.positionX}px`;
    carSprite.style.transform = `rotate(${this.rotation}deg)`;
  },

  move(e) {
    switch (e.keyCode) {
        case 37:
            this.moveLeft();
            break;
        case 38:
            this.moveUp();
            break;
        case 39:
            this.moveRight();
            break;
        case 40:
            this.moveDown();
            break;
    }
  }
};
