var endpoint = "../jsserver/public/index.php/"

var app = new Vue({
	el : '#app',

	/*************************
	* code éxécuté au chargement de la page (équivalent à "onload")
	**************************/
	created() {
		axios.get(endpoint+ 'products').then(function(response){
			app.produits = response.data;
		});
	},
	

	data : {
		produits : []	
	}
});

