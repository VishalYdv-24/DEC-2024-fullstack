/**
Attribute : to get attribute tags
getAttribute(attr) //to get the attribute value.
setAttribute(attr,value) //to set the attribute value.

Style : to get style of elements
node.style
 */
let ele = document.querySelector("div");
console.log(ele.setAttribute("class","vis"));
ele.style.backgroundColor = "green";





/**
//  CREATE ELEMENT 
document.createElement( ele/tag_name );

// INSERT ELEMENTS
node.append( el ) : adds at the end of node (inside).
node.prepend( el ) : adds at the start of the node (outside).
node.before( el ) : adds brfore the node (outside)
node.after( el ) : adds after the node (outside)

// DELETE ELEMENTS
node.remove() : removes the node
 */

let newButton = document.createElement("button");
newButton.innerText = "Click Me!";

let divEle = document.querySelector("div");
// divEle.append(newButton);
// divEle.prepend(newButton);
// divEle.before(newButton);
// divEle.after(newButton);

newButton.style.color = "white";
newButton.style.backgroundColor = "red";

let newPara = document.createElement("p");
newPara.innerText = "This New para made from javaScript.";

divEle.append(newPara);
newPara.remove();

let bodyTag = document.querySelector("body");
bodyTag.prepend(newButton);