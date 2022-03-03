//START global-variables
const ambientSound = document.getElementById("ambient-hunting-word");
const scribbleSound = document.getElementById("scribble-hunting-word");

const standbySound = document.getElementById("standby-slot-machine");
const wheelRollSound = document.getElementById("wheelroll-slot-machine");
const winningSound = document.getElementById("winning-slot-machine");
const losingSound = document.getElementById("losing-slot-machine");
//END global-variables

//START sound-effects
function huntingWordsScribble() {
  scribbleSound.play();
}

function slotMachineWin() {
  winningSound.play();
}

function slotMachineLose() {
  losingSound.play();
}

function slotMachineRoll() {
  wheelRollSound.play();
}

function switchVolume(event) {
  const volume = event.target;
  const currentVolume = volume.value;

  if (!ambientSound.paused) {
    ambientSound.volume = currentVolume;
  } else {
    standbySound.volume = currentVolume;
  }
}

function switchMusic(event) {
  const slider = event.target;
  const currentVolume = document.getElementById("games--volume-control").value;
  const gameTitle = document.getElementById("game-title").innerText;
  const onOff = document.getElementById("game-sound").innerText;

  if (slider.tagName === "INPUT") {
    if (onOff === "Som Ligado") {
      if (gameTitle === "Caça-Palavras") {
        standbySound.pause();
        ambientSound.volume = currentVolume;
        ambientSound.loop = true;
        ambientSound.play();
      } else {
        ambientSound.pause();
        standbySound.volume = currentVolume;
        standbySound.loop = true;
        standbySound.play();
      }
    }
  }
}

function switchOnOff(event) {
  //Variables
  const slider = event.target;
  const soundOnOff = document.getElementById("game-sound");
  const currentVolume = document.getElementById("games--volume-control").value;
  const gameTitle = document.getElementById("game-title").innerText;
  const onOff = document.getElementById("game-sound").innerText;

  //Switch-on-off
  if (slider.tagName === "INPUT") {
    if (onOff === "Som Desligado") {
      if (gameTitle === "Caça-Palavras") {
        standbySound.pause();
        ambientSound.volume = currentVolume;
        ambientSound.loop = true;
        ambientSound.play();
      } else {
        ambientSound.pause();
        standbySound.volume = currentVolume;
        standbySound.loop = true;
        standbySound.play();
      }

      soundOnOff.innerText = "Som Ligado";
    } else {
      gameTitle === "Caça-Palavras"
        ? ambientSound.pause()
        : standbySound.pause();

      soundOnOff.innerText = "Som Desligado";
    }
  }
}
//END sound-effects

//START functions-call
//END functions-call

//START events-listeners
const switchGame = document.getElementById("switch-games");
const switchSound = document.getElementById("switch-sound");
const switchVol = document.getElementById("games--volume-control");
const rollSound = document.getElementById("slot-roll");

switchGame.addEventListener("click", switchMusic);
switchSound.addEventListener("click", switchOnOff);
switchVol.addEventListener("input", switchVolume);
rollSound.addEventListener("click", slotMachineRoll);
//END events-listeners

//START exports
export { slotMachineLose, slotMachineWin, huntingWordsScribble };
//END exports
