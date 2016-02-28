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

		this.card = {

		};
		vm.allTokens = [];
		var cards = Cards.get(function() {
			vm.allCards = cards.allCards;
			cards.allCards.forEach(function(card){
				if (card.type === 'token'){
					vm.allTokens.push(card);
				}
				if (card._id === $routeParams.id) {
					vm.card = card;
				}
			});
			if ($routeParams.id) {
				if (!vm.card._id) {
					vm.error = 'NO CARD WITH ID';
				}
			}
		});
		this.save = function() {
			Cards.save($scope.root.user.id, $scope.root.user.token, this.card).then(function(data){
				vm.card = data.data;
				window.alert('saved');
			}, function(){
				window.alert('err');
			});
		};
		this.delete = function() {
			Cards.delete($scope.root.user.id, $scope.root.user.token, this.card._id).then(function(data){
				vm.card = data.data;
				$location.path('/');
			});
		};

		this.remove = function(index) {
			vm.card.abilities.splice(index,1);
		};

		this.addAbility = function() {
			if (!this.card.abilities) { this.card.abilities = []; }
			this.card.abilities.push({name: '', value:''});
		};

		this.tokenDisplay = function(card) {
			return card.name + ' ' + card.power + '/'+card.toughness;
		};
	});