import {
    StyleSheet
} from "react-native";

// TO ADD A NEW THEME:
// 1. Create a new theme with the given theme template
// 2. Reference the new theme within the themes variable with an UNIQUE ID

/**
 * Represents a black and white theme. Created with style sheet
 */
const blackAndWhite = StyleSheet.create(
    {
        horizontalLine: {
          color: "grey"
        },  
        verticalLine: {
          color: "grey"
        },
        textHeader: {
            color: "black"
        },
        infoBoxBackground: {
            color: "grey"
        },
        infoBoxHeader: {
            color: "white"
        },
        infoBoxSubHeader: {
            color: "white"
        },
        infoBoxBorder: {
            color: "grey"
        },
        buttonBackground: {
            color: "black"
        },
        buttonText: {
            color: "white"
        },
        homeHeader: {
            color: "black"
        },
        backgroundColor: {
            color: "white"
        },
        buttonModalBackground: {
            color: "white"
        },
    }
);
// represents the inverse of the black and white theme

const inverseBlackAndWhite = StyleSheet.create(
    {
        horizontalLine: {
          color: "white"
        },  
        verticalLine: {
          color: "white"
        },
        textHeader: {
            color: "grey"
        },
        infoBoxBackground: {
            color: "white"
        },
        infoBoxHeader: {
            color: "black"
        },
        infoBoxSubHeader: {
            color: "black"
        },
        infoBoxBorder: {
            color: "grey"
        },
        buttonBackground: {
            color: "white"
        },
        buttonText: {
            color: "black"
        },
        homeHeader: {
            color: "white"
        },
        backgroundColor: {
            color: "black"
        },
        buttonModalBackground: {
            color: "black"
        },
    }
);

/**
 * Represents a christmas theme. Created with style sheet
 */
const christmas = StyleSheet.create(
    {
        horizontalLine: {
          color: "green"
        },  
        verticalLine: {
          color: "red"
        },
        textHeader: {
            color: "red"
        },
        infoBoxBackground: {
            color: "green"
        },
        infoBoxHeader: {
            color: "red"
        },
        infoBoxSubHeader: {
            color: "red"
        },
        infoBoxBorder: {
            color: "green"
        },
        buttonBackground: {
            color: "green"
        },
        buttonText: {
            color: "red"
        },
        homeHeader: {
            color: "red"
        },
        backgroundColor: {
            color: "white"
        },
        buttonModalBackground: {
            color: "white"
        },
    }
);

/**
 * Represents an ugly ogre theme. Created with style sheet.
 */
const uglyOgre = StyleSheet.create(
    {
        horizontalLine: {
          color: "#32CD32"
        },  
        verticalLine: {
          color: "green"
        },
        textHeader: {
            color: "green"
        },
        infoBoxBackground: {
            color: "#32CD32"
        },
        infoBoxHeader: {
            color: "green"
        },
        infoBoxSubHeader: {
            color: "white"
        },
        infoBoxBorder: {
            color: "green"
        },
        buttonBackground: {
            color: "#32CD32"
        },
        buttonText: {
            color: "white"
        },
        homeHeader: {
            color: "green"
        },
        backgroundColor: {
            color: "white"
        },
        buttonModalBackground: {
            color: "white"
        },
    }
);
// represents the Bumblebee theme

const bumblebee = StyleSheet.create(
    {
        horizontalLine: {
          color: "#FFD700"
        },  
        verticalLine: {
          color: "black"
        },
        textHeader: {
            color: "#FFD700"
        },
        infoBoxBackground: {
            color: "black"
        },
        infoBoxHeader: {
            color: "#FFD700"
        },
        infoBoxSubHeader: {
            color: "#FFD700"
        },
        infoBoxBorder: {
            color: "black"
        },
        buttonBackground: {
            color: "black"
        },
        buttonText: {
            color: "#FFD700"
        },
        homeHeader: {
            color: "#FFD700"
        },
        backgroundColor: {
            color: "yellow"
        },
        buttonModalBackground: {
            color: "yellow"
        },
    }
);
// represents the oceanic theme

const oceanic = StyleSheet.create(
    {
        horizontalLine: {
          color: "#00FFFF"
        },  
        verticalLine: {
          color: "#00008B"
        },
        textHeader: {
            color: "#00008B"
        },
        infoBoxBackground: {
            color: "#00008B"
        },
        infoBoxHeader: {
            color: "#00FFFF"
        },
        infoBoxSubHeader: {
            color: "white"
        },
        infoBoxBorder: {
            color: "#00FFFF"
        },
        buttonBackground: {
            color: "#00008B"
        },
        buttonText: {
            color: "#00FFFF"
        },
        homeHeader: {
            color: "#00008B"
        },
        backgroundColor: {
            color: "#1E90FF"
        },
        buttonModalBackground: {
            color: "#00FFFF"
        },
    }
);
// represents the royal theme

const royal = StyleSheet.create(
    {
        horizontalLine: {
          color: "#4B0082"
        },  
        verticalLine: {
          color: "#9370DB"
        },
        textHeader: {
            color: "#4B0082"
        },
        infoBoxBackground: {
            color: "#9370DB"
        },
        infoBoxHeader: {
            color: "#4B0082"
        },
        infoBoxSubHeader: {
            color: "#4B0082"
        },
        infoBoxBorder: {
            color: "#800080"
        },
        buttonBackground: {
            color: "#4B0082"
        },
        buttonText: {
            color: "#9370DB"
        },
        homeHeader: {
            color: "#4B0082"
        },
        backgroundColor: {
            color: "#800080"
        },
        buttonModalBackground: {
            color: "#800080"
        },

    }
);
// represents the blood moon theme

const bloodMoon = StyleSheet.create(

    {
        horizontalLine: {
          color: "#FF0000"
        },  
        verticalLine: {
          color: "#FF0000"
        },
        textHeader: {
            color: "#FF0000"
        },
        infoBoxBackground: {
            color: "#FF0000"
        },
        infoBoxHeader: {
            color: "#8B0000"
        },
        infoBoxSubHeader: {
            color: "#8B0000"
        },
        infoBoxBorder: {
            color: "#FF0000"
        },
        buttonBackground: {
            color: "#FF0000"
        },
        buttonText: {
            color: "#8B0000"
        },
        homeHeader: {
            color: "#FF0000"
        },
        backgroundColor: {
            color: "#8B0000"
        },
        buttonModalBackground: {
            color: "#8B0000"
        },
    }
);
// represents the noir theme

const noir = StyleSheet.create(
    {
        horizontalLine: {
          color: "black"
        },  
        verticalLine: {
          color: "white"
        },
        textHeader: {
            color: "black"
        },
        infoBoxBackground: {
            color: "black"
        },
        infoBoxHeader: {
            color: "grey"
        },
        infoBoxSubHeader: {
            color: "white"
        },
        infoBoxBorder: {
            color: "white"
        },
        buttonBackground: {
            color: "black"
        },
        buttonText: {
            color: "white"
        },
        homeHeader: {
            color: "black"
        },
        backgroundColor: {
            color: "grey"
        },
        buttonModalBackground: {
            color: "grey"
        },
    }
);

/**
 * Represents all the themes. 
 * The object must be represented as:
 *  {
 *      themeId: {
 *          theme: themeReference,
 *          name: themeName
 *      }
 *  }
 * themeId: A unique theme id
 * theme: A theme reference. Must follow a specific order.
 * name: The theme name in string format
 */
const themes = {
    0 : {
        theme: uglyOgre,
        name: "Ugly Ogre"
    },
    1 : {
        theme: blackAndWhite,
        name: "Black and white"
    },
    2 : {
        theme: inverseBlackAndWhite,
        name: "Inverse Black and white"
    },
    3 : {
        theme: christmas,
        name: "Christmas"
    },
    4 : {
        theme: bumblebee,
        name: "Bumblebee"
    },
    5 : {
        theme: oceanic,
        name: "Oceanic"
    },
    6 : {
        theme: royal,
        name: "Royal"
    },
    7 : {
        theme: bloodMoon,
        name: "Blood Moon"
    },
    8 : {
        theme: noir,
        name: "Noir"
    }
}


// IMPORTANT:
// In order for themes to work, they must follow be created with a stylesheet in the following format:
// {
//     horizontalLine: {
//       color: colorValue
//     },  
//     verticalLine: {
//       color: colorValue
//     },
//     textHeader: {
//         color: colorValue
//     },
//     infoBoxBackground: {
//         color: colorValue
//     },
//     infoBoxHeader: {
//         color: colorValue
//     },
//     infoBoxSubHeader: {
//         color: colorValue
//     },
//     infoBoxBorder: {
//         color: colorValue
//     },
//     buttonBackground: {
//         color: colorValue
//     },
//     buttonText: {
//         color: colorValue
//     }
// }
// colorValue: The color value for the portion of the theme

/**
 * Get the available theme given the theme id
 * @param {Number} themeId A unique theme Id
 * @returns The current theme from the given theme id, otherwise return -1
 */
export function getThemeById(themeId) {
    // Check if theme id is in the themes
    if (Object.keys(themes).some( (currentId) => themeId == currentId)) {
        return themes[themeId];
    }

    // Not valid
    return -1;
}

/**
 * Gets all the available themes
 * @returns All the available themes
 */
export function getAllThemes() {
    return themes;
}