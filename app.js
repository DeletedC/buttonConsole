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
const beeper10 = new AudioContext();
const beeper11 = new AudioContext();
const beeper12 = new AudioContext();
const beeper13 = new AudioContext();

beeperArray = [
    beeper1,
    beeper2,
    beeper3,
    beeper4,
    beeper5,
    beeper6,
    beeper7,
    beeper8,
    beeper9,
    beeper10,
    beeper11,
    beeper12,
    beeper13
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

// Whole tones
const beepC = beeper1.createOscillator();
const beepD = beeper2.createOscillator();
const beepE = beeper3.createOscillator();
const beepF = beeper4.createOscillator();
const beepG = beeper5.createOscillator();
const beepA = beeper6.createOscillator();
const beepB = beeper7.createOscillator();
const beepC6 = beeper8.createOscillator();

// Half tones
const beepDb = beeper9.createOscillator();
const beepEb = beeper10.createOscillator();
const beepGb = beeper11.createOscillator();
const beepAb = beeper12.createOscillator();
const beepBb = beeper13.createOscillator();

// let volume1, volume2, volume3, volume4, volume5, volume6, volume7, volume8, volume9;
// const volumeArray = [volume1, volume2, volume3, volume4, volume5, volume6, volume7, volume8, volume9];

// Creates and connects gain nodes for each note
// for (let x = 0; x < beeperArray.length; x++) {
//     volumeArray[x] = beeperArray[x].createGain();
//     volumeArray[x].connect(beeperArray[x].destination);
// }

// Creates gain nodes for each note
const gainC = beeper1.createGain();
const gainD = beeper2.createGain();
const gainE = beeper3.createGain();
const gainF = beeper4.createGain();
const gainG = beeper5.createGain();
const gainA = beeper6.createGain();
const gainB = beeper7.createGain();
const gainC6 = beeper8.createGain();
const gainDb = beeper9.createGain();
const gainEb = beeper10.createGain();
const gainGb = beeper11.createGain();
const gainAb = beeper12.createGain();
const gainBb = beeper13.createGain();

// Connects gain nodes for each note
gainC.connect(beeper1.destination);
gainD.connect(beeper2.destination);
gainE.connect(beeper3.destination);
gainF.connect(beeper4.destination);
gainG.connect(beeper5.destination);
gainA.connect(beeper6.destination);
gainB.connect(beeper7.destination);
gainC6.connect(beeper8.destination);

gainDb.connect(beeper9.destination);
gainEb.connect(beeper10.destination);
gainGb.connect(beeper11.destination);
gainAb.connect(beeper12.destination);
gainBb.connect(beeper13.destination);



// const volume = beeper.createGain();
// volume.connect(beeper.destination);


// Setting note frequencies

// Whole tones
beepC.frequency.value = 523.25;
beepD.frequency.value = 587.33;
beepE.frequency.value = 659.25;
beepF.frequency.value = 698.46;
beepG.frequency.value = 783.99;
beepA.frequency.value = 880.00;
beepB.frequency.value = 987.77;
beepC6.frequency.value = 1046.50;

// Half tones
beepDb.frequency.value = 554.37;
beepEb.frequency.value = 622.25;
beepGb.frequency.value = 739.99;
beepAb.frequency.value = 830.61;
beepBb.frequency.value = 932.33;

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

beepDb.start();
beepEb.start();
beepGb.start();
beepAb.start();
beepBb.start();

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

    console.log(id + ' starting');

    switch (id) {
        case 'C':
            beepC.connect(gainC);
            break;
        case 'D':
            beepD.connect(gainD);
            break;
        case 'E':
            beepE.connect(gainE);
            break;
        case 'F':
            beepF.connect(gainF);
            break;
        case 'G':
            beepG.connect(gainG);
            break;
        case 'A':
            beepA.connect(gainA);
            break;
        case 'B':
            beepB.connect(gainB);
            break;
        case 'C6':
            beepC6.connect(gainC6);
            break;
        case 'Db':
            beepDb.connect(gainDb);
            break;
        case 'Eb':
            beepEb.connect(gainEb);
            break;
        case 'Gb':
            beepGb.connect(gainGb);
            break;
        case 'Ab':
            beepAb.connect(gainAb);
            break;
        case 'Bb':
            beepBb.connect(gainBb);
            break;   
        default:
            console.log("SWITCH DEFAULT: Something wasn't caught in the connection.");
    }
}

// Disconnects a note
const beepStop = (id) => {
    
    console.log(id + ' stopping');

    switch (id) {
        case 'C':
            beepC.disconnect();
            break;
        case 'D':
            beepD.disconnect();
            break;
        case 'E':
            beepE.disconnect();
            break;
        case 'F':
            beepF.disconnect();
            break;
        case 'G':
            beepG.disconnect();
            break;
        case 'A':
            beepA.disconnect();
            break;
        case 'B':
            beepB.disconnect();
            break;
        case 'C6':
            beepC6.disconnect();
            break;
        case 'Db':
            beepDb.disconnect();
            break;
        case 'Eb':
            beepEb.disconnect();
            break;
        case 'Gb':
            beepGb.disconnect();
            break;
        case 'Ab':
            beepAb.disconnect();
            break;
        case 'Bb':
            beepBb.disconnect();
            break; 
        default:
            console.log("SWITCH DEFAULT: Something wasn't caught in the disconnection.");
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

