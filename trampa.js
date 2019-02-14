'use strict';

class Trampasierra{
    constructor(canvas){
        this.size=100;
        this.canvas=canvas;
        this.ctx=this.canvas.getContext('2d');
        this.x=canvas.width/2;
        this.y=60;
        this.speed=10;
    }


    update(){


    };

    draw(){
        this.ctx.fillStyle='red';
        this.ctx.fillRect(this.x,this.y,this.size/2,this.size/2);

    };
};
