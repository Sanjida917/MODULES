

//-------------------- CSS In JAVA SCRIPT ------------------------


// console.log('Hello JavaScript');
// console.log("We Are Goiing To work Combinedly With HtM, CSS And JavaScript.");
// console.log(document);
// console.log(document.body);

const sections = document.querySelectorAll('section');
console.log(sections);
console.log("\n\n\nSections Are : ")
for (const section of sections) {
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '5px';
    section.style.paddingLeft = '10px';
    section.style.backgroundColor = 'lightBlue';
    //The current section will get this styles newly added sections will not get the style.
}
const titleAlign = document.getElementById('fruits-title');
titleAlign.style.marginRight = '10px';
document.getElementById('fruits').style.backgroundColor = 'lightgray'

//Add a new class to the id location
const addClass = document.getElementById('fruits');
addClass.classList.add('large-text');
//there is no class named "large-text" in html but i can do that by jS and can make styles and also can change the styles here(in JS file) or can by CSS-Styles.

//example of DOM node
const placesContainer = document.getElementById('dream-land');
console.log(placesContainer);
console.log(placesContainer.childNodes);
console.log(placesContainer.childNodes[0]);
console.log(placesContainer.childNodes[5]);
console.log(placesContainer.childNodes[3].childNodes);
//ChildNodes of ChildNode
console.log(placesContainer.childNodes[3].childNodes[5]);

//next Siblings
console.log(placesContainer.childNodes[3].childNodes[5].nextSibling);
//next of the next siblings
console.log(placesContainer.childNodes[3].childNodes[5].nextSibling.nextSibling);

//Previous Siblings
console.log(placesContainer.childNodes[3].childNodes[5].previousSibling);
//previous of previous siblings
console.log(placesContainer.childNodes[3].childNodes[5].previousSibling.previousSibling);

// console.log(placesContainer.firstChild);
console.log(placesContainer.firstChild);


//add a new list within specific id with "createElement"  which are called as a dynamic list
const placesUl = document.querySelector('#dream-land ul');
console.log(placesUl);

const newLi = document.createElement('li');
newLi.innerText = '** Main Destination is Qaabaaaa **'
console.log("New-List Created :", newLi)


//append(like push()) -> add (something) to the end of a written document.
placesUl.append(newLi);

//adding another dynamic list
const newLi2 = document.createElement('li');
newLi2.innerText = " ** I'll Do Umrah-Hajj Very Soon InshaAllah ** ";
//addedthe dynami list 2
placesUl.append(newLi2);


//parent-node
console.log(placesUl.parentNode);
//parent of parent node
console.log(placesUl.parentNode.parentNode);
console.log(placesUl.parentNode.parentNode.parentNode);
console.log(placesUl.parentNode.parentNode.parentNode.parentNode);
console.log(placesUl.parentNode.parentNode.parentNode.parentNode.parentNode);
