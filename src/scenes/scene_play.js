import Palas from '../gameObjects/palas.js';

class ScenePlay extends Phaser.Scene {
    constructor() {
        super({ key: 'ScenePlay' });
    }

    create() {
        this.centerWidth = this.sys.game.config.width / 2;
        this.centerHeight = this.sys.game.config.height / 2;

        //separador
        this.add.image( this.centerWidth, this.centerHeight, "separador");

        //palas
        this.left = new Palas(this, 30, this.centerHeight, "izquierda");
        this.right = new Palas(this, this.sys.game.config.width - 30 , this.centerHeight, "derecha");
        
        //bola
        this.physics.world.setBoundsCollision(false, false, true, true);
        this.ball = this.physics.add.image( this.centerWidth, this.centerHeight, "ball");
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        this.ball.setVelocityX(-180);

        // Fisicas
        this.physics.add.collider(this.ball, this.left, this.chocaPala, null, this);
        this.physics.add.collider(this.ball, this.right, this.chocaPala, null, this);

        // Controles
        //Pala derecha
        this.cursor = this.input.keyboard.createCursorKeys();
        
        //Pala izquierda
        this.cursorW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.cursorS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }

    update() {
        if (this.ball.x < 0 || this.ball.x > this.sys.game.config.width) {
            this.ball.setPosition(this.centerWidth, this.centerHeight);
        }

        // Control de las palas
        //Pala derecha
        if(this.cursor.down.isDown) {
            this.right.body.setVelocityY(300);
        }
        else if(this.cursor.up.isDown) {
            this.right.body.setVelocityY(-300);
        }
        else {
            this.right.body.setVelocityY(0);
        }

        //Pala izquierda
        if(this.cursorS.isDown) {
            this.left.body.setVelocityY(300);
        }
        else if(this.cursorW.isDown) {
            this.left.body.setVelocityY(-300);
        }
        else {
            this.left.body.setVelocityY(0);
        }
    }

    chocaPala() {
        this.ball.setVelocityY(Phaser.Math.Between(-120, 120));
    }
}

export default ScenePlay;