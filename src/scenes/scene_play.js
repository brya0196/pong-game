class ScenePlay extends Phaser.Scene {
    constructor() {
        super({ key: 'ScenePlay' });
    }

    create() {
        let centerWidth = this.sys.game.config.width / 2;
        let centerHeight = this.sys.game.config.height / 2;

        this.add.image( centerWidth, centerHeight, "separador");

        this.izquierda = this.add.image(30, centerHeight, "izquierda");
        this.derecha = this.add.image(this.sys.game.config.width - 30 , centerHeight, "derecha");
    
        this.ball = this.physics.add.image(centerWidth, centerHeight, "ball");

        this.ball.setVelocity(-180);
    }
}

export default ScenePlay;