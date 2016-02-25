'use strict';

/**
 * @ngdoc service
 * @name cardBuilderApp.Cards
 * @description
 * # Cards
 * Service in the cardBuilderApp.
 */
angular.module('cardBuilderApp')
	.service('Cards', function Cards($http, allServices) {
		var c = {};
		// AngularJS will instantiate a singleton by calling "new" on this function

		var services;

		var serviceReq = allServices.get().then(function(s) {
			services = s;
		});

		return {
			get: function() {
				serviceReq.then(function() {
					$http.get(services.cards + '/cards').then(function(data) {
						c.allCards = data.data;
					});
				});
				return c;
			},
			save: function(id,token,card) {
				return $http.post(services.cards + '/cards',{id: id, token: token, card: card});
			}
		};
	});

angular.module('cardBuilderApp')
	.factory('allServices', ['$window', '$http', function($window, $http) {
		var services;

		function get() {
			return $http.get('/services.json').then(function(res) {
				services = res.data;
				return services;
			}, function(err) {
				$window.alert('Cannot get services list.');
				console.log(err);
			});
		}

		return {
			get: get
		};
	}]);