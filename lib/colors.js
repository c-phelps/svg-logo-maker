// function using an array, and two regex to verify whether the values entered by user are legitimate values that can be accepted for SVG files
function determineIfColor(colorInput, index) {
  // below is our array of accepted colors by SVG
  // prettier-ignore
  const arrColors = ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", 
    "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", 
    "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", 
    "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", 
    "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", 
    "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", 
    "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", 
    "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", 
    "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", 
    "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", 
    "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", 
    "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", 
    "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", 
    "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"];

  // regex to determine if string matches a hex code either 6 or 3 digits:
  // the ^ determines the start of the expression, hash is a literal match to the hash character,
  // parentheses groups the filters that can follow the hash, the square brackets indicate the first string of values that can follow the hash
  // 0 through 9 A through F and a through f (lowercase), the 3 inside of the curly braces indicates the length of the string that can follow the hash,
  // the pipeline states OR in case the string does not match the first set of values and presents a new set of values that can follow the hash
  // inside of the square brackets except this string can accept 6 characters determined by the curly braces wrapping the 6, $ indicates the end of the string
  const regExHex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
  // start the expression at ^ and allow the literal values for rbg, \( to indicate a literal parantheses and a series of if checks using the pipeline |
  // to allow numbers from either 250-255, 249-200, 199-0 for each of the 3 values inside of the parentheses of the rbg(xxx, xxx, xxx) \s* indicates that
  // spaces can be allowed between comma and next value with the * allowing for any amount of spaces, this check occurs 3 times, once for each of the 3 possible values for the rbg
  // then the $ indicates the end of the first search string :
  // /^rgb\((25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?),\s*(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?),\s*(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\)$
  // a pipeline means OR which now allows for another set of conditions to be checked by the regex
  // the following does mostly the same but allows for rbga rather than just rbg and allows for a 4th value to occur in the parentheses with the following for the 4th value
  // we want to accept all values from 0 to 1 so (0? from 0 to \. literal decimal \d+ match one or more digits | OR 1 literal 1 (\. literal decimal 0+ any number of 0s ? means the 0s are optional)
  // ^rgba\((25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?),\s*(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?),\s*(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?),\s*(0?\.\d+|1(\.0+)?)\)$/
  // and we add /i to the end of the regex to make the expression case insensitve
  const regExRBG =
    /^rgb\((25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?),\s*(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?),\s*(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\)$|^rgba\((25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?),\s*(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?),\s*(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?),\s*(0?\.\d+|1(\.0+)?)\)$/i;
  if (arrColors.includes(colorInput.toLowerCase())) {
    return true;
  } else if (regExHex.test(colorInput)) {
    return true;
  } else if (regExRBG.test(colorInput)) {
    return true;
  } else {
    console.log(`${colorInput} is not matching an RBG value, SVG color name or Hex!`);
    return index;
  }
}

module.exports = determineIfColor;
