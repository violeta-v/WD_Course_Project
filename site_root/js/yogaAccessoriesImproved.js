const allProducts = document.querySelectorAll('.container')

for (let i = 0; i < allProducts.length; i++) {
	const matContainer = allProducts[i];

	const select = matContainer.querySelector('select');
	const img = matContainer.querySelector('img');


	select.addEventListener('change', function(e){
		console.log(this.value);

		img.src = `../images/${this.value}`
	})
}
