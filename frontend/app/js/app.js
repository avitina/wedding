'use strict';

/* App Module */
var weddingApp = angular.module('weddingApp', [
  'ngRoute',
  'toggle-switch',
  'weddingControllers',
  'weddingFilters',
  'weddingServices'
]);

weddingApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/welcome', {
        templateUrl: 'partials/welcome.html',
        controller: 'StaticCtrl'
      }).
      when('/gettinghere', {
        templateUrl: 'partials/gettinghere.html',
        controller: 'StaticCtrl'
      }).
      when('/accommodation', {
        templateUrl: 'partials/accommodation.html',
        controller: 'StaticCtrl'
      }).
      when('/rsvp', {
        templateUrl: 'partials/rsvp.html',
        controller: 'RSVPCtrl'
      }).
      when('/rsvp/:id', {
        templateUrl: 'partials/rsvpshow.html',
        controller: 'RSVPShowCtrl'
      }).
      otherwise({
        redirectTo: '/welcome'
      });
  }]);
