console.log("hello");
console.log("Kya Bolti Public");
// Variable
fullName = "Surya Nair";
console.log(fullName);
age = 20;
// to print variable with texts
console.log(`Name : ${fullName} | Age : ${age}`);

// recommended
console.log("Name : "+fullName+" | Age : "+age);

console.log("Name :",fullName,"| Age :",age);


// decaled : it means giving same same of variable.
// update : it means updating values of variable.

// var : Variable can be re-declared & updated. A global scope variable
// let : Variable cannot be re-declared but can be updated. A block scope variable.
// const : Variable cannot re-declared or updated. A block scope vaiable.

// Data Types :
// primitives type : number,string,boolean,undefined,null,bigint,symbol
// non-primities types : objects --> arrays, functions
console.log(typeof age);
console.log(typeof fullName);
let num = String("24");
console.log(typeof num);

// object 
const Student = {
    // key : value
    firstName : "Surya",
    lastName : "Nair",
    age : 20,
    score : 65,
    isPass : true,
};
console.log(Student);
console.log(typeof Student);
console.log(Student["firstName"]);
console.log(Student.lastName);

const instaProfile = {
    username : "shradhakhapra",
    posts : 195,
    followers : 569000000,
    follwing : 4,
    isFollow : true,
};
console.log(instaProfile);

// guess game
let gameNum = 25;
let userNum = prompt("Guess Number : ");
while(userNum != gameNum){
    userNum = prompt("Guess Again : ");   
}

console.log("You Guessed It Correct!");

// Strings
let str1 = "Vishal";
let str2 = "Yadav";
let strLen = str1.length;
let strInd = str1[0];
console.log(`String Length : ${strLen}`);
console.log(`String Index 0 : ${strInd}`);

// String methods : str.toUpperCase()   str.toLowerCase()   str.trim() (remove whitespaces)
// str.slice(start,end)     str1.concat(str2)(join str2 with str1)  str.replace(searchVal,newVal)   str.charAt(idx)
console.log(str1.charAt(5));

let uN = prompt("Enter Full Name : ");
let u = uN.replace(" ","");
let id = '@' + u + u.length;
console.log(`userId : ${id}`);