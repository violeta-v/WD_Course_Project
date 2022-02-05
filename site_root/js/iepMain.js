// get all <div class="mats">
const matsContainer = document.querySelectorAll('.mats')

// for each mat container:
for (let i = 0; i < matsContainer.length; i++) {
	const matContainer = matsContainer[i];

	// get the select and img nodes in a matContainer:
	const select = matContainer.querySelector('select');
	const img = matContainer.querySelector('img');

	// attach onchange event on select element:
	select.addEventListener('change', function(e){
		// this === select === e.currentTarget
		console.log(this.value);

		// get the selected option value and use it to set img path:
		img.src = `../images/${this.value}`
	})
}

