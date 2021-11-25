const dictionary = ["Banana","Comida","Abacate",
"Ameixa","Espinafre","Laranja","Ervilhas","Cenoura","Cogumelo",
"Boi","Ovelha","Girafa","Zebra","Carpa","Coruja","Sapo","Guaxinim",
"Tartaruga", "Carro","Barco"];

const tableWords = () =>{
    let arrTable = []
    for(let i = 0; i < 10; i++){
        arrTable[i] = []
        for(let j = 0; j < 10; j++){
            arrTable[i][j] = [];
        }
    }
    return arrTable;
}
tableWords()

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
selectWords()

const positionTable = () =>{
    let wordsTable = tableWords();
    const wordsSelect = selectWords();
    let lineP;
    let columnP;
    let currentWord;
    let currentLine = [];

    let countWord = 0;
    console.log(wordsSelect)
    for(let i = 0; i < wordsSelect.length; i++){ // roda 3 vezes por conta do tamanho do array de palavras selecionadas
        lineP = Math.floor(Math.random() * 9);
        columnP = Math.floor(Math.random() * 9);
        countWord = 0;
        if(wordsSelect[i].length < wordsTable[lineP].length - columnP+1 && currentWord !== wordsSelect[i] && !currentLine.includes(wordsTable[lineP])){ //se o tamanho de cada palavra for menor ou igual ao 
            currentWord = wordsSelect[i];
            currentLine.push(wordsTable[lineP]);

            for(let l = 0; l < wordsSelect[i].length; l++){ 
                wordsTable[lineP][columnP+countWord] = wordsSelect[i][l];
 
                countWord += 1;
            }
        }else{
            i--;
            console.log("não cabe");
        }
    }
    console.table(wordsTable);
    return wordsTable;
}
positionTable();



const randomLetters = () =>{
    const aToZ = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const tableWords = positionTable();
    let randomP;
    


    for(let i = 0; i < tableWords.length; i++){
        for(let j = 0; j < tableWords[i].length; j++){
            randomP = Math.floor(Math.random() * 25);
            if(tableWords[i][j].length === 0){
                tableWords[i][j] = aToZ[randomP]
            }
        }
    }
    console.table(tableWords);
}
randomLetters()