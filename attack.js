'use strict';

class Attack {
    constructor(canvas){
        this.size=40;
        this.canvas=canvas;
        this.ctx=this.canvas.getContext('2d');
    }
    
    checkAttacking(enemy){
        const collideRight= this.x + this.size/2 > enemy.x - enemy.size/2;
        const collideLeft=this.x - this.size/2 < enemy.x + enemy.size/2;
        const collideTop=this.y - this.size/2 < enemy.y + enemy.size/2;
        const collideBottom=this.y + this.size/2 > enemy.y - enemy.size/2;

        if(collideRight&&collideLeft&&collideTop&&collideBottom){
            return true;
        }
        return false;
    }

    update(x,y){
        this.y = y;
        this.x = x;
        this.ctx.fillStyle='black';
        this.ctx.fillRect(x-this.size/2,y-this.size/2,this.size,this.size)
    }

    draw() {
        this.ctx.fillStyle='black';
        this.ctx.fillRect(this.x-this.size/2,this.y-this.size/2,this.size,this.size)
    }
    
}