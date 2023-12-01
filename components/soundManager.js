import Sound from "react-native-sound"; 

// Enable playback in silence mode
Sound.setCategory('Playback');


const createNewSound = (fileName) => {
    var newSound = new Sound(fileName, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log("Failed to load the sound",fileName, ". ERROR:", error);
          return;
        }
    });

    return newSound;
}

var autumnWaltz = createNewSound("autumn_waltz.mp3");
var moonlight = createNewSound("moonlight.mp3");
var melancholic = createNewSound("melancholic.mp3");
var epicHollywoodTrailer = createNewSound("epic_hollywood_trailer.mp3");
var spookyPiano = createNewSound("spooky_piano.mp3");
var clairDeLune = createNewSound("clair_de_lune_claude_debussy_moonlight.mp3");
var lullaby = createNewSound("brahmsx27_lullaby.mp3");

const sounds = {
    0 : {
        sound: autumnWaltz,
        name: "Autumn Waltz",
        author: "Scott Buckley"
    },
    1 : {
        sound: moonlight,
        name: "Moonlight",
        author: "Oleksii Kalyna"
    },
    2 : {
        sound: melancholic,
        name: "Melancholic",
        author: "Oleg Kyrylkovv"
    },
    3 : {
        sound: epicHollywoodTrailer,
        name: "Epic Hollywood Trailer",
        author: "Zakhar Valaha"
    },
    4 : {
        sound: spookyPiano,
        name: "Spooky Piano",
        author: "Dmitry Taras"
    },
    5 : {
        sound: clairDeLune,
        name: "Claire De Lune Moonlight",
        author: "Jerome Chauvel"
    },
    6 : {
        sound: lullaby,
        name: "Lullaby",
        author: "Jerome Chauvel"
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
}

/**
 * Plays the corresponding sound with the given sound id
 * @param {Number} soundId The sound id to be played
 */
export async function playSoundById(soundId) {
    await sounds[soundId].sound.play(
        (success) => {
            if (!success) 
                console.log("Playback failed:", sounds[soundId].name, "with id:", soundId);
            else   
                // Play again
                playSoundById(soundId);
        }
    );
}

/**
 * Stops the given sound id from playing
 * @param {Number} soundId The sound id used to stop playing
 */
export function stopSound(soundId) {
    sounds[soundId].sound.stop();
}