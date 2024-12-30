//Lecture 4
//Arrays And Methods

let marks = [25,15,12,42,55,5];
// for loop
for(let i = 0;i<marks.length;i++){
    console.log(marks[i]);
}

// for-in
for(i in marks){
    console.log(i);
}

// for-of (better use for-of for array)
for(i of marks){
    console.log(i);
}

// practice: to find average of array nums
let arrNum = [12,45,26,35,15,25];
let sum = 0;
for(let i=0;i<arrNum.length;i++){
    sum += arrNum[i];
}
let avg = sum/arrNum.length;
console.log(`Average : ${avg}`);

// arr = [250,645,300,900,50] replace this numbers after giving 10% off
let arr = [250,645,300,900,50];
for(let i=0;i<arr.length;i++){
    arr[i] -= (arr[i]*0.1);
}
console.log(arr);

// Array Methods:
// push():add to end    pop():delete from end & return      toString():converts array to string
arr.toString();
console.log(typeof arr[0]);
