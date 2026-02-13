// conditional statement
//1.if_statement
let age =18;
if(age>=18){
    console.log("you can vote");
}
  // practice question on if statement

  //traffic light system

  let color = "red"
  if(color=="red"){
    console.log("Stop light color is red");
  }
  if(color==="yellow light color is yellow"){
    console.log("Slow Down");
  }
  if(color==="green light color is green"){
    console.log("Go");
  }


  //2.else if -- 

  let marks = 90;
  if(marks>=80){
    console.log("A+");
  }else if(marks>=60){
    console.log("A");
  }else if(marks>=33){
    console.log("B");
  }else if(marks<33){
    console.log("F");
  }


  //3.Nested if-else
  // nesting is writing if-else inside if-else statements.it can have many levels.

  let mark = 40;
  if(mark>=33){
    console.log("pass");
    if(mark>=80){
      console.log("Grade : O");
    }else{
      console.log("Grade : A");
    }
  }else{
    console.log("better luck next time");
  }



  
