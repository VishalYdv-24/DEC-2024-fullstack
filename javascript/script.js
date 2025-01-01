/*
Events : the change in the state of an object is known as an Event, Event are fired to notify code of "interesting changes" that may affect code extension.
. mouse events(click,double click etc)
. keyboard events(keypress, keyup,keydown)
. form events(submit etc)
. print event & many more.
 */
// EVENT HANDLING IN JS
// node.event = () => {
//      write code  
// }

let divele = document.querySelector("div");
divele.onmouseover = () => {
    console.log("surya nair");
}

// EVENT OBJECT

let clickMe = document.querySelector("#btn");
clickMe.onclick = (eve) => {
    console.log(eve);
    console.log(eve.type);
    console.log(eve.target);
    console.log(eve.clientX, eve.clientY);
}

/**
EVENT LISTENERS

node.addEventListener(event,callback)

node.removeEventListener(event,callback)
 */

let friend = document.querySelector("#isfriend");
friend.addEventListener("click",() => {
    console.log(friend.innerText,"is your friend.");
})

let notfriend = document.querySelector("#notfriend");
notfriend.addEventListener("click",(evt) => {
    console.log(notfriend.innerText,"is not your friend.");
    // console.log(evt);
})

notfriend.addEventListener("click",(evt) => {
    console.log(notfriend.innerText,"is motherfucker.");
    // console.log(evt);
})

let handler3 = (evt) => {
    console.log(notfriend.innerText,"is nepali bsdk.");
    console.log(evt);
}

notfriend.addEventListener("click",handler3)

notfriend.removeEventListener("click",handler3)


// PRACTICE QUESTION 
let chngMode = document.querySelector("#chngMode");
let page = document.querySelector("body");
let text = document.querySelector("#modeText");
chngMode.addEventListener("click",() => {
    if(chngMode.textContent === "ON"){
        chngMode.textContent = "OFF";
        page.style.backgroundColor = "black";
        text.style.color = "white";
    }
    else if(chngMode.textContent === "OFF"){
        chngMode.textContent = "ON";
        page.style.backgroundColor = "white";
        text.style.color = "black";
    }
})