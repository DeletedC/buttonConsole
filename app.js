const beeper = new (window.AudioContext || window.webkitAudioContext);

// Creating a sine wav and volume
// Connecting the volume to the DOM
const sine = beeper.createOscillator();
const volume = beeper.createGain();
volume.connect(beeper.destination);

// Setting the volume to 0
volume.gain.value = 0;

// Starting the sound, connecting to volume
sine.start();
sine.connect(volume);

// Function to start and stop the sound
// const beep = () => {

//     console.log("Hi from your Beep!");
//     volume.gain.value = 1;
//     setTimeout(stop, 250);


//     function stop() {
//         volume.gain.value = 0;
//     }
// }

// Turns the volume up
const beepStart = () => {
    volume.gain.value = 1;
}

// Turns the volume down
const beepStop = () => {
    volume.gain.value = 0;
}