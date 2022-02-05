// get all <div class="mats">
const matsContainer = document.querySelectorAll('.mats')

// for each mat container:
for (let i = 0; i < matsContainer.length; i++) {
	const matContainer = matsContainer[i];

	const select = matContainer.querySelector('select');
	const img = matContainer.querySelector('img');

	select.addEventListener('change', function(e){
		console.log(this.value);

		img.src = `../images/${this.value}`
	})
}
