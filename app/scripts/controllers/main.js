'use strict';

/**
 * @ngdoc function
 * @name cardBuilderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cardBuilderApp
 */
angular.module('cardBuilderApp')
	.controller('MainCtrl', function(Cards) {
		var vm = this;
		this.cards = Cards.get();

		this.getCardFromName = function(n) {
			var toRet;
			vm.cards.allCards.forEach(function(c) {
				if (c.name === n) {
					toRet = c;
				}
			});
			return toRet;
		};
	});

angular.module('cardBuilderApp')
	.controller('RootCtrl', function() {
		this.user = {
			id: '56a5799b094694ea6fdfae7e',
			token: ''
		};
	});