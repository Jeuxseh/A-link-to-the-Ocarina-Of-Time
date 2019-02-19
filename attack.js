'use strict';

class Attack {
    constructor(canvas) {
        this.size = 40;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.espadaUp = espadaArriba;
        this.espadaDown = espadaAbajo;
        this.espadaLeft = espadaIzquierda;
        this.espadaRight = espadaDerecha;

        this.orientacion;
    }

    checkAttacking(enemy) {
        const collideRight = this.x + this.size / 2 > enemy.x - enemy.size / 2;
        const collideLeft = this.x - this.size / 2 < enemy.x + enemy.size / 2;
        const collideTop = this.y - this.size / 2 < enemy.y + enemy.size / 2;
        const collideBottom = this.y + this.size / 2 > enemy.y - enemy.size / 2;

        if (collideRight && collideLeft && collideTop && collideBottom) {
            return true;
        }
        return false;
    }

    update(x, y, orientation) {
        this.orientacion = orientation;
        this.y = y;
        this.x = x;
        this.draw(this.orientacion);

    }

    draw(orientation) {
        switch (this.orientacion) {
            case 'N':
                this.ctx.drawImage(this.espadaUp, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
                break;
            case 'S':
                this.ctx.drawImage(this.espadaDown, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
                break;
            case 'W':
                this.ctx.drawImage(this.espadaLeft, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
                break;
            case 'E':
                this.ctx.drawImage(this.espadaRight, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
                break;
            

        }
    
     

    }

}