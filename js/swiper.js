// JavaScript - Swiper Configuration
const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: false,

	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},

	slidesPerView: 1.2,
	spaceBetween: 20,

	// Additional options for better UX
	simulateTouch: false,
	touchAngle: 45,
	grabCursor: true,
	watchOverflow: true,

	// Responsive breakpoints
	breakpoints: {
		// Mobile (do 575px) - 1 card with 10px space
		375: {
			slidesPerView: 1.1,
			spaceBetween: 10,
			centeredSlides: true,
			allowTouchMove: true,
		},

		// Mobile Large (576px - 767px)
		576: {
			slidesPerView: 1.5,
			spaceBetween: 15,
			centeredSlides: true,
			allowTouchMove: true,
		},

		// Tablet (768px - 991px) - 2 cards with 20px space
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
			centeredSlides: false,
			allowTouchMove: false,
		},

		// Desktop Small (992px - 1199px) - 3 cards with 30px space
		992: {
			slidesPerView: 3,
			spaceBetween: 30,
			allowTouchMove: true,
		},

		// Desktop Large (1200px+) - 3 cards with 40px space
		1200: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
