'use strict';


class Player{
    constructor(canvas,lives){
        this.points=0;
        this.size=50;
        this.canvas=canvas;
        this.ctx= this.canvas.getContext('2d');
        this.x= this.canvas.width/2;
        this.y=180 +this.canvas.height/2;
        this.speedX=0;
        this.speedY=0;
        this.lives=lives;
        this.orientation='N';
        this.attacking=[];
        this.invincibility=false;

        this.cuadro_del_sprite = 0;
        this.cuadros_por_segundo = 0;
        this.xpos = 0;
        this.velocidad = 0.16; 

        this.linkUp= linkArriba;
        this.linkDown= linkAbajo;
        this.linkLeft= linkIzquierda;
        this.linkRight= linkDerecha;

        this.colisionUp=colisionArriba;
        this.colisionDown=colisionAbajo;
        this.colisionLeft=colisionIzquierda;
        this.colisionRight=colisionDerecha;


    }

    loseLive(){
        if(this.invincibility===false){
            this.lives--;
        }
    }

    getPoints(){
        this.points+=10;
    }

    inmune(){
        if (!this.invincibility){
            this.invincibility=true
        setTimeout(() => {
            this.invincibility=false
           },2000);
        }
    }

    update(){
        this.y= this.y + this.speedY;
        this.x=this.x + this.speedX;  
    }

    draw(){
        if(!this.invincibility){
            switch(this.orientation){
                case 'N':
                    this.ctx.fillStyle = "#ffffff00"; 
                    this.ctx.fillRect(this.x - this.size/2,this.y - this.size/2,this.size,this.size); 
                    this.ctx.drawImage(this.linkUp, 30*this.cuadro_del_sprite, 0,30,23,this.x-this.size/2,this.y-this.size/2,this.size+5,this.size);
                    this.xpos = this.xpos + this.velocidad; 
                    this.cuadros_por_segundo++;
                    if(this.cuadros_por_segundo%3==0){
                        this.cuadro_del_sprite++;
                        if (this.cuadro_del_sprite >7) {
                            this.cuadro_del_sprite = 0;
                        }
                    }
                break;
                case 'E':
                    this.ctx.fillStyle = "#ffffff00"; 
                    this.ctx.fillRect(this.x - this.size/2,this.y - this.size/2,this.size,this.size); 
                    this.ctx.drawImage(this.linkRight, 30*this.cuadro_del_sprite, 0,30,23,this.x-this.size/2,this.y-this.size/2,this.size,this.size);
                    this.xpos = this.xpos + this.velocidad; 
                    this.cuadros_por_segundo++;
                    if(this.cuadros_por_segundo%3==0){
                        this.cuadro_del_sprite++;
                        if (this.cuadro_del_sprite >5) {
                            this.cuadro_del_sprite = 0;
                        }
                    }
                break;
                case 'S':
                    this.ctx.fillStyle = "#ffffff00"; 
                    this.ctx.fillRect(this.x - this.size/2,this.y - this.size/2,this.size,this.size); 
                    this.ctx.drawImage(this.linkDown, 30*this.cuadro_del_sprite, 0,30,23,this.x-this.size/2,this.y-this.size/2,this.size,this.size);
                    this.xpos = this.xpos + this.velocidad; 
                    this.cuadros_por_segundo++;
                    if(this.cuadros_por_segundo%3==0){
                        this.cuadro_del_sprite++;
                        if (this.cuadro_del_sprite >7) {
                            this.cuadro_del_sprite = 0;
                        }
                    }
                break;
                case 'W':
                    this.ctx.fillStyle = "#ffffff00"; 
                    this.ctx.fillRect(this.x - this.size/2,this.y - this.size/2,this.size,this.size); 
                    this.ctx.drawImage(this.linkLeft, 30*this.cuadro_del_sprite, 0,30,23,this.x-this.size/2,this.y-this.size/2,this.size,this.size);
                    this.xpos = this.xpos + this.velocidad; 
                    this.cuadros_por_segundo++;
                    if(this.cuadros_por_segundo%3==0){
                        this.cuadro_del_sprite++;
                        if (this.cuadro_del_sprite >5) {
                            this.cuadro_del_sprite = 0;
                        }
                    }
                break;
            }
            
        }else{
            switch(this.orientation){
                case 'N':
                    this.ctx.fillStyle = "#ffffff00"; 
                    this.ctx.fillRect(this.x - this.size/2,this.y - this.size/2,this.size,this.size); 
                    this.ctx.drawImage(this.colisionUp, 14*this.cuadro_del_sprite, 0,14,16,this.x-this.size/2,this.y-this.size/2,this.size+5,this.size);
                    this.xpos = this.xpos + this.velocidad; 
                    this.cuadros_por_segundo++;
                    if(this.cuadros_por_segundo%3==0){
                        this.cuadro_del_sprite++;
                        if (this.cuadro_del_sprite >1) {
                            this.cuadro_del_sprite = 0;
                        }
                    }
                break;
                case 'E':
                    this.ctx.fillStyle = "#ffffff00"; 
                    this.ctx.fillRect(this.x - this.size/2,this.y - this.size/2,this.size,this.size); 
                    this.ctx.drawImage(this.colisionRight, 15.5*this.cuadro_del_sprite, 0,15.5,16,this.x-this.size/2,this.y-this.size/2,this.size,this.size);
                    this.xpos = this.xpos + this.velocidad; 
                    this.cuadros_por_segundo++;
                    if(this.cuadros_por_segundo%3==0){
                        this.cuadro_del_sprite++;
                        if (this.cuadro_del_sprite >1) {
                            this.cuadro_del_sprite = 0;
                        }
                    }
                break;
                case 'S':
                    this.ctx.fillStyle = "#ffffff00"; 
                    this.ctx.fillRect(this.x - this.size/2,this.y - this.size/2,this.size,this.size); 
                    this.ctx.drawImage(this.colisionDown, 15*this.cuadro_del_sprite, 0,15,16,this.x-this.size/2,this.y-this.size/2,this.size,this.size);
                    this.xpos = this.xpos + this.velocidad; 
                    this.cuadros_por_segundo++;
                    if(this.cuadros_por_segundo%3==0){
                        this.cuadro_del_sprite++;
                        if (this.cuadro_del_sprite >1) {
                            this.cuadro_del_sprite = 0;
                        }
                    }
                break;
                case 'W':
                    this.ctx.fillStyle = "#ffffff00"; 
                    this.ctx.fillRect(this.x - this.size/2,this.y - this.size/2,this.size,this.size); 
                    this.ctx.drawImage(this.colisionLeft, 15.5*this.cuadro_del_sprite, 0,15.5,16,this.x-this.size/2,this.y-this.size/2,this.size,this.size);
                    this.xpos = this.xpos + this.velocidad; 
                    this.cuadros_por_segundo++;
                    if(this.cuadros_por_segundo%3==0){
                        this.cuadro_del_sprite++;
                        if (this.cuadro_del_sprite >1) {
                            this.cuadro_del_sprite = 0;
                        }
                    }
                break;
            }

        }
        
       
        if (this.attacking[0]) {
            this.attacking[0].draw();
        }
    }

    checkScreen(){
        if(this.y - this.size/2<=0 ){
            this.speedY = 0;
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
    checkEnd(end){
        const collideRight= this.x + this.size/2 > end.x - end.size/2;
            const collideLeft=this.x - this.size/2 < end.x + end.size/2;
            const collideTop=this.y - this.size/2 < end.y + end.size/2;
            const collideBottom=this.y + this.size/2 > end.y - end.size/2;
        
        if(collideRight&&collideLeft&&collideTop&&collideBottom){
            return true;
        }
        return false;

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
    checkBorderTrap(trap){
        const collideRight= this.x + this.size/2 > trap.x - trap.sizeX/2;
        const collideLeft=this.x - this.size/2 < trap.x + trap.sizeX/2;
        const collideTop=this.y - this.size/2 < trap.y + trap.sizeY/2;
        const collideBottom=this.y + this.size/2 > trap.y - trap.sizeY/2;
    
    if(collideRight&&collideLeft&&collideTop&&collideBottom){
        return true;
    }
    return false;

    }

    checkEnemy(enemy){
    
            const collideRight= this.x + this.size/2 > enemy.x - enemy.size/2;
            const collideLeft=this.x - this.size/2 < enemy.x + enemy.size/2;
            const collideTop=this.y - this.size/2 < enemy.y + enemy.size/2;
            const collideBottom=this.y + this.size/2 > enemy.y - enemy.size/2;
        
        if(collideRight&&collideLeft&&collideTop&&collideBottom){
            return true;
        }
        return false;

    }

    playerAttack(){
        const attack = new Attack(this.canvas);
        this.attacking.push(attack);
    
        switch(this.orientation){
            case 'N':
                attack.update(this.x,this.y-this.size,this.orientation);
                setTimeout(() => {
                    this.attacking.splice(0,1)
                },50);
            break;
            case 'E':
                attack.update(this.x+this.size,this.y,this.orientation);
                setTimeout(() => {
                    this.attacking.splice(0,1)
                },50);
            break;
            case 'S':
                attack.update(this.x,this.y+this.size,this.orientation);
                setTimeout(() => {
                    this.attacking.splice(0,1)
                },50);
            break;
            case 'W':
                attack.update(this.x-this.size,this.y,this.orientation);
                setTimeout(() => {
                    this.attacking.splice(0,1)
                },50);
            break;
        }
        

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

   

};