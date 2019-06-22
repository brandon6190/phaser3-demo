import Phaser from 'phaser';
import spaceImg from '../assets/skies/space3.png';
import skyImg from '../assets/skies/sky.png';
import starImg from '../assets/gameEnv/star.png';
import bombImg from '../assets/gameEnv/bomb.png';
import platformImg from '../assets/gameEnv/platform.png';
import logoImg from '../assets/sprites/logo.png';
import redParticleImg from '../assets/particles/red.png';
import dudeImg from '../assets/sprites/dude.png';

export default {
  key: 'boot',

  preload () {
    this.load.image('space', spaceImg);
    this.load.image('sky', skyImg);
    this.load.image('star', starImg);
    this.load.image('bomb', bombImg);
    this.load.image('platform', platformImg);
    this.load.image('logo', logoImg);
    this.load.image('red', redParticleImg);
    this.load.spritesheet('dude', dudeImg, { frameWidth: 32, frameHeight: 48 });

    const rect = new Phaser.Geom.Rectangle(200, 285, 400, 30);
    const gfx = this.add.graphics();
    this.load.on('progress', progress => {
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
