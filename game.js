'use strict';

class Game{
    constructor(canvas){
        this.canvas=canvas;
        this.ctx=this.canvas.getContext('2d');
        this.player;
        this.coin;
        this.isGameOver=false;
    };

    startLoop(){

        this.player=new Player(this.canvas,6);
        this.coin=new Coin(this.canvas);
        this.trampaSierra1= new Trampasierra(this.canvas);

        const loop =()=>{

            this.updateCanvas();
            this.clearCanvas();
            this.checkAllCollisions();
            this.drawCanvas();

            if(!this.isGameOver){
                window.requestAnimationFrame(loop);
            }

        };

        window.requestAnimationFrame(loop);


    };

    updateCanvas(){
        this.player.update();
        this.trampaSierra1.update();
    };

    clearCanvas(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    };

    drawCanvas(){
        this.player.draw();
        this.coin.draw();
        this.trampaSierra1.draw();
    }
    
    checkAllCollisions(){
        this.player.checkScreen();
        if(this.player.checkTrap(this.trampaSierra1)){
            this.player.loseLive();
            if(this.player.lives===0){
                this.isGameOver=true;
                this.onGameOver();
            }
        }
        if(this.player.checkCoin(this.coin)){
            this.player.getPoints();
            this.isGameOver=true;
            this.onWin();
        }
    }

    gameOverCallback(callback){
        this.onGameOver=callback;
    }

    winCallback(callback){
        this.onWin=callback;
    }


}