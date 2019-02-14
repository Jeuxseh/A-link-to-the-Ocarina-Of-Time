'use strict';
class Player{
    constructor(canvas,lives){
        
        this.size=30;
        this.canvas=canvas;
        this.ctx= this.canvas.getContext('2d');
        this.x= this.canvas.width/2;
        this.y=this.canvas.height/2;
        this.speedX=0;
        this.speedY=0;
        this.direction=0;
        this.lives=lives;
    }

    update(){
        this.y= this.y +this.speedY;
        this.x=this.x+this.speedX;
        
    }

    draw(){
        this.ctx.fillStyle='green';
        this.ctx.fillRect(this.x - this.size/2,this.y - this.size/2,this.size,this.size);
    }

    checkScreen(){
        if(this.y - this.size/2<0 ){
            this.speedY=0;
            this.y+=5;
        }else if(this.y+this.size/2>this.canvas.height){
            this.speedY=0;
            this.y-=5
        }
        if(this.x -this.size/2<0){
            this.speedX=0;
            this.x+=5;
        }else if(this.x+this.size/2>this.canvas.width){
            this.speedX=0;
            this.x-=5;
        }

    }

    loseLive(){
        this.lives--;
    }




};