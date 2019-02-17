'use strict';

class Enemy{
    constructor(canvas,x,y){
        
        this.size=20;
        this.canvas=canvas;
        this.ctx= this.canvas.getContext('2d');
        this.x=x;
        this.y=y
        this.speedX=2;
        this.speedY=2;
        
        
    }
    

    update(x,y){
        if(x> this.x){
            this.x+=this.speedX;
        }else{
            this.x-=this.speedX;
        }
        if(y>this.y){
            this.y+=this.speedY;
        }else{
            this.y-=this.speedY;
        }
          
    };

    draw(){
        this.ctx.fillStyle ='orange';
        this.ctx.fillRect(this.x-this.size/2,this.y-this.size/2,this.size,this.size);
    };


}