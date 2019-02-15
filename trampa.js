'use strict';

class Trampasierra{
    constructor(canvas){
        this.size=50;
        this.canvas=canvas;
        this.ctx=this.canvas.getContext('2d');
        this.x=120 ;
        this.y=120;
        this.speed=20;
    }


    update(){
        if(this.x<700 && this.y===120){
           this.x+=this.speed;
          }else if(this.x===700 && this.y<400){
            this.y+=this.speed;
          }else if(this.y===400 && this.x>120){
            this.x-=this.speed;
          } else if(this.x===120 && this.y>120){
            this.y-=this.speed;
            }
          }
        



   

    draw(){
        this.ctx.fillStyle='red';
        this.ctx.fillRect(this.x - this.size/2,this.y-this.size/2,this.size,this.size);

    };
};
