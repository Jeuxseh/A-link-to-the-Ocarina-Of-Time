'use strict';

class Game{
    constructor(canvas){
        this.canvas=canvas;
        this.ctx=this.canvas.getContext('2d');
        this.player;
        this.coin;
        this.enemies=[];
        //tendria que crearle una propiedad de trampa???????????????????????????????????
        this.isGameOver=false;
    };

    startLoop(){

        this.player=new Player(this.canvas,6);
        this.coin=new Coin(this.canvas);
        this.trampaSierra1= new Trampasierra(this.canvas,115,185);
        this.trampaSierra2= new Trampasierra(this.canvas,415,35);
        this.trampaSierra3= new Trampasierra(this.canvas,715,185);
        this.trampaSierra4= new Trampasierra(this.canvas,415,335);

        const loop =()=>{
            if(Math.random()>0.995){
                const x = Math.random()*this.canvas.width;
                const y = Math.random()*this.canvas.height;
                this.enemies.push( new Enemy (this.canvas,x,y))
            }

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

        this.enemies.forEach((enemy)=>{
            enemy.update(this.player.x,this.player.y);
        })
        this.player.update();
        this.trampaSierra1.update(115,185);
        this.trampaSierra2.update(415,35);
        this.trampaSierra3.update(715,185);
        this.trampaSierra4.update(415,335);
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
        this.enemies.forEach((enemy)=>{
            enemy.draw();
        })
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
       this.player.attacking.forEach((attack,index)=>{
           this.enemies.forEach((enemy,index)=>{
                if(attack.checkAttacking(enemy)){
                    this.enemies.splice(index,1);
                }
           }) 
       })
        this.enemies.forEach((enemy,index)=>{
            if(this.player.checkEnemy(enemy)){
                this.player.loseLive();
                this.enemies.splice(index,1);
                if(this.player.lives===0){
                    this.isGameOver=true;
                    this.onGameOver();
                }
            };
        });
    }

    gameOverCallback(callback){
        this.onGameOver=callback;
    }

    winCallback(callback){
        this.onWin=callback;
    }


}