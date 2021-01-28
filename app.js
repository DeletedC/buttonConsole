const beeper = new (window.AudioContext || window.webkitAudioContext);

// Creating a sine wav and volume
// Connecting the volume to the DOM
const beepC = beeper.createOscillator();
const beepD = beeper.createOscillator();
const beepE = beeper.createOscillator();
const beepF = beeper.createOscillator();
const beepG = beeper.createOscillator();
const beepA = beeper.createOscillator();
const beepB = beeper.createOscillator();
const beepC6 = beeper.createOscillator();
const beepD6 = beeper.createOscillator();

const volume = beeper.createGain();
volume.connect(beeper.destination);


// Setting note frequencies
beepC.frequency.value = 523.25;
beepD.frequency.value = 587.33;
beepE.frequency.value = 659.25;
beepF.frequency.value = 698.46;
beepG.frequency.value = 783.99;
beepA.frequency.value = 880.00;
beepB.frequency.value = 987.77;
beepC6.frequency.value = 1046.50;
beepD6.frequency.value = 1174.66;

// Setting the volume to 0
// volume.gain.value = 0;

// Starting the sounds, connecting to volume
beepC.start();
beepD.start();
beepE.start();
beepF.start();
beepG.start();
beepA.start();
beepB.start();
beepC6.start();
beepD6.start();

// beepC.connect(volume);
// beepD.connect(volume);
// beepE.connect(volume);

// Function to start and stop the sound
// const beep = () => {

//     console.log("Hi from your Beep!");
//     volume.gain.value = 1;
//     setTimeout(stop, 250);


//     function stop() {
//         volume.gain.value = 0;
//     }
// }

// Connects a note
const beepStart = (id) => {

    switch (id) {
        case '1':
            beepC.connect(volume);
            break;
        case '2':
            beepD.connect(volume);
            break;
        case '3':
            beepE.connect(volume);
            break;
        case '4':
            beepF.connect(volume);
            break;
        case '5':
            beepG.connect(volume);
            break;
        case '6':
            beepA.connect(volume);
            break;
        case '7':
            beepB.connect(volume);
            break;
        case '8':
            beepC6.connect(volume);
            break;
        case '9':
            beepD6.connect(volume);
            break;
        default:
            alert("SWITCH DEFAULT: Something wasn't caught in the connection.");
    }
}

// Disconnects a note
const beepStop = (id) => {
    switch (id) {
        case '1':
            beepC.disconnect();
            break;
        case '2':
            beepD.disconnect();
            break;
        case '3':
            beepE.disconnect();
            break;
        case '4':
            beepF.disconnect();
            break;
        case '5':
            beepG.disconnect();
            break;
        case '6':
            beepA.disconnect();
            break;
        case '7':
            beepB.disconnect();
            break;
        case '8':
            beepC6.disconnect();
            break;
        case '9':
            beepD6.disconnect();
            break;
        default:
            alert("SWITCH DEFAULT: Something wasn't caught in the disconnection.");
    }
}

// KEYBOARD LOGIC
// Goal: be able to manipulate the sound pad using only arrow keys and spacebar

let active = null;

// Checks for the active div
const isActive = (id) => {
    active = id;
    console.log(active);
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

function keyUpHandler(event) {
    switch (event.keycode) {
        // Up key
        case 38:
            break;
        // Down key
        case 40:
            break;
        // Left key
        case 37:
            break;
        // Right key
        case 39:
            break;
        // Spacebar
        case 32:
            break;
        default:
            break;
    }
}