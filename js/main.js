const nav = document.querySelector('.header__nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.header__item');

const handleNav = () => {
	nav.classList.toggle('header__nav--active');

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('header__nav--active');
		});
	});

	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation');
		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

navBtn.addEventListener('click', handleNav);
