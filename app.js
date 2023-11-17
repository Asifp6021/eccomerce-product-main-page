const openBtn = document.querySelector('.nav__logo--img');
const closeBtn = document.querySelector('.nav__holder img');
const mobileNav = document.querySelector('.nav__holder');

const cartMsg = document.querySelector('.cart');
const cartBtn = document.querySelector('.header__cart');

const heroNextBtn = document.querySelector('.btn-left-hero');
const heroPrevBtn = document.querySelector('.btn-right-hero');

const popupNexBtn = document.querySelector('.second-left');
const popupPrevBtn = document.querySelector('.second-right');

const allHeroLargeImage = document.querySelectorAll(
	'.hero__container--img_list img'
);
const heroLargeCurrentImg = document.querySelector('.current');

const allSmallHeroImg = document.querySelectorAll('.hero__small--img figure');

const popupContainer = document.querySelector('.popup-hero');

const popupCloseBtn = document.querySelector('.close');

const currentPopup = document.querySelector('.current-popup');

const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const quantity = document.querySelector('.quntity');

// -----------------------------------------------------------------------------------------------------

minus.addEventListener('click', function () {
	currentValue = parseInt(quantity.innerText, 10);
	quantity.textContent = isNaN(currentValue) ? 0 : currentValue - 1;
});

plus.addEventListener('click', function () {
    let currentValue = parseInt(quantity.textContent, 10);
    quantity.textContent = isNaN(currentValue) ? 0 : currentValue + 1;
});


// -----------------------------------------------------------------------------------------------------------

// nav bar functionality
let bodyEl = document.querySelector('body');

openBtn.addEventListener('click', function () {
	mobileNav.style.transform = 'translateX(0)';
	bodyEl.classList.add('overlay');
});

closeBtn.addEventListener('click', function () {
	mobileNav.style.transform = 'translateX(-200rem)';
	bodyEl.classList.remove('overlay');
});

// ----------------------------------------------------------------------------------------------------

// cart masg fuctionality
cartBtn.addEventListener('click', function () {
	cartMsg.classList.toggle('cart-show');
});

// ----------------------------------------------------------------------------------------------------
// changing image when user clicks on small image

allSmallHeroImg.forEach(function (img, index) {
	img.addEventListener('click', function () {
		heroLargeCurrentImg.src = 'images/image-product-' + (index + 1) + '.jpg';

		popupContainer.style.transform = 'scaleX(1)';

		bodyEl.classList.add('overlay2');

		allHeroLargeImage.forEach(function (currentClass) {
			currentClass.classList.remove('current');
		});

		allHeroLargeImage[index].classList.add('current');

		addSmallImgActiveClass(index);
	});
});

// adding active class dynamically
function addSmallImgActiveClass(smallIndex) {
	allSmallHeroImg.forEach(function (img, i) {
		img.classList.remove('small-active');

		if (i === smallIndex) {
			img.classList.add('small-active');
		}
	});
}

popupCloseBtn.addEventListener('click', function () {
	popupContainer.style.transform = 'scaleX(0)';

	bodyEl.classList.remove('overlay2');
});

// ----------------------------------------------------------------------------------------------------
let currentIndex = 0;
function showImage(index, classis) {
	allHeroLargeImage.forEach(function (img, i) {
		img.classList.toggle(classis, i === index);
	});
}

function showNexImga() {
	const classHere = 'current';
	const classPopHere = 'current-popup';
	currentIndex = (currentIndex + 1) % allHeroLargeImage.length;
	showImage(currentIndex, classHere);
	showImage(currentIndex, classPopHere);
	// updateBtn();
}

function showPrevImage() {
	const classHere = 'current';
	const classPopHere = 'current-popup';
	currentIndex =
		(currentIndex - 1 + allHeroLargeImage.length) % allHeroLargeImage.length;
	showImage(currentIndex, classHere);
	showImage(currentIndex, classPopHere);
	// updateBtn();
}

function updateBtn() {
	if (currentIndex === allHeroLargeImage.length - 1) {
		heroNextBtn.disabled = true;
		popupNexBtn.disabled = true;
	}

	if (currentIndex === 0) {
		heroPrevBtn.disabled = true;
		popupPrevBtn.disabled = true;
	}
}

heroNextBtn.addEventListener('click', showNexImga);
heroPrevBtn.addEventListener('click', showPrevImage);
popupNexBtn.addEventListener('click', showNexImga);
popupPrevBtn.addEventListener('click', showPrevImage);

// -----------------------------------------------------------------------------------------------------------------------
