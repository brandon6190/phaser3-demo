import Phaser from 'phaser';
import spaceImg from '../assets/skies/space3.png';
import logoImg from '../assets/sprites/logo.png';
import redParticleImg from '../assets/particles/red.png';

export default {

  key: 'boot',

  preload () {
    this.load.image('sky', spaceImg);
    this.load.image('logo', logoImg);
    this.load.image('red', redParticleImg);

    const rect = new Phaser.Geom.Rectangle(200, 285, 400, 30);
    const gfx = this.add.graphics();
    this.load.on('progress', (progress) => {
      gfx
        .clear()
        .fillStyle(0x666666)
        .fillRectShape(rect)
        .fillStyle(0xffffff)
        .fillRect(rect.x, rect.y, progress * rect.width, rect.height);
    });
  },

  create () {
    this.scene.start('menu');
  }
};
