
/***************************
 * composant afffichant la listes des produits
 ***************************/
Vue.component('liste-produits',{
	props : ['produits'],
	template : 
		'<div class="liste-produits">\
			<h2>Nos produits</h2>\
			<produit v-for="unProduit in produits" :produit="unProduit"></produit>\
		</div>'
});



/***************************
 * composant afffichant un des produits de la liste
 ***************************/
Vue.component('produit',{
	props : ['produit'],
	template : 
		'<div class="produit">\
			<b>{{ produit.nom }}</b>\
			<p><small>{{ produit.description }}</small></p>\
			<big>{{ produit.prix }}</big>\
			<image-produit :un-produit="produit"></image-produit>\
			<bouton-ajout :un-produit="produit"></bouton-ajout>\
		</div>'
});

/***************************
 * Affiche l'image d'un produit
 ***************************/
Vue.component('image-produit',{
	props : ['un-produit'],
	template :
		'<div class="image-produit" :alt="unProduit.nom" :style="\'background-image:url(\'+unProduit.image+\')\'"></div>'

});


/***************************
 * Bouton pour ajouter un produit au
 ***************************/
Vue.component('bouton-ajout',{
	props : ['un-produit'],
	template :
		'<button @click="ajoutProduit">Ajouter au panier</button>',
	methods : {
		ajoutProduit() {
			
			axios.post(endpoint+'cart/'+this.unProduit.id).then(function(response){
				var panier = response.data;
				app.$emit('panier-modifie',panier);
			});

		}
	}
});



/***************************
 * Affiche le panier
 ***************************/
Vue.component('panier',{
	props : ['panier'],
	template :
		`<div class="panier">
			<b>Votre panier</b>
			<produit-panier v-for="produit in panier" :produit="produit">
			</produit-panier>
			<boutons-panier :panier="panier" v-show="!panierVide"></boutons-panier>
		</div>`,
	computed : {
		panierVide() {
			return this.panier.length == 0;
		}		
	}

});


/***************************
 * Affiche les boutons d'action du panier
 ***************************/
Vue.component('boutons-panier',{
	props : ['panier'],
	template :
		`
			<div class="boutons-panier">
			<hr>
			<input type="button" value="Commander" @click="commander"><br>
			<input type="button" value="Vider panier" @click="viderPanier">
			</div>
		`,
	methods : {
		commander() {
			for(id in this.panier) {
				var produit = this.panier[id];
			}
		},
		viderPanier() {
			axios.delete(endpoint+ 'cart').then(function(response){
				app.miseAJourPanier(response.data);
			});	
		}
	}

});

			


/***************************
 * Affiche un produit du panier
 ***************************/
Vue.component('produit-panier',{
	props : ['produit'],
	template :
		`<div class="produit-panier">
			<b>{{ produit.nom }}</b> <small>{{ produit.qte }}</small> {{ produit.prix }}€
		</div>` 

});

