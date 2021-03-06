'use strict';

class Trampasierra{
    constructor(canvas,x,y){
        this.size=50;
        this.canvas=canvas;
        this.ctx=this.canvas.getContext('2d');
        this.x=x ;
        this.y=y;
        this.speed=5;

        this.image=sierra;
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
            
            this.draw();
          }
        
    draw(){
        this.ctx.fillStyle='#ffffff00';
        this.ctx.fillRect(this.x - this.size/2,this.y-this.size/2,this.size,this.size);
        this.ctx.drawImage(this.image, this.x - this.size/2,this.y-this.size/2,this.size,this.size);

    };
};
