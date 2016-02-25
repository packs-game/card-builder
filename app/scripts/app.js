'use strict';

/**
 * @ngdoc overview
 * @name cardBuilderApp
 * @description
 * # cardBuilderApp
 *
 * Main module of the application.
 */
angular
  .module('cardBuilderApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/edit', {
        templateUrl: '/views/edit.html',
        controller: 'EditCtrl',
        controllerAs: 'edit'
      })
      .when('/edit/:id', {
        templateUrl: '/views/edit.html',
        controller: 'EditCtrl',
        controllerAs: 'edit'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true).hashPrefix('!');
      $httpProvider.defaults.headers.delete = { "Content-Type": "application/json;charset=utf-8" };
  });