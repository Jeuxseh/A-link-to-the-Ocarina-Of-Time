'use strict';

class BorderTrap{
    constructor(canvas,x,y,ancho,largo){
        this.x=x;
        this.y=y;
        this.canvas=canvas;
        this.sizeX=ancho;
        this.sizeY=largo;
        this.ctx=this.canvas.getContext('2d');
    }

    draw(){
        this.ctx.fillStyle='brown';
        this.ctx.fillRect(this.x - this.sizeX/2,this.y-this.sizeY/2,this.sizeX,this.sizeY);
    };
}