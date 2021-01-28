const beeper = new (window.AudioContext || window.webkitAudioContext);

// Creating a sine wav and volume
// Connecting the volume to the DOM
const beepC = beeper.createOscillator();
const beepD = beeper.createOscillator();
const beepE = beeper.createOscillator();
const volume = beeper.createGain();
volume.connect(beeper.destination);


// Setting note frequencies
beepC.frequency.value = 523.25;
beepD.frequency.value = 587.33;
beepE.frequency.value = 659.25;

// Setting the volume to 0
// volume.gain.value = 0;

// Starting the sounds, connecting to volume
beepC.start();
beepD.start();
beepE.start();

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
        default:
            alert("SWITCH DEFAULT: Something wasn't caught in the disconnection.");
    }
}