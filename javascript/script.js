// let header = document.getElementById("heading");
// console.log(header);
// console.dir(header);
// let tagname = document.getElementsByTagName("h1");
// console.dir(tagname);


// // Query Selector
// // document.querySelector( #id/.class/tag ) to get the first element with the tag/class/id
// // document.querySelectorAll( #id/.class/tag ) to get all the element with same tag/class/id
// let elements = document.querySelector(".head");
// console.log(elements);

// let allElements = document.querySelectorAll(".head");
// console.log(allElements);

// // Properties
// /*
// tagName : returns tag for element nodes.
// innerText : returns the text content of the element and all its children.
// innerHTML : returns the plain text or HTML contents in the element. (with all tags same as html file)
// textContent : returns textual content even for hidden elements.
// */
// // console.log(elements.tagName);
// // console.log(elements.innerText);
// // console.log(elements.innerHTML);
// console.log(elements.textContent);
// elements.innerText = "Bhavan's Junior College";

let element = document.querySelector("h2");
element.innerText = element.innerText + " from Apna College Student.";

let num = 0;
for(divs of document.querySelectorAll(".box")){
    console.log(divs.innerText = "New Unique Value "+num);
    num++;
}