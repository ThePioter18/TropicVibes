document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('.contact__form');

	form.addEventListener('submit', async e => {
		e.preventDefault();

		const fullName = form.querySelector('#full-name').value;
		const email = form.querySelector('#email').value;
		const message = form.querySelector('#message').value;

		const res = await fetch('/.netlify/functions/contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ fullName, email, message }),
		});

		const result = await res.json();
		if (result.success) {
			alert('Wiadomość wysłana! 👍');
			form.reset();
		} else {
			alert('Ups! Coś poszło nie tak 😢');
		}
	});
});
