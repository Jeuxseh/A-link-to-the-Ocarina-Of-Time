'use strict';
class Player{
    constructor(canvas,lives){
        this.points=0;
        this.size=40;
        this.canvas=canvas;
        this.ctx= this.canvas.getContext('2d');
        this.x= this.canvas.width/2;
        this.y=250+this.canvas.height/2;
        this.speedX=0;
        this.speedY=0;
        this.direction=0;
        this.lives=lives;
    }

    update(){
        this.y= this.y + this.speedY;
        this.x=this.x + this.speedX;
        
        
    }

    draw(){
        this.ctx.fillStyle='green';
        this.ctx.fillRect(this.x - this.size/2,this.y - this.size/2,this.size,this.size);
    }

    checkScreen(){
        if(this.y - this.size/2<=0 ){
            this.speedY=0;
            this.y+=7;
        }else if(this.y+this.size/2>=this.canvas.height){
            this.speedY=0;
            this.y-=7
        }
        if(this.x -this.size/2<=0){
            this.speedX=0;
            this.x+=7;
        }else if(this.x+this.size/2>=this.canvas.width){
            this.speedX=0;
            this.x-=7;
        }

    }
    checkTrap(trap){
        const collideRight= this.x + this.size/2 > trap.x - trap.size/2;
        const collideLeft=this.x - this.size/2 < trap.x + trap.size/2;
        const collideTop=this.y - this.size/2 < trap.y + trap.size/2;
        const collideBottom=this.y + this.size/2 > trap.y - trap.size/2;

        if(collideRight&&collideLeft&&collideTop&&collideBottom){
            return true;
        }
        return false;

    }

    

    checkCoin(coin){   
        const collideRight= this.x + this.size/2 > coin.x - coin.size/2;
        const collideLeft=this.x - this.size/2 < coin.x + coin.size/2;
        const collideTop=this.y - this.size/2 < coin.y + coin.size/2;
        const collideBottom=this.y + this.size/2 > coin.y - coin.size/2;

        if(collideRight&&collideLeft&&collideTop&&collideBottom){
            return true;
        }
        return false;
        
    }

    loseLive(){
        this.lives--;
    }

    getPoints(){
        this.points+=10;
    }




};