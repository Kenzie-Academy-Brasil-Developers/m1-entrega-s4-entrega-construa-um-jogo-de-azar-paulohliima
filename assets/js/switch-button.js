//START global-variables
    const standbySound = document.getElementById('standby-slot-machine');
    const wheelRoll = document.getElementById('wheelroll-slot-machine');
    const winning = document.getElementById('winning-slot-machine');
//END global-variables

//START dynamic-content-main
    //START sound-effects
        //START hunting-words
            
        //END hunting-words  

        //START slot-machine
            function playBackgroundSound(){
                
            };
        //END slot-machine
    //END sound-effects

    //START switch-button
        function toggleGames(){
            //Variables
            const wordSeeker = document.getElementById('game1');
            const slotMachine = document.getElementById('game2');

            //Classes-toggle
            wordSeeker.classList.toggle('hide');
            wordSeeker.classList.toggle('show');
            slotMachine.classList.toggle('hide');
            slotMachine.classList.toggle('show');
        };

        function changeGameTitle(game){
            //Variables
            const gameTitle = game.innerText;

            //Change-title
            if(gameTitle === 'Caça-Palavras'){
                game.innerText = 'Caça-Níqueis';
            }
            else{
                game.innerText = 'Caça-Palavras';
            }
        };

        function switchGame(event){
            //Variables
            const switchArea = event.target;
            const game = document.getElementById('game-title');
            const switchCheck = switchArea.tagName;

            //Changes-apply
            if(switchCheck === 'INPUT'){
                //functions-call
                changeGameTitle(game);
                toggleGames();
            }
        };
    //END switch-button
//END dynamic-content-main

//START event-listeners
    const switchButton = document.getElementById('switch-games');

    switchButton.addEventListener('click', switchGame);
//END event-listeners