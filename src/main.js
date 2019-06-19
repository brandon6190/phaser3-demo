const gameCanvas = document.createElement('canvas');

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
	this.load.setBaseURL('http://localhost:3000');

	this.load.image('sky', 'assets/skies/space3.png');
	this.load.image('logo', 'assets/sprites/logo.png');
	this.load.image('red', 'assets/particles/red.png');
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