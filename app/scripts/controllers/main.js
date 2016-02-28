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
		this.cards = Cards.get();
	});

angular.module('cardBuilderApp')
	.controller('RootCtrl', function() {
		this.user = {
			id: '56a5799b094694ea6fdfae7e',
			token: ''
		};
	});