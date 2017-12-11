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

		axios.get(endpoint+ 'cart').then(function(response){
			app.panier = response.data;
			
		});


		this.$on('panier-modifie',function(panier) {
			app.panier = panier;
		});

	},
	

	data : {
		produits : [],
		panier : []	
	},
	methods : {
		miseAJourPanier(panier) {
			app.panier = panier;		
		}
	}

});



