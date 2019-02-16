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
                <h1>A link to the Ocarina Of Seasons</h1>
                <button>Start</button>
            </section>
        `)
        const startButton=document.querySelector('button');
        startButton.addEventListener('click',buildGameScreen)
        
    }
    const buildGameScreen=()=>{
        const gameScreen =buildDom(`
            <nav class="game-nav">
                <div class="lives">
                    Lives
                </div>
                <div class="score">
                    score
                </div>
            </nav>
            <section class="game-screen">
                <canvas></canvas>
            </section>
        `)
        const width=document.querySelector('.game-screen').offsetWidth;
        const height=document.querySelector('.game-screen').offsetHeight;

        const canvasElement=document.querySelector('canvas');

        canvasElement.setAttribute('width',width);
        canvasElement.setAttribute('height',height);

        const game = new Game(canvasElement);

        game.gameOverCallback(buildGameOver);
        game.winCallback(buildWin);
        game.startLoop();

        const setPlayerAttack =(event)=>{
           
            if(event.code==="Space"){
                game.player.playerAttack();
            }

        }

        const setPlayerMovement = (event)=>{
            if(event.code==='ArrowUp'){
                game.player.speedY= -7;
                game.player.orientation='N';
            }else if(event.code==='ArrowDown'){
                game.player.speedY= 7;
                game.player.orientation='S';
            }else if(event.code==='ArrowLeft'){
                game.player.speedX= -7;
                game.player.orientation='W';
            }else if(event.code==='ArrowRight'){
                game.player.speedX= 7;
                game.player.orientation='E';
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
        document.addEventListener('keydown',setPlayerAttack);
        document.addEventListener('keydown',setPlayerMovement);
        document.addEventListener('keyup',unSetPlayerMovement);


    }

    const buildGameOver=()=>{
        const gameOverScreen=buildDom(`
            <section class="game-over">
                <h1>Game Over Screen</h1>
                <button>Retry</button>
            </section>
        `);
        const restartButton = document.querySelector('button');
        restartButton.addEventListener('click',buildGameScreen);
    }

    const buildWin=()=>{
        const winScreen=buildDom(`
            <section class="win">
                <h1>Win Screen</h1>
                <button>Restart</button>
            </section>
        `);
        const restartButton = document.querySelector('button');
        restartButton.addEventListener('click',buildSplashScreen);
    }

    buildSplashScreen();


}
window.addEventListener('load',main);