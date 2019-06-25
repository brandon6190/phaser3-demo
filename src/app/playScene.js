import Phaser from 'phaser';
let platforms;
let player;
let cursors;
let stars;
let score = 0;
let scoreText;

function collectStar (player, star) {
  star.disableBody(true, true);

  score += 10;
  scoreText.setText(`Score: ${score}`);
}

export default {
  key: 'play',

  create () {
    this.add.image(400, 300, 'sky');

    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'platform').setScale(2).refreshBody();

    platforms.create(600, 400, 'platform');
    platforms.create(50, 250, 'platform');
    platforms.create(750, 220, 'platform');

    player = this.physics.add.sprite(100, 450, 'dude').setSize(16, 48);

    player.setBounce(0.3);
    player.setCollideWorldBounds(true);

    this.physics.add.collider(player, platforms);

    cursors = this.input.keyboard.createCursorKeys();

    stars = this.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 }
    });

    stars.children.iterate(function (child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    this.physics.add.collider(stars, platforms);

    this.physics.add.overlap(player, stars, collectStar, null, true);

    scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '30px', fill: '#000' });
  },

  update () {
    if (cursors.left.isDown) {
      player.setVelocityX(-160);
      player.anims.play('left', true);
    } else if (cursors.right.isDown) {
      player.setVelocityX(160);
      player.anims.play('right', true);
    } else {
      player.setVelocityX(0);
      player.anims.play('turn', true);
    }

    if (cursors.up.isDown && player.body.touching.down) {
      player.setVelocityY(-275);
    }
  }
};
