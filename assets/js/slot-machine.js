//START global-variables
    const buttonGame02 = document.getElementById("slot-roll");
    const leverRod = document.getElementById("slot-rod");
    const coin1 = document.getElementById('coin1');
    const coin2 = document.getElementById('coin2');
    const coin3 = document.getElementById('coin3');
    const coin4 = document.getElementById('coin4');
    const coin5 = document.getElementById('coin5');
    const coin6 = document.getElementById('coin6');
    const coin7 = document.getElementById('coin7');
    const coin8 = document.getElementById('coin8');
    const coin9 = document.getElementById('coin9');
    const coin10 = document.getElementById('coin10');
    const message = document.getElementById('message');
    const imagem = document.getElementsByClassName("game--background--black")[0];
    const img1 = document.getElementsByClassName("slot--image")[0];
    const img2 = document.getElementsByClassName("slot--image")[1];
    const img3 = document.getElementsByClassName("slot--image")[2];

    
//END global-variables

//START dynamic-content-main
    const Aleatorio = () =>{
        return Math.floor(Math.random() * 12) +1;
    }

    const conditionWin = (img1, img2, img3) =>{ 
        //Class-toggle
        if(Array.from(message.classList).includes('message--win')){
            message.classList.toggle('message--win');
        } else if(Array.from(message.classList).includes('message--lose')){
            message.classList.toggle('message--lose');
        } else{
            message.classList.toggle('message--roll');
        }


        if(img1 === img2 && img2 === img3 ){
            //Class-toggle
            message.classList.toggle('message--win');
            coin1.classList.toggle('animation');
            coin2.classList.toggle('animation');
            coin3.classList.toggle('animation');
            coin4.classList.toggle('animation');
            coin5.classList.toggle('animation');
            coin6.classList.toggle('animation');
            coin7.classList.toggle('animation');
            coin8.classList.toggle('animation');
            coin9.classList.toggle('animation');
            coin10.classList.toggle('animation');

            //Content-add
            message.innerText = 'Win!';

            setTimeout(
                () => {
                    //Variable
                    const coin1 = document.getElementById('coin1');
                    const coin2 = document.getElementById('coin2');
                    const coin3 = document.getElementById('coin3');
                    const coin4 = document.getElementById('coin4');
                    const coin5 = document.getElementById('coin5');
                    const coin6 = document.getElementById('coin6');
                    const coin7 = document.getElementById('coin7');
                    const coin8 = document.getElementById('coin8');
                    const coin9 = document.getElementById('coin9');
                    const coin10 = document.getElementById('coin10');
    
                    //Class-toggle
                    coin1.classList.toggle('animation');
                    coin2.classList.toggle('animation');
                    coin3.classList.toggle('animation');
                    coin4.classList.toggle('animation');
                    coin5.classList.toggle('animation');
                    coin6.classList.toggle('animation');
                    coin7.classList.toggle('animation');
                    coin8.classList.toggle('animation');
                    coin9.classList.toggle('animation');
                    coin10.classList.toggle('animation');
                },
                2500
            );

        }else{
            //Class-toggle
            message.classList.toggle('message--lose');

            //Content-add
            message.innerText = 'Lose!';
        }
    }

    const nextImg = () =>{
        let img1Variable;
        let img2Variable;
        let img3Variable;
        img1Variable = Aleatorio();
        img1.src=`./assets/img/caça-níqueis/img${img1Variable}.png`;
        img2Variable = Aleatorio();
        img2.src=`./assets/img/caça-níqueis/img${img2Variable}.png`;
        img3Variable = Aleatorio();
        img3.src=`./assets/img/caça-níqueis/img${img3Variable}.png`;
    }

    const imgAnimation = () =>{
        //Class-toggle
        if(Array.from(message.classList).includes('message--win')){
            message.classList.toggle('message--win');
        } 

        if (Array.from(message.classList).includes('message--lose')){
            message.classList.toggle('message--lose');
        }

        buttonGame02.removeEventListener("click", imgAnimation);

        let interval = setInterval(() => {
            nextImg();
        },100)
        setTimeout(() => {
            adding();
            clearInterval(interval)}, 6000);
        
        //Class-toggle
        buttonGame02.classList.toggle('animation');
        leverRod.classList.toggle('animation');
        message.classList.toggle('message--roll');

        //Content-add
        message.innerText = 'Roll!!';

        setTimeout(
            () => {
                //Variable
                const button = document.getElementById("slot-roll");
                const rod = document.getElementById("slot-rod");

                //Class-toggle
                button.classList.toggle('animation');
                rod.classList.toggle('animation');
            },
            2500
        );
    }

    const adding = (e) =>{
        // imgAnimation();
        let img1Variable;
        let img2Variable;
        let img3Variable;

        img1Variable = Aleatorio();
        img1.src=`./assets/img/caça-níqueis/img${img1Variable}.png`;
        img2Variable = Aleatorio();
        img2.src=`../assets/img/caça-níqueis/img${img2Variable}.png`;
        img3Variable = Aleatorio();
        img3.src=`./assets/img/caça-níqueis/img${img3Variable}.png`;

        conditionWin(img1Variable, img2Variable, img3Variable)
        buttonGame02.addEventListener("click", imgAnimation);
    }
//END dynamic-content-main

//START event-listeners
buttonGame02.addEventListener("click", imgAnimation);
//END event-listeners