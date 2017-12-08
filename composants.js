
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
			<h2>{{ produit.nom }}</h2>\
			<p>{{ produit.description }}</p>\
			<big>{{ produit.prix }}</big>\
			<!-- image -->\
			<!-- bouton "ajouter au panier"-->\
		</div>'
});

