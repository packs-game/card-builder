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
			get: function(cb) {
				serviceReq.then(function() {
					$http.get(services.cards + '/cards').then(function(data) {
						c.allCards = data.data;
						if (cb) { cb(); }
					});
				});
				return c;
			},
			save: function(id,token,card) {
				var url = services.cards + '/card';
				if (card._id) {
					url += '/' + card._id;
				}
				return $http.post(url,{id: id, token: token, card: card});
			},
			delete: function(id,token,cardId) {
				var url = services.cards + '/card/' + cardId;
				return $http({
					url: url,
					method: 'DELETE',
					data: {
						id: id,
						token: token
					},
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					}
				});
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