'use strict';

class Coin{
    constructor(canvas){
        this.canvas=canvas;
        this.ctx=this.canvas.getContext('2d');
        this.x=this.canvas.width/2;
        this.y=this.canvas.height/2;
        this.size=25;
        
    }
    ;
    checkInScreen(){

    };

    draw(){
        this.ctx.fillStyle='blue';
        this.ctx.fillRect(this.x - this.size/2,this.y-this.size/2,this.size/2,this.size/2)

    }
}