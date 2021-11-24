//START global-variables
const buttonGame02 = document.getElementById("slot-roll");
const imagem = document.getElementsByClassName("game--background--black")[0];
const img1 = document.getElementsByClassName("div--box--img")[0];
const img2 = document.getElementsByClassName("div--box--img")[1];
const img3 = document.getElementsByClassName("div--box--img")[2];

//END global-variables

//START dynamic-content-header
//END dynamic-content-header

//START dynamic-content-main
 
const Aleatorio = () =>{
    return Math.floor(Math.random() * 12) +1;
}

const conditionWin = (img1, img2, img3) =>{
    if(img1 === img2 && img2 === img3 ){
        console.log("JackPot")
    }else{
        console.log("Tente Novamente!")
    }
}
// const imgAnimation = () =>{
//     img1Variable = Aleatorio();
//     img1.src=`./assets/img/game02/img${img1Variable}.png`
//     img2Variable = Aleatorio();
//     img2.src=`./assets/img/game02/img${img2Variable}.png`
//     img3Variable = Aleatorio();
//     img3.src=`./assets/img/game02/img${img3Variable}.png`
// }
const adding = (e) =>{
    let img1Variable;
    let img2Variable;
    let img3Variable;

    console.log(e.target)
    img1Variable = Aleatorio();
    img1.src=`./assets/img/game02/img${img1Variable}.png`
    img2Variable = Aleatorio();
    img2.src=`./assets/img/game02/img${img2Variable}.png`
    img3Variable = Aleatorio();
    img3.src=`./assets/img/game02/img${img3Variable}.png`

    conditionWin(img1Variable, img2Variable, img3Variable)
}

//END dynamic-content-main

//START call-functions
//END call-functions

//START event-listeners
buttonGame02.addEventListener("click", adding);
//END event-listeners






