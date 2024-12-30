// Function & Methods
/*Syntax:
function functionName(){
    write code here
}

to call function:

functionName();
*/
function printinfo(name){
    console.log(name,"Hello From Function block.");
}
function sum(num){
    let s = 10;
    s += num;
    return s;
}
let num = 5;
let name = "Vishal";
printinfo(name);
console.log(sum(num));

// Arrow function : shorter form of function
// Syntax : const functionName = (parameter1,2,3...) => {
    // wirte code here
// }

const sum2 = (num) => {
    return num+1;
}
console.log(sum2);
console.log(sum2(num));

// return number of vowels from string
let str = "aeiouaeiouiiii";

// using normal fuctions
// function vowels(str){
//     let vowelnum = 0;
//     for(let i=0;i<str.length;i++){
//         if('a' == str[i]){
//             vowelnum++;
//         }
//         else if('e' == str[i]){
//             vowelnum++;
//         }
//         else if('i' == str[i]){
//             vowelnum++;
//         }
//         else if('o' == str[i]){
//             vowelnum++;
//         }
//         else if('u' == str[i]){
//             vowelnum++;
//         }
//     }
//     return vowelnum;
// }

// using arrow function
let vowels = (str) => {
    let vowelnum = 0;
    for(const char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            vowelnum++;
        }
    }
    return vowelnum;
}

console.log(vowels(str));


// forEach Loop in Arrays
// Syntax : arr.forEach(callBackFunction)   callBackFunction : here,it is a function to execute for each elemnet in the array   *A callBackFunction passed as an argument to another function
/*
arr.forEach((value,index,array) =>{
    console.log(val);
})
*/

let arr = ["mumbai","delhi","pune","banglore"];
arr.forEach(function(val,indx,arr){
    console.log(val,indx,arr);
})

arr.forEach((val,indx,arr) => {
    console.log(val.toUpperCase(),indx,arr);
})

let numArr = [1,2,3,4,5,6,7,8,9];
numArr.forEach((val) => {
    console.log(`${val}:${val*val}`);
})

// MAP METHOD 
/*
Creats a new array with results of some operations. The value its callback returns are used to form new array
syntax:
arr.map(callbackfnx(value,index,array))
*/

let newArr = numArr.map((val) => {
    return val**2;
})
console.log(newArr);

// FILTER METHODS
/*
Create new array of elements that give true for a condition/filter
eg:all even elements
syntax :
let newArr2 = arr.filter((val) => {
    return val%2 === 0;
    })
*/

let newArr2 = numArr.filter((val) => {
    return val%2 === 0;
})
console.log(newArr2);

// REDUCE METHOD
/*
Perfoms some ooperations & reduces the array to a single value. It returns that single value.
example to find sum of numbers
in callBack Function (result,value)
*/
const array = [1,2,3,4];
const sumOfNum = array.reduce((res,curr) => {
    return res + curr;
});

console.log(sumOfNum);

let marks = [95,24,95,71,82,45,90];
let Above90 = marks.filter((val) => {
    return val > 90;
});
console.log(Above90);

let userNum = prompt("Enter num :");
let userArr = [];
for(let i =0 ;i<userNum;i++){
    userArr[i] = i+1;
}
console.log(userArr);

let sumUserArr = userArr.reduce((res,val) => {
    return res + val;
});
console.log(sumUserArr);

let productUserArr = userArr.reduce((res,val) => {
    return res * val;
});
console.log(productUserArr);