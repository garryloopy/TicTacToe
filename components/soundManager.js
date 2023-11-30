import Sound from "react-native-sound"; 

// Enable playback in silence mode
Sound.setCategory('Playback');

const createNewSound = (fileName) => {
    var newSound = new Sound(fileName, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log("Failed to load the sound", error);
          return;
        }
        // loaded successfully
        console.log("Successfully loaded: ", fileName)
        console.log("Duration in seconds: " + newSound.getDuration() + "s");
        console.log("\n")
    });

    //Loop indefinitely
    newSound.setNumberOfLoops(-1);
    return newSound;
}

var autumnWaltz = createNewSound("autumn_waltz.mp3");
var moonlight = createNewSound("moonlight.mp3");

const sounds = {
    0 : {
        sound: autumnWaltz,
        name: "Autumn Waltz",
        author: "Scott Buckley"
    },
    1 : {
        sound: moonlight,
        name: "Moonlight",
        author: "Oleksii_Kalyna"
    },
    2 : {
        sound: moonlight,
        name: "Place holder",
        author: "Barack Obama"
    },
    3 : {
        sound: moonlight,
        name: "Place holder",
        author: "Barack Obama"
    },
    4 : {
        sound: moonlight,
        name: "Place holder",
        author: "Barack Obama"
    },
    5 : {
        sound: moonlight,
        name: "Place holder",
        author: "Barack Obama"
    },
    6 : {
        sound: moonlight,
        name: "Place holder",
        author: "Barack Obama"
    }
}


/**
 * Get the available sound given the sound id
 * @param {Number} soundId A unique theme Id
 * @returns The current sound from the given sound id, otherwise return -1
 */
export function getSoundById(soundId) {
    // Check if theme id is in the themes
    if (Object.keys(sounds).some( (currentId) => soundId == currentId)) {
        return sounds[soundId].sound;
    }

    // Not valid
    return -1;
}

/**
 * Gets all the available sounds
 * @returns All the available sounds
 */
export function getAllSounds() {
    return sounds;
}

/**
 * Stops all sounds whether or not they are playing
 */
export function stopAllSounds() {
    Object.keys(sounds).map(
        (soundId) => {
            sounds[soundId].sound.stop();
        }
    )

    console.log("Stopped all sounds");
}

/**
 * Plays the corresponding sound with the given sound id
 * @param {Number} soundId The sound id to be played
 */
export function playSoundById(soundId) {
    console.log("Playing sound", sounds[soundId].name , "with id:", soundId)
    sounds[soundId].sound.play(
        (success) => {
            if (success) {
                console.log("Successfully finished playing sound with id:", soundId)
            } else {
                console.log("Playback failed")
            }
        }
    );
}

/**
 * Stops the given sound id from playing
 * @param {Number} soundId The sound id used to stop playing
 */
export function stopSound(soundId) {
    sounds[soundId].stop();
}