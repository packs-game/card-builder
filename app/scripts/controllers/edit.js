'use strict';

/**
 * @ngdoc function
 * @name cardBuilderApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the cardBuilderApp
 */
angular.module('cardBuilderApp')
	.controller('EditCtrl', function(Cards, $routeParams) {
		this.token = '';
		this.id = '';

		this.card = {

		};
		var cards = Cards.get();

		if ($routeParams.id) {
			cards.allCards.forEach(function(card){
				if (card.id === $routeParams.id) {
					this.card = card;
				}
			});
		}
		this.save = function() {
			Cards.save(this.id, this.token, this.card).then(function(data){
				console.log(data);
			});
		};
	});