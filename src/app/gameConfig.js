import Phaser from 'phaser';
import bootScene from './bootScene';
import menuScene from './menuScene';

const gameCanvas = document.createElement('canvas');

gameCanvas.id = 'game-world';
gameCanvas.style = 'border: 1px solid firebrick';

document.body.appendChild(gameCanvas);

export default {
  type: Phaser.CANVAS,
  width: 800,
  height: 620,
  canvas: document.getElementById('game-world'),
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: [bootScene, menuScene]
};
