const student ={
    name : "Chandani",
    age: 23,
    city : "Pune",
    course: "MERN"
}
console.log(student);

document.write(JSON.stringify(student));

document.write("<pre>" + JSON.stringify(student,null,2) + "</pre>");


const post = {
    username:"CA",
    content:"This is my #first post",
    likes:150,
    reposts:5,
    tags:["@apnacollege","@delta"],
    1:'a'
}
console.log(post);

document.write("<pre>" +JSON.stringify(post,null,2) +"</pre>"); // JSON.stringify(value,replacer,space)


// how get values 
console.log(student["name"]);
console.log(student.name);