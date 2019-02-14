# Nombre del Proyecto

## Descripción

El jugador tendra que comprar la libertad de su pair programming partner recogiendo monedas.

## MVP - Tecnología (DOM - CANVAS)

Nuestro MVP será una sala con una sola trampa y sin generación de enemigos en la cual tendremos que recoger una sola moneda (así de barata es la vida en este universo) para pasarnos el juego.

## Backlog
-Instrucciones.
-Pantallas de historia.
-3 sierras más.
-Generación de más trampas distintas.
-Trampa del borde de la sala.
-High Score Table.
-Sprites e imagenes.
-Música y efectos de sonido.
-Generación de enemigos.
-Generación de monedas.
-Choose Character.

## Estructuras de Datos
En el MVP tendremos 5 clases:
    -Player:
        -Properties:
            -this.direction.
            -this.speed.
            -this.x.
            -this.y.
            -this.size.
            -this.vidas.
            -this.canvas
            -this.ctx
        -Métodos:
            -update();
            -draw();
            -checkCollisions();
            -setDirection();
    -Main:
        -Métodos:
            -buildDom();
            -buildSplashScreen();
            -buildGameScreen();
            -buildGameOverScreen();
    -Game:
        -Properties:
            -this.player.
        -Métodos:
            -loop();
            -startLoop();
            -onGameOver();
    -Trap:
        -Properties:
            -this.size.
            -this.x.
            -this.y.
            -this.speed.
            -this.direction.
            -this.canvas.
            -this.ctx.
        -Métodos:
            -update();
            -draw();
    -Moneda:
        -Properties:
            -this.x.
            -this.y.
            -this.size.
            -this.canvas.
            -this.ctx.
        -Métodos:
            
            -checkInScreen();
            -draw();
            

    
            

## States y States Transitions

Tendremos 3 pantallas, que serán nuestra splashScreen, nuestra gameScreen y nuestra gameOverScreen.
Construiremos cada una desde nuestro main con un constructor buildDom al que haremos callBack dentro de cada constructor de pantalla, es decir, tendremos las siguientes funciones constructoras y de transición:
    -buildDom();
    -buildSplashScreen();
        Esta inicializará automáticamente cuando iniciemos el juego.
    -buildGameScreen();
        Esta inicializará cuando le demos al botón de start en nuestra splashScreen.
    -buildGameOverScreen();
        Esta inicializará cuando acabemos el juego, ya sea bien por derrota o por finalización del juego.



## Task

1º Construiremos el generador del dom y las transiciones entre pantallas.
2º Crearemos nuestro entorno de game con canvas.
3º Crearemos nuestra clase Personaje.
3.1º Le asociaremos algunas propiedades y métodos para comprobar que se mueva en nuestro entorno.
4º Comprobaremos que colisione con el borde de nuestro canvas para que no se salga de la pantalla.
5º Generaremos la trampa central.
5.1º Asociar los métodos y propiedades de la trampa.
5.2º Arreglaremos las colisiones para que al chocar con la trampa nos reste vida.
6º Generaremos la moneda que tendremos que buscar.
6.1º Asociar los métodos y propiedades de la moneda.
6.2º Al conseguir la moneda nos habremos pasado el juego.

## Links

### Git

https://github.com/Jeuxseh/A-link-to-the-Ocarina-Of-Time

Presentación
