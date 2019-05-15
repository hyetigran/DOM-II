// Your code goes here
// `mouseover`
// `keydown`
// `wheel`
// `drag / drop`
// `load`
// `focus`
// `resize`
// `scroll`
// `select`
// `dblclick`

// Selector Elements
const header = document.querySelector('.main-navigation');
const navLinks = document.querySelectorAll('.nav-link');
const blog = document.querySelectorAll('.logo-heading');
const imgOne = document.querySelector('.img-content img');
const imgTwo = document.getElementsByTagName('img')[3];
const body = document.querySelector('body');

// const header = document.querySelector('.main-navigation');
// const header = document.querySelector('.main-navigation');
// const header = document.querySelector('.main-navigation');

// Event Listener Methods
// Mouseover
header.addEventListener('mouseover', event => (header.style.backgroundColor = 'dodgerblue'));
header.addEventListener('mouseout', event => (header.style.backgroundColor = 'white'));
navLinks.forEach(el => {
	el.addEventListener('mouseover', event => (event.target.style = 'color: white'));
});
navLinks.forEach(el => {
	el.addEventListener('mouseout', event => (event.target.style = 'color: red'));
});

// keydown ... not responding
//blog.addEventListener('keydown', alert("You're about to leave the site."), false);

// dbclick
imgOne.addEventListener('dblclick', event => (imgOne.src = 'img/charmander2.jpeg'));
imgTwo.addEventListener('dblclick', event => (imgTwo.src = 'img/charmander.jpeg'));

// select
const destinations = document.getElementsByTagName('h2')[0].addEventListener('select', selectFunction);

function selectFunction() {
	document.getElementsByTagName('p')[0].innerText = 'Charmander Approves';
}
