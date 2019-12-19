const dataToDom = (data) => {
	document.querySelector('#list').innerHTML = '';
	data.plugs.map((item) => {
		const stateClass = item.state ? 'is-success' : 'is-danger';
		const stateText = item.state ? 'On' : 'Off';
		document.querySelector('#list').innerHTML += `
			<div class="box columns is-vcentered">
				<div class="column is-half">
					<p class="title">${item.name}</p>
				</div>
				<div class="column is-one-quarter">
					<button class="button is-success ${stateClass} is-pulled-right">${stateText}</button>
				</div>
				<div class="column is-one-quarter">
					<button class="button is-warning is-pulled-right">Edit</button>
				</div>
			</div>
		`;
	});
	document.querySelectorAll('.button').forEach(el => {
		el.addEventListener('click', event => {
			if (event.srcElement.classList.contains('is-danger')) {
				event.srcElement.classList.remove('is-danger');
				event.srcElement.classList.add('is-success');
				event.srcElement.textContent = 'On';
			}
			else if (event.srcElement.classList.contains('is-success')) {
				event.srcElement.classList.add('is-danger');
				event.srcElement.classList.remove('is-success');
				event.srcElement.textContent = 'Off';
			}
		});
	});
};

document.addEventListener('DOMContentLoaded', () => {
	fetch('/get')
	.then(response => response.json())
	.then(data => dataToDom(data))
	.catch(error => console.log(error));
});
