'use strict';

class End{
    constructor(canvas){
         this.canvas=canvas;
        this.x=this.canvas.width/2;
        this.y=this.canvas.height/2;
       
        this.ctx=this.canvas.getContext('2d');
        this.size=16;
        this.image=triforce;
    }

    draw(){
        this.ctx.drawImage(this.image,this.x - this.size/2,this.y - this.size*2,this.size*3,this.size*3);
        this.ctx.fillRect(this.x - this.size/2,this.y-this.size/2,this.size,this.size);
    }
}