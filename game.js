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
        this.trampaSierra1= new Trampasierra(this.canvas,100,200);
        this.trampaSierra2= new Trampasierra(this.canvas,400,50);
        this.trampaSierra3= new Trampasierra(this.canvas,700,200);
        this.trampaSierra4= new Trampasierra(this.canvas,400,350);

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
    updateCoinCanvas(){
        this.coin.update();
    }

    updateCanvas(){
        this.player.update();
        this.trampaSierra1.update(100,200);
        this.trampaSierra2.update(400,50);
        this.trampaSierra3.update(700,200);
        this.trampaSierra4.update(400,350);
    };

    clearCanvas(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    };

    drawCanvas(){
        this.player.draw();
        this.coin.draw();
        this.trampaSierra1.draw();
        this.trampaSierra2.draw();
        this.trampaSierra3.draw();
        this.trampaSierra4.draw();
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
        if(this.player.checkTrap(this.trampaSierra2)){
            this.player.loseLive();
            if(this.player.lives===0){
                this.isGameOver=true;
                this.onGameOver();
            }
        }
        if(this.player.checkTrap(this.trampaSierra3)){
            this.player.loseLive();
            if(this.player.lives===0){
                this.isGameOver=true;
                this.onGameOver();
            }
        }
        if(this.player.checkTrap(this.trampaSierra4)){
            this.player.loseLive();
            if(this.player.lives===0){
                this.isGameOver=true;
                this.onGameOver();
            }
        }
        if(this.player.checkCoin(this.coin)){
            this.player.getPoints();
            this.coin.update();
            this.coin.draw();
            if(this.player.points>5){
                this.isGameOver=true;
                this.onWin();
            }
        }
    }

    gameOverCallback(callback){
        this.onGameOver=callback;
    }

    winCallback(callback){
        this.onWin=callback;
    }


}