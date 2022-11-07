function RemoveMetric(value) {
    // Removes "px" at end of value

   

    constNumbers = "1234567890.";
    var returnstring = "0";
    // Searches for numbers and creates a string
    for (var index = 0; index < value.length; index++) {

        if (!(constNumbers.indexOf(value[index]) == -1)) {
            returnstring += value[index];
        }

    }
    // Converts the string to a float
    var returnvalue = parseFloat(returnstring);
    // Returns value
    return returnvalue;
}

function RandomColor() {
    var arrColors = ["maroon", "red", "olive", "yellow", "green", "lime", "teal", "aqua"];
    var arrColorsX = ["maroon", "red", "olive", "yellow", "green", "lime", "teal", "aqua", "navy", "blue", "purple", "fuchsia"];
    var rand = Math.floor(Math.random() * 8);
    var color = arrColors[rand];

    return arrColors[Math.floor(Math.random() * 8)]; // 0 - 7
} 