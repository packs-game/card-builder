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