const config = {
  type: Phaser.AUTO,
  width: 800,
  heigth: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload: preload,
    create: create
  }
}

const game = new Phaser.Game(config);

function preload() {
  this.load.setBaseURL('http://localhost:3000');

  this.load.image('sky', '../skies/space3.png');
  this.load.image('logo', '../sprites/logo.png');
  this.load.image('red', '../particles/index.png');
}

function create() {
  this.add.image(400, 300, 'sky');

  const particles = this.add.particles('red');

  const emitter = particles.createEmitter({
    speed: 50,
    scale: { start: 0.5, end: 0 },
    blendMode: 'ADD'
  });

  const logo = this.physics.add.image(400, 100, 'logo');

  logo.setVelocity(100, 200);
  logo.setBounce(1,1);
  logo.setCollideWorldBounds(true);

  emitter.startFollow(logo);
}