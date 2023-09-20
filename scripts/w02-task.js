/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Jared Dolinar";
let currentYear = "2023";
let profilePicture = 'images/picture.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('main#home picture img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of [${fullName}]`);

/* Step 5 - Array */
let favoriteFoods = ['Pizza', 'Grapes', 'Strawberries', 'Cheese Burgers'];
//foodElement.textContent = `${favoriteFoods}`;
foodElement.innerHTML += `<br>${favoriteFoods}`;

let favoriteFood = 'Chocolate';
favoriteFoods.push(favoriteFood)
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;



