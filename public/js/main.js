const nav = document.querySelector('.header__nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.header__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');
const sectionHero = document.querySelector('.hero');

document.addEventListener('DOMContentLoaded', () => {
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('header__nav--active');
			navBtn.setAttribute('aria-expanded', 'false');
			navBtn.setAttribute('aria-label', 'Otwórz menu nawigacyjne');
		});
	});
});
const handleNav = () => {
	const isExpanded = navBtn.getAttribute('aria-expanded') === 'true';

	navBtn.setAttribute('aria-expanded', !isExpanded);
	nav.classList.toggle('header__nav--active');

	navBtn.setAttribute('aria-label', isExpanded ? 'Otwórz menu nawigacyjne' : 'Zamknij menu nawigacyjne');

	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation');

		if (item.classList.contains('nav-items-animation')) {
			item.style.animationDelay = `${delayTime / 10}s`; // Correct: "0.1s"
		} else {
			item.style.removeProperty('animation-delay'); // RESET!
		}
		delayTime++;
	});
};

// THROTTLE SCROLL
let ticking = false;
const handleObserver = () => {
	if (!ticking) {
		requestAnimationFrame(() => {
			const currentSection = window.scrollY;

			let currentBarsClass = false; // default: white bars

			for (let i = allSections.length - 1; i >= 0; i--) {
				const section = allSections[i];
				if (section.offsetTop <= currentSection + 60) {
					currentBarsClass = section.classList.contains('white-section');
					break;
				}
			}

			navBtnBars.classList.toggle('black-bars-color', currentBarsClass);

			ticking = false;
		});

		ticking = true;
	}
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver);
