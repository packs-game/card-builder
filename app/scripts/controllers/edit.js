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
		this.token = 'c74705b1-1503-4301-93c6-e6d179e42957';
		this.id = '56a5799b094694ea6fdfae7e';

		this.card = {

		};
		var cards = Cards.get(function() {
			if ($routeParams.id) {
				cards.allCards.forEach(function(card){
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
	});