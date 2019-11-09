document.addEventListener('DOMContentLoaded', () => {
	console.log("Hello world!");
	document.querySelectorAll('.button').forEach(el => {
		el.addEventListener('click', event => {
			event.srcElement.classList.add('is-loading')
		});
	});
});
