'use strict';

class Game{
    constructor(canvas){
        this.canvas=canvas;
        this.ctx=this.canvas.getContext('2d');
        this.player=new Player(this.canvas,9);
        this.coin;
        this.enemies=[];
        this.isGameOver=false;
        this.attacks=[];
    };

    startLoop(){

        this.coin=new Coin(this.canvas);

        this.end=new End(this.canvas);

        this.trampaSierra1= new Trampasierra(this.canvas,115,185);
        this.trampaSierra2= new Trampasierra(this.canvas,415,35);
        this.trampaSierra3= new Trampasierra(this.canvas,715,185);
        this.trampaSierra4= new Trampasierra(this.canvas,415,335);

        this.borderTrap1= new BorderTrap(this.canvas,this.canvas.width/2,0,20,180);
        this.borderTrap2= new BorderTrap(this.canvas,this.canvas.width/5,0,20,90);
        this.borderTrap3= new BorderTrap(this.canvas,(this.canvas.width*4)/5,0,20,90);

        this.borderTrap4= new BorderTrap(this.canvas,this.canvas.width-65,this.canvas.height/5,120,20);
        this.borderTrap5= new BorderTrap(this.canvas,this.canvas.width-40,this.canvas.height/2,70,20);
        this.borderTrap6= new BorderTrap(this.canvas,this.canvas.width-65,(this.canvas.height*4)/5,120,20);

        this.borderTrap7= new BorderTrap(this.canvas,0,(this.canvas.height)/5,190,20);
        this.borderTrap8= new BorderTrap(this.canvas,0,this.canvas.height/2,90,20);
        this.borderTrap9= new BorderTrap(this.canvas,0,(this.canvas.height*4)/5,190,20);

        const loop =()=>{
            if(Math.random()>0.99){
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
        

        this.borderTrap1.draw();
        this.borderTrap2.draw();
        this.borderTrap3.draw();

        this.borderTrap4.draw();
        this.borderTrap5.draw();
        this.borderTrap6.draw();

        this.borderTrap7.draw();
        this.borderTrap8.draw();
        this.borderTrap9.draw();

        this.trampaSierra1.draw();
        this.trampaSierra2.draw();
        this.trampaSierra3.draw();
        this.trampaSierra4.draw();
        
        this.player.draw();
        this.coin.draw();

        if(this.player.points>=50){       
            this.end.draw();
        }

        this.enemies.forEach((enemy)=>{
            enemy.draw();
        })
    }
    
    checkAllCollisions(){
        this.player.checkScreen();

       if(this.player.points>=50 && this.player.checkEnd(this.end)){
            this.isGameOver=true;
                this.onWin(this.player.points);
        }

        if(this.player.checkTrap(this.trampaSierra1)){    
            this.player.loseLive();
            this.player.inmune();
            if(this.player.lives===0){
                this.isGameOver=true;
                this.onGameOver();
            }
        }
        
        if(this.player.checkTrap(this.trampaSierra2)){ 
            this.player.loseLive();
            this.player.inmune();
            if(this.player.lives===0){
                this.isGameOver=true;
                this.onGameOver();
            }
        }
        if(this.player.checkTrap(this.trampaSierra3)){   
            this.player.loseLive();
            this.player.inmune();
            if(this.player.lives===0){
                this.isGameOver=true;
                this.onGameOver();
            }
        }
        if(this.player.checkTrap(this.trampaSierra4)){
            this.player.loseLive();
            this.player.inmune();
            if(this.player.lives===0){
                this.isGameOver=true;
                this.onGameOver();
            }
        }
        if(this.player.checkBorderTrap(this.borderTrap1)){
            this.player.loseLive();
            this.player.inmune();
            if(this.player.lives===0){
                this.isGameOver=true;
                this.onGameOver();
            }
        }
        if(this.player.checkBorderTrap(this.borderTrap2)){
            this.player.loseLive();
            this.player.inmune();
            if(this.player.lives===0){
                this.isGameOver=true;
                this.onGameOver();
            }
        }
        if(this.player.checkBorderTrap(this.borderTrap3)){
            this.player.loseLive();
            this.player.inmune();
            if(this.player.lives===0){
                this.isGameOver=true;
                this.onGameOver();
            }
        }
        if(this.player.checkBorderTrap(this.borderTrap4)){
            this.player.loseLive();
            this.player.inmune();
            if(this.player.lives===0){
                this.isGameOver=true;
                this.onGameOver();
            }
        }
        if(this.player.checkBorderTrap(this.borderTrap5)){
            this.player.loseLive();
            this.player.inmune();
            if(this.player.lives===0){
                this.isGameOver=true;
                this.onGameOver();
            }
        }
        if(this.player.checkBorderTrap(this.borderTrap6)){
            this.player.loseLive();
            this.player.inmune();
            if(this.player.lives===0){
                this.isGameOver=true;
                this.onGameOver();
            }
        }
        if(this.player.checkBorderTrap(this.borderTrap7)){
            this.player.loseLive();
            this.player.inmune();
            if(this.player.lives===0){
                this.isGameOver=true;
                this.onGameOver();
            }
        }
        if(this.player.checkBorderTrap(this.borderTrap8)){
            this.player.loseLive();
            this.player.inmune();
            if(this.player.lives===0){
                this.isGameOver=true;
                this.onGameOver();
            }
        }
        if(this.player.checkBorderTrap(this.borderTrap9)){
            this.player.loseLive();
            this.player.inmune();
            if(this.player.lives===0){
                this.isGameOver=true;
                this.onGameOver();
            }
        }

        if(this.player.checkCoin(this.coin)){
            this.player.getPoints();
            this.coin.update();
            this.coin.draw();
            
        }
       this.player.attacking.forEach((attack,index)=>{
           this.enemies.forEach((enemy,index)=>{
                if(attack.checkAttacking(enemy)){
                    this.enemies.splice(index,1);
                    this.player.points+=2;
                }
           }) 
       })
        this.enemies.forEach((enemy,index)=>{
            if(this.player.checkEnemy(enemy)){
                this.player.loseLive();
                this.player.inmune();
                this.enemies.splice(index,1);
                if(this.player.lives===0){
                    this.isGameOver=true;
                    this.onGameOver();
                }
            };
        });
        
        document.getElementById('lives').innerText=this.player.lives;
        document.getElementById('score').innerText=this.player.points;
    }

    gameOverCallback(callback){
        this.onGameOver=callback;
    }

    winCallback(callback){
        this.onWin=callback;
    }


}