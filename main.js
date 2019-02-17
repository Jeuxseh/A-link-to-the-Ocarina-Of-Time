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
                <button id="start">Start</button>
                <button id="instructions">Instructions</button>
            </section>
        `)
        const startButton=document.getElementById('start');
        startButton.addEventListener('click',buildGameScreen);
        const instructionsButton=document.getElementById('instructions');
        instructionsButton.addEventListener('click',buildInstructionScreen);       
    }
    const buildInstructionScreen=()=>{
        const instructionsScreen=buildDom(`
        <h1>Instrucciones</h1>
        <div>
            <ul>
                <li>Flechas para moverte; arriba,abajo,izquierda,derecha.</li>
                <li>Barra espaciadora para atacar.</li>
                <li>¡Consigue rupias!</li>
                <li>¡Cuidado con las sierras!</li>
                <li>¡Cuidado con los enemigos!</li>
                <li>¡Cuidado con las llamas!</li>
            </ul>
        </div>
        <button id='start'>Main Menu</button>
        `)
        const startButton=document.getElementById('start');
        startButton.addEventListener('click',buildSplashScreen);
    }

    const buildGameScreen=()=>{
        const gameScreen =buildDom(`
              
                <div>
                    Lives:
                    <div id="lives">
                        Lives:   
                    </div>
                </div>
                <div>
                    Score:
                    <div id="score">   
                    </div>
                </div>
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
                <button id="restart">Retry</button>
                <button id = "main-menu">Main Menu</button>
            </section>
        `);
        const mainButton = document.getElementById('main-menu');
        const restartButton = document.getElementById('restart');
        mainButton.addEventListener('click',buildSplashScreen);
        restartButton.addEventListener('click',buildGameScreen);
    }

    const buildWin=()=>{
        const winScreen=buildDom(`
            <section class="win">
                <h1>Win Screen</h1>
                <h3></h3>
                <button id="restart">Restart</button>
                <button id="main-menu">Main Menu</button>
            </section>
        `);
        
        const mainButton = document.getElementById('main-menu');
        const restartButton = document.getElementById('restart');
        mainButton.addEventListener('click',buildSplashScreen);
        restartButton.addEventListener('click',buildGameScreen);

    }

    buildSplashScreen();


}
window.addEventListener('load',main);