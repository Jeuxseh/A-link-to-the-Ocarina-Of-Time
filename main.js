'use strict';

const main = ()=>{
    const buildDom=(html)=>{
        const main = document.querySelector('main');
        main.innerHTML= html;
        return main;
    }
    const buildSplashScreen=()=>{

        const splashScreen=buildDom(`
            <section class="splash-screen">
                <h1>A link to the Ocarina Of time</h1>
                <button>Start</button>
            </section>
        `)
        const startButton=document.querySelector('button');
        startButton.addEventListener('click',buildGameScreen)
        
    }
    const buildGameScreen=()=>{
        const gameScreen =buildDom(`
            <section class="game-screen">
                <canvas></canvas>
            </section>
        `)

        const width=document.querySelector('.game-screen').offsetWidth;
        const height=document.querySelector('.game-screen').offsetHeight;

        const canvasElement=document.querySelector('canvas');

        canvasElement.setAttribute('width',width);
        canvasElement.setAttribute('height',height);
       // setTimeout(buildGameOver,3000);

        const game = new Game(canvasElement);

        game.gameOverCallback(buildGameOver);
        game.startLoop();

        const setPlayerMovement = (event)=>{
            if(event.code==='ArrowUp'){
                game.player.speedY= -5;
            }else if(event.code==='ArrowDown'){
                game.player.speedY= 5;
            }else if(event.code==='ArrowLeft'){
                game.player.speedX= -5;
            }else if(event.code==='ArrowRight'){
                game.player.speedX= 5;
            }
        }

        const unSetPlayerMovement = (event)=>{
            if(event.code==='ArrowUp'){
                game.player.speedY= 0;
            }else if(event.code==='ArrowDown'){
                game.player.speedY= 0;
            }else if(event.code==='ArrowLeft'){
                game.player.speedX= 0;
            }else if(event.code==='ArrowRight'){
                game.player.speedX= 0;
            }
        }

        document.addEventListener('keydown',setPlayerMovement);
        document.addEventListener('keyup',unSetPlayerMovement);

    }

    const buildGameOver=()=>{
        const gameOverScreen=buildDom(`
            <section class="game-over">
                <h1>Game Over Screen</h1>
                <button>Restart</button>
            </section>
        `);
        const restartButton = document.querySelector('button');
        restartButton.addEventListener('click',buildGameScreen);
    }

    buildSplashScreen();


}
window.addEventListener('load',main);