//START dynamic-content-main
    //END switch-button
        function toggleGames(){
            //Variables
            const wordSeeker = document.getElementById('game1');
            const slotMachine = document.getElementById('game2');
            console.log(slotMachine.classList.length)

            //Classes-toggle
            wordSeeker.classList.toggle('hidden');
            wordSeeker.classList.toggle('show');
            slotMachine.classList.toggle('hidden');
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
        }

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
    const switchButton = document.getElementById('switch-game');

    switchButton.addEventListener('click', switchGame);
//END event-listeners