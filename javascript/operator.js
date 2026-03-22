// 1. arithmetic operators
let a = 10;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

// 2.unary operators
console.log(b++);//5
console.log(++b);//7


//3.assignment operators

// 4. comparison operator
// >,>=,<,<=,!=,==,===
let x = 20;
let y = "20"
console.log(a>b);
console.log(x==y); // comapres value not type
console.log(x===y);// compares both value and type


// logical operators
//1. and operator
let marks = 23;
if((marks>33 && marks <=80)|| !false){
    console.log("pass"); // pass
}

//2. or operator 
let age = 19;
if(age>=20 || age<=25){
    console.log("You can vote"); // pass
}


// not operator
let isLoggedin=false;
if(! isLoggedin){
    console.log("Please log in your system");
}

let rankTop = true;
if( ! rankTop){
    console.log("you will get cycle");
}
