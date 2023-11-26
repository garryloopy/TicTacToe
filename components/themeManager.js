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
        }
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
        }
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
        }
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
    3 : {
        theme: christmas,
        name: "Christmas"
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