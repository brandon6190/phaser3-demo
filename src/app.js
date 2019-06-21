const gameCanvas = document.createElement('canvas');


const spaceImg = require('./assets/skies/space3.png');
const logoImg = require('./assets/sprites/logo.png');
const redParticleImg = require('./assets/particles/red.png');

gameCanvas.id = 'main-scene';
gameCanvas.style = 'border: 1px solid firebrick'

document.body.appendChild(gameCanvas);

const config = {
	type: Phaser.CANVAS,
	width: 800,
  height: 620,
  canvas: document.getElementById('main-scene'),
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		},
	},
	scene: {
		preload: preload,
		create: create,
	},
};

function preload() {
	this.load.setBaseURL('http://localhost:1234');

	this.load.image('sky', spaceImg);
	this.load.image('logo', logoImg);
  this.load.image('red', redParticleImg);
  
}

function create() {
	this.add.image(400, 300, 'sky');

	const particles = this.add.particles('red');
  
	const emitter = particles.createEmitter({
    speed: 50,
		scale: { start: 0.5, end: 0 },
		blendMode: 'ADD',
	});
  
  const logo = this.physics.add.image(400, 100, 'logo');

  logo.setVelocity(100, 200);
  logo.setBounce(1, 1);
  logo.setCollideWorldBounds(true);

	emitter.startFollow(logo);
}

const game = new Phaser.Game(config);

console.log('game.config = ', game.config);