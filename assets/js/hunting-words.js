//START global-variables
const dictionary = ["BANANA","COMIDA","ABACATE",
"AMEIXA","ESPINAFRE","LARANJA","ERVILHAS","CENOURA","COGUMELO",
"BOI","OVELHA","GIRAFA","ZEBRA","CARPA","CORUJA","SAPO","GUAXINIM",
"TARTARUGA", "CARRO","BARCO"];
const divPuzzle = document.getElementsByClassName("game--board")[0]
const table = document.createElement("table")
const tbody = document.createElement("tbody")




//END global-variables
//START dynamic-content-main

const verifyWord = (i) =>{
    let selected = document.querySelectorAll(`.letter-${i}`);
    // console.log(currentWord);
    selected.forEach((item) => {
        item.classList.add("letter--blur");
        item.removeEventListener("click", () => verifyWord(i)); // VERIFICAR POSSÍVEL ERRO
    });
    const wordsFound = [];
        for(let countLetter = 0; countLetter < selected.length; countLetter++){
            wordsFound.push(selected[countLetter].innerText);
    }
    correctlyWord(wordsFound.join(""));
}

const correctlyWord = (letterCorrectly) =>{
    console.log(letterCorrectly);
}

const tableWords = () =>{
    let arrTable = []
   
    for(let i = 0; i < 10; i++){
        arrTable[i] = []

        const colunm = document.createElement("tr")
        tbody.appendChild(colunm)

        for(let j = 0; j < 10; j++){
            arrTable[i][j] = [];

            const cell = document.createElement("td")
            colunm.appendChild(cell)

        }
    }
    table.appendChild(tbody)
    divPuzzle.appendChild(table)
    console.table(arrTable);
    positionTable(arrTable);
}

const selectWords = () =>{
    let arrWordsSelect = []
    let wordRandom;
    let nameRandom;
    for(let i = 0; i < 3; i++){
        wordRandom = Math.floor(Math.random() * 19);

        if(dictionary[wordRandom] === nameRandom || i === 2 && dictionary[wordRandom] === arrWordsSelect[0]){
            wordRandom = Math.floor(Math.random() * 19);
            i--;
        }else{
            nameRandom = dictionary[wordRandom]
            arrWordsSelect.push(nameRandom);
        }
    }
    return arrWordsSelect;
}

const positionTable = (wordsTable) =>{
    const elementWord = document.getElementsByTagName("tbody")[0];
    const wordsSelect = selectWords();
    let elementWordTd;



    let lineP;
    let columnP;
    let currentWord;
    let currentLine = [];
    let countWord = 0;
    
    for(let i = 0; i < wordsSelect.length; i++){ // roda 3 vezes por conta do tamanho do array de palavras selecionadas
        lineP = Math.floor(Math.random() * 9);
        columnP = Math.floor(Math.random() * 9);
        countWord = 0;
        if(wordsSelect[i].length < wordsTable[lineP].length - columnP+1 && currentWord !== wordsSelect[i] && !currentLine.includes(wordsTable[lineP])){ //se o tamanho de cada palavra for menor ou igual ao 
            currentWord = wordsSelect[i];
            currentLine.push(wordsTable[lineP]);
            
            for(let l = 0; l < wordsSelect[i].length; l++){ 
                wordsTable[lineP][columnP+countWord] = wordsSelect[i][l];

                elementWordTd = elementWord.rows[lineP]
                elementWordTd.childNodes[columnP+countWord].innerText = wordsSelect[i][l];
                elementWordTd.childNodes[columnP+countWord].classList.add(`letter-${i}`)
                elementWordTd.childNodes[columnP+countWord].addEventListener("click", () => verifyWord(i));

                countWord += 1;
            }
        }else{
            i--;
            console.log("não cabe");
        }
        
    }
    return wordsTable;
}

const randomLetters = (tableWords) =>{
    const elementWord = document.getElementsByTagName("tbody")[0];
    const wordsSelect = selectWords();
    let elementWordTd;


    const aToZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let randomP;
    for(let i = 0; i < tableWords.length; i++){
        for(let j = 0; j < tableWords[i].length; j++){
            randomP = Math.floor(Math.random() * 25);
            if(tableWords[i][j].length === 0){
                tableWords[i][j] = aToZ[randomP]

                elementWordTd = elementWord.rows[i]
                elementWordTd.childNodes[j].innerText = aToZ[randomP];
            }
        }
    }
}

//END dynamic-content-main
//START call-functions

tableWords();
selectWords();


//END call-functions

//START event-listeners



//END event-listeners

// const dataCel = document.getElementsByTagName("td")

// const dataArr = Array.from(dataCel);

