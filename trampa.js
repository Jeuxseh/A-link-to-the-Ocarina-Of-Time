'use strict';

class Trampasierra{
    constructor(canvas,x,y){
        this.size=50;
        this.canvas=canvas;
        this.ctx=this.canvas.getContext('2d');
        this.x=x ;
        this.y=y;
        this.speed=10;
    }


    update(x,y){
    
           if(this.x<x+470 && this.y===y){
                 this.x+=this.speed;
           
          }else if(this.x===x+470 && this.y< y+200){
                this.y+=this.speed;
           
          }else if(this.y===y+200 && this.x>x){
                this.x-=this.speed;
           
          } else {
                this.y-=this.speed;
            }
            console.log(this.x,this.y);
            this.draw();
          }
        



   

    draw(){
        this.ctx.fillStyle='red';
        this.ctx.fillRect(this.x - this.size/2,this.y-this.size/2,this.size,this.size);

    };
};
