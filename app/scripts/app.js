'use strict';

// Declare app level module which depends on directives, filters and services
var engageApp = angular.module('engageApp', ['engageAppFilters', 'engageAppServices', 'engageAppDirectives', 'ngResource', 'ngRoute'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/conversations.html',
            controller: "ConversationsCtrl"
        })
        .otherwise({
            redirectTo: '/'
        });
        return $locationProvider.html5Mode(true);
    }]);