gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
	'(min-width: 992px)': () => {
		const maskSize = window.innerWidth < 1000 ? '4000vw' : '3000vw';

		gsap.to('.hero__mask-container', {
			maskSize: maskSize,
			WebkitMaskSize: maskSize,
			maskPosition: '66.5% center',
			WebkitMaskPosition: '66.5% center',
			scale: 1.15,
			ease: 'power1.out',

			scrollTrigger: {
				trigger: '.hero',
				start: 'top top',
				end: 'bottom top',
				scrub: 2,
				pin: true,

				onUpdate: self => {
					if (self.progress > 0.8) {
						const fadeProgress = (self.progress - 0.8) / 0.2;
						const opacity = 1 - fadeProgress;

						gsap.set('.hero__mask-container', { opacity: opacity });
					}
				},

				onLeave: () => {
					gsap.to('.hero__mask-container', {
						duration: 0.1,
						ease: 'power2.out',
						onComplete: () => {
							const container = document.querySelector('.hero__mask-container');
							container.style.maskImage = 'none';
							container.style.webkitMaskImage = 'none';
							gsap.set(container, { opacity: 1 });
						},
					});
				},

				onEnterBack: () => {
					gsap.set('.hero__mask-container', { opacity: 1 });
				},
			},
		});

		gsap.utils.toArray('[data-animate]').forEach(el => {
			gsap.to(el, {
				opacity: 1,
				y: 0,
				onStart: () => {
					el.style.zIndex = 1;
				},
				scrollTrigger: {
					trigger: '.hero__mask-container',
					start: 'bottom bottom',
					toggleActions: 'play none none reverse',
				},
				duration: 1,
				ease: 'power2.out',
			});
		});
	},
	'(max-width: 991px)': () => {
		const container = document.querySelector('.hero__mask-container');
		container.style.opacity = '1';

		gsap.set('[data-animate]', {
			opacity: 1,
			y: 0,
			clearProps: 'all',
		});
	},
});
