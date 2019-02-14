'use strict';

class Game{
    constructor(canvas){
        this.canvas=canvas;
        this.ctx=this.canvas.getContext('2d');
        this.player;
        this.isGameOver=false;
    };

    startLoop(){

        this.player=new Player(this.canvas,6);

        const loop =()=>{
            console.log("hola");


            this.checkAllCollisions();
            this.updateCanvas();
            this.clearCanvas();
            this.drawCanvas();

            if(!this.isGameOver){
                window.requestAnimationFrame(loop);
            }

        };

        window.requestAnimationFrame(loop);


    };

    updateCanvas(){
        this.player.update();
    };

    clearCanvas(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    };

    drawCanvas(){
        this.player.draw();
    }
    
    checkAllCollisions(){
        this.player.checkScreen();
    }

     gameOverCallback(callback){
        this.onGameOver=callback;
    }


}