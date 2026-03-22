
//Qs.1. A "good string" is a string that starts with the letter 'a' & has a length>3 .write a program to find if a string is good or not.

let str = "bapple";
if ((str.length > 3) && (str[0] === 'a')) {
    console.log("Good String");
} else {
    console.log("It's not good string");
}

// switch statement

let color = "red";
switch (color) {
    case ("red"):
        console.log("Stop");
        break;
    case ("orange"):
        console.log("Slow down");
        break;
    case ("green"):
        console.log("Go");
        break;
    default:
        console.log("light is broken ");

}