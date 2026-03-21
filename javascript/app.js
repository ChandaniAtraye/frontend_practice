let pencilPrice = 10;
let penPrice = 20;
// console.log("The total price is : ", pencilPrice+penPrice ,"rupees." );
console.log(`The total price is : ${pencilPrice+penPrice} rupees.`) //  `this is a back ticks`
console.log(`${pencilPrice}`)


//grading statments

let marks = 98;
if(marks>=80){
    console.log("A+");
}
else if(marks>=60){
    console.log("A");
}
else if(marks>=33){
    console.log("B");
}
else if(marks<33){
    console.log("Appear for exam again");
}

let month="Apr";
if(month==="Jan"){
    console.log("Winter");
}else if (month==="Apr"){
    console.log("Summer");
}


//else statement
let age = 19;
if(age>=18){
    console.log("You are eligible for the exam");
}else{
    console.log("You are not eligible for the exam");
}

// nested if statement

let public_age = 15;

if (public_age>=18){
    console.log("You are eligible to vote");
    if(public_age>=25){
        console.log("you can drive, you can vote ,you can get driving license");
    }else{
        ("You cant get driving lices");
    }
}
else{
    console.log("You are not eligible");
}
   