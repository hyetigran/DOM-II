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
const navLinks = document.querySelectorAll('nav a');
const blog = document.querySelectorAll('.logo-heading');
const imgOne = document.querySelector('.img-content img');
const imgTwo = document.getElementsByTagName('img')[3];
const body = document.querySelector('body');

// Event Listener Methods
// Mouseover
header.addEventListener('mouseover', event => (header.style.backgroundColor = 'dodgerblue'));
header.addEventListener('mouseout', event => (header.style.backgroundColor = 'white'));
navLinks.forEach(el => {
	el.addEventListener('mouseover', event => {
		event.target.classList.toggle((el.style.color = 'white'));
	});
});
navLinks.forEach(el => {
	el.addEventListener('mouseout', event => {
		event.target.classList.toggle((el.style.color = '#212529'));
	});
});

// dbclick
imgOne.addEventListener('dblclick', event => (imgOne.src = 'img/charmander2.jpeg'));
imgTwo.addEventListener('dblclick', event => (imgTwo.src = 'img/charmander.jpeg'));

// Change Navigation border style to red on wheel
window.addEventListener('wheel', event => (header.style.borderBottom = '2px solid red'));

// Scroll
document.addEventListener('scroll', event => {
	popup('.floating.top-right', `Scroll Position: ${window.scrollY}`, 'blue');
});

// Resize
window.addEventListener('resize', event => {
	popup('.floating.top-right', `Width: ${window.innerWidth}txt`, 'red');
});

// Focus
document.querySelector('header input').addEventListener('focus', e => {
	e.target.style.width = '30%';
});

// KeyDown
document.addEventListener('keydown', e => {
	popup('.floating.top-right', e.code, 'purple');
});

// Drag
imgSelect = document.querySelector('.home .intro img');
imgSelect.addEventListener('drag', e => {
	e.target.style.border = 'solid #ffc600 5px';
});

// Add load event to header image, however, it fires on page load...
imgSelect.addEventListener('load', e => {
	alert('Image Draged');
});

// Custom Function
function popup(selector, textSource, color) {
	const float = document.querySelector(selector);
	float.textContent = textSource;
	float.style.display = 'block';
	float.style.color = color;
	float.style.border = `3px solid ${color}`;
	setTimeout(() => {
		float.style.color = 'white';
		float.style.border = 'unset';
		float.style.display = 'none';
	}, 1000);
}
