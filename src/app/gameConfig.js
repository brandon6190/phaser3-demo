import Phaser from 'phaser';
import bootScene from './bootScene';
import menuScene from './menuScene';
import playScene from './playScene';

export default {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
			debug: false
		}
	},
	scene: [bootScene, menuScene, playScene]
};
