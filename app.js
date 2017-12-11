var endpoint = "../jsserver/public/index.php/"

var app = new Vue({
	el : '#app',

	/*************************
	* code éxécuté au chargement de la page (équivalent à "onload")
	**************************/
	mounted() {
		axios.get(endpoint+ 'products').then(function(response){
			app.produits = response.data;
		});

		axios.get(endpoint+ 'cart').then(function(response){
			app.panier = response.data;
			
		});


		this.$on('panier-modifie',function(panier) {
			this.miseAJourPanier(panier);
		});

		this.$on('produit-panier-ok',function(id) {
			this.produitPanierOk(id);
		});

	},
	

	data : {
		produits : [],
		panier : [],
		panierOk : false,	
		panierEnAttente : false,
		produitsPanierOk : 0,
	},
	methods : {
		miseAJourPanier(panier) {
			this.panierEnAttente=false;
			this.panierOk=false;
			this.panier = panier;		
		},
		produitPanierOk(id) {
			this.panier[id].ok = true;
			this.produitsPanierOk++;
			if(this.produitsPanierOk == Object.keys(this.panier).length) {
				this.panierEnAttente=false;
				this.panierOk=true;
			} else {
				this.panierEnAttente=true;
			}
		}
	}

});



