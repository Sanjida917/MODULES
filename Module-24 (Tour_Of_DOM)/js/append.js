
//1. Where to add
const placesList = document.getElementById('places-list');


//2. What to add
const lii = document.createElement('li');
lii.innerText = 'Dubai';

//3. Add the child
placesList.appendChild(lii);



//apped to add a new section

// 1. Where to add
const mainContainer = document.getElementById('main-container');


//2. What to add
const newSec = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My FavFoods';
newSec.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = "Biriyani";

const li2 = document.createElement('li');
li2.innerText = "Kacchi";

const li3 = document.createElement('li');
li3.innerText = "Pizza";

const li4 = document.createElement('li');
li4.innerText = "Chinese food";

const li5 = document.createElement('li');
li5.innerText = "Momos";


//3. Add the child

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);

newSec.appendChild(ul);

mainContainer.appendChild(newSec);


//another and easy wayto add a new section with elements 
//set innerHTML Directly

const sectionDress = document.createElement('section');

sectionDress.innerHTML =

`
<h1>My Favourite Flowers</h1>
<ul>
<li>Rose</li>
<li>Tube-Rose</li>
<li>Beli</li>
<li>Bokul</li>
<li>Orchid</li>
</ul>
`
mainContainer.appendChild(sectionDress);


