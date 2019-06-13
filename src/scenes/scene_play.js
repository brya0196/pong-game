import Palas from '../gameObjects/palas.js';

class ScenePlay extends Phaser.Scene {
    constructor() {
        super({ key: 'ScenePlay' });
    }

    create() {
        let centerWidth = this.sys.game.config.width / 2;
        let centerHeight = this.sys.game.config.height / 2;

        //separador
        this.add.image( centerWidth, centerHeight, "separador");

        //palas
        this.izquierda = new Palas(this, 30, centerHeight, "izquierda");
        this.derecha = new Palas(this, this.sys.game.config.width - 30 , centerHeight, "derecha");
        
        //bola
        this.physics.world.setBoundsCollision(false, false, true, true);
        this.ball = this.physics.add.image(centerWidth, centerHeight, "ball");
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        this.ball.setVelocityX(-180);

        // Fisicas
        this.physics.add.collider(this.ball, this.izquierda, this.chocaPala, null, this);
        this.physics.add.collider(this.ball, this.derecha, this.chocaPala, null, this);
    }

    chocaPala() {
        
    }
}

export default ScenePlay;