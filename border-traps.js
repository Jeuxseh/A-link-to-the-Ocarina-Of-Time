'use strict';

class BorderTrap{
    constructor(canvas,x,y,ancho,largo){
        this.x=x;
        this.y=y;
        this.canvas=canvas;
        this.sizeX=ancho;
        this.sizeY=largo;
        this.ctx=this.canvas.getContext('2d');

        this.image = fuego;
        this.cuadro_del_sprite = 0;
        this.cuadros_por_segundo = 0;
        this.xpos = 0;
        this.velocidad = 0.16; 
    }
    draw(){
        this.ctx.fillStyle='#ffffff00';
        this.ctx.fillRect(this.x - this.sizeX/2,this.y-this.sizeY/2,this.sizeX,this.sizeY);   
        this.ctx.drawImage(this.image,this.cuadro_del_sprite*1000,0,1000,245,this.x-this.sizeX/2,this.y-this.sizeY/2,this.sizeX,this.sizeY);
        this.cuadros_por_segundo ++;
        if(this.cuadros_por_segundo%3==0){     
        this.cuadro_del_sprite++;
        if (this.cuadro_del_sprite > 2) {
            this.cuadro_del_sprite = 0;
        }
    }
        
  
    };
}