const AudioContext = window.AudioContext || window.webkitAudioContext;
const beeper1 = new AudioContext();
const beeper2 = new AudioContext(); 
const beeper3 = new AudioContext(); 
const beeper4 = new AudioContext(); 
const beeper5 = new AudioContext(); 
const beeper6 = new AudioContext(); 
const beeper7 = new AudioContext(); 
const beeper8 = new AudioContext(); 
const beeper9 = new AudioContext();

beeperArray = [
    beeper1,
    beeper2,
    beeper3,
    beeper4,
    beeper5,
    beeper6,
    beeper7,
    beeper8,
    beeper9
]

// Suspends sound to start in an off state
// Chrome will do this automatically
// This is so it will be the same in other browsers
const suspendAll = () => {
    for (let beeper of beeperArray) {
        beeper.suspend();
    }
}

const resumeAll = () => {
    for (let beeper of beeperArray) {
        beeper.resume();
    }
}

suspendAll();



// Creating a sine wav and volume
// Connecting the volume to the DOM
const beepC = beeper1.createOscillator();
const beepD = beeper2.createOscillator();
const beepE = beeper3.createOscillator();
const beepF = beeper4.createOscillator();
const beepG = beeper5.createOscillator();
const beepA = beeper6.createOscillator();
const beepB = beeper7.createOscillator();
const beepC6 = beeper8.createOscillator();
const beepD6 = beeper9.createOscillator();

let volume1, volume2, volume3, volume4, volume5, volume6, volume7, volume8, volume9;
const volumeArray = [volume1, volume2, volume3, volume4, volume5, volume6, volume7, volume8, volume9];

for (let x = 0; x < beeperArray.length; x++) {
    volumeArray[x] = beeperArray[x].createGain();
    volumeArray[x].connect(beeperArray[x].destination);
}

// const volume = beeper.createGain();
// volume.connect(beeper.destination);


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

// Start and Stop button. Needed for Chrome or else the sound won't start
const soundOnOff = () => {
    const muteButton = document.getElementById("muteButton");

    if (beeper1.state == "suspended") {
        // Resume sound
        // Change button text to STOP
        // Change CSS to STOP color
        
        // beeper.resume();
        resumeAll();

        muteButton.innerHTML = "MUTE";
        muteButton.classList.add('red');
    } else {
        // Suspend sound
        // Change button text to START
        // Change CSS to START color
        
        // beeper.suspend();
        suspendAll();

        muteButton.innerHTML = "UNMUTE";
        muteButton.classList.remove('red');
    }
}

// Connects a note
const beepStart = (id) => {

    switch (id) {
        case '1':
            beepC.connect(volume1);
            break;
        case '2':
            beepD.connect(volume2);
            break;
        case '3':
            beepE.connect(volume3);
            break;
        case '4':
            beepF.connect(volume4);
            break;
        case '5':
            beepG.connect(volume5);
            break;
        case '6':
            beepA.connect(volume6);
            break;
        case '7':
            beepB.connect(volume7);
            break;
        case '8':
            beepC6.connect(volume8);
            break;
        case '9':
            beepD6.connect(volume9);
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

// document.addEventListener('keydown', keyDownHandler);
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

