'use strict';

/**
 * @ngdoc function
 * @name cardBuilderApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the cardBuilderApp
 */
angular.module('cardBuilderApp')
	.controller('EditCtrl', function(Cards, $routeParams, $scope, $location) {
		var vm = this;
		this.token = 'bd693385-312a-4819-8ff6-dfeed1980a07';
		this.id = '56a5799b094694ea6fdfae7e';

		this.card = {

		};
		vm.allTokens = [];
		var cards = Cards.get(function() {
			if ($routeParams.id) {
				vm.allCards = cards.allCards;
				cards.allCards.forEach(function(card){
					if (card.type === 'token'){
						vm.allTokens.push(card);
					}
					if (card._id === $routeParams.id) {
						vm.card = card;
					}
				});
				if (!vm.card._id) {
					vm.error = 'NO CARD WITH ID';
				}
			}
		});
		this.save = function() {
			Cards.save(this.id, this.token, this.card).then(function(data){
				vm.card = data.data;
			});
		};
		this.delete = function() {
			Cards.delete(this.id, this.token, this.card._id).then(function(data){
				vm.card = data.data;
				$location.path('/');
			});
		};

		this.addAbility = function() {
			if (!this.card.abilities) { this.card.abilities = []; }
			this.card.abilities.push({name: '', value:''});
		};

		this.tokenDisplay = function(card) {
			return card.name + ' ' + card.power + '/'+card.toughness;
		}
	});