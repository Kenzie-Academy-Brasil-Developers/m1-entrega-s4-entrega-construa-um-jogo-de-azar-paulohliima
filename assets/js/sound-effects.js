//START imports
import {winOrLose} from './slot-machine.js';
//END imports

//START global-variables
    const ambientSound = document.getElementById('ambient-hunting-word');
    const scribbleSound = document.getElementById('scribble-hunting-word');
    const sourceAmbient = document.getElementById('ambient-hunting-word').children[0].getAttribute('src');
    const sourceScribe = document.getElementById('scribble-hunting-word').children[0].getAttribute('src');

    const standbySound = document.getElementById('standby-slot-machine');
    const wheelRollSound = document.getElementById('wheelroll-slot-machine');
    const winningSound = document.getElementById('winning-slot-machine');
//END global-variables

//START sound-effects
    function mute(){

    };  

    function switchAmbient(target){  
        if(target.innerText = 'Caça-Plavras'){
            //Audio-play
            ambientSound.volume = 0.025;
            ambientSound.loop;
            ambientSound.play();
        }
    };
    
    function switchStandby(){
        if(target.innerText = 'Caça-Níqueis'){
            //Audio-play
            ambientSound.volume = 0.025;
            ambientSound.loop;
            ambientSound.play();
        }
    };

    function switchPlay(event){
        
    }

//END sound-effects

//START functions-call
    soundsHuntingWords();
//END functions-call

//START events-listeners
    const swBut = document.getElementById('switch-games');
    
    swBut.addEventListener('click',switchPlay);
//END events-listeners