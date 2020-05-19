const testimonialOne = document.querySelector('.testimonial-one');
const testimonialTwo = document.querySelector('.testimonial-two');
const slideButtonOne = document.querySelector('#slide-button-one');
const slideButtonTwo = document.querySelector('#slide-button-two');

function changeSlide(event) {
	if (event.target.matches('img')) {
		console.log('clicked');
		testimonialOne.classList.toggle('display-none');
		testimonialTwo.classList.toggle('display-none');
	}
}

slideButtonOne.addEventListener('click', changeSlide);
slideButtonTwo.addEventListener('click', changeSlide);
