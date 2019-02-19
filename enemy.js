'use strict';

class Enemy{
    constructor(canvas,x,y){
        
        this.size=30;
        this.canvas=canvas;
        this.ctx= this.canvas.getContext('2d');
        this.x=x;
        this.y=y
        this.speedX=2;
        this.speedY=2;
        this.orientation='N';

        this.cuadro_del_sprite = 0;
        this.cuadros_por_segundo = 0;
        this.xpos = 0;
        this.velocidad = 0.16; 
        this.enemigoUp= enemigoArriba;
        this.enemigoDown= enemigoAbajo;
        this.enemigoLeft= enemigoIzquierda;
        this.enemigoRight= enemigoDerecha;
        
        
    }
    

    update(x,y){
        if(x> this.x){
            this.x+=this.speedX;
            this.orientation='E';
        }else{
            this.x-=this.speedX;
            this.orientation='W';
        }
        if(y>this.y){
            this.y+=this.speedY;
            this.orientation='S';
        }else{
            this.y-=this.speedY;
            this.orientation='N';
        }
          
    };

    draw(){
        switch(this.orientation){
            case 'N':
                this.ctx.fillStyle = "#ffffff00";  
                this.ctx.drawImage(this.enemigoUp, 20*this.cuadro_del_sprite, 0,20,20,this.x-this.size/2,this.y-this.size/2,this.size,this.size);
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
                this.ctx.drawImage(this.enemigoRight, 20*this.cuadro_del_sprite, 0,20,20,this.x-this.size/2,this.y-this.size/2,this.size,this.size);
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
                this.ctx.drawImage(this.enemigoDown, 20*this.cuadro_del_sprite, 0,20,20,this.x-this.size/2,this.y-this.size/2,this.size,this.size);
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
                this.ctx.drawImage(this.enemigoLeft, 20*this.cuadro_del_sprite, 0,20,20,this.x-this.size/2,this.y-this.size/2,this.size,this.size);
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
    };


}