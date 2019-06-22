export default {

  key: 'menu',

  create () {
    this.add.image(400, 300, 'space');

    const particles = this.add.particles('red');

    const emitter = particles.createEmitter({
      speed: 50,
      scale: { start: 0.5, end: 0 },
      blendMode: 'ADD'
    });

    const logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);

    this.input.on('pointerdown', () => {
      console.log('pointerdown was fired');
      this.scene.switch('play');
    }, this);
  }
};
