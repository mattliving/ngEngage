'use strict';

// Declare app level module which depends on directives, filters and services
var engageApp = angular.module('engageApp', [
    'engageAppDirectives',
    'engageAppServices',
    'engageAppFilters',
    'ngResource',
    'ngRoute'
]);

engageApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            redirectTo: '/conversations'
        })
        .when('/404', {
            templateUrl: 'partials/404.html'
        })
        .when('/conversations', {
            templateUrl: 'partials/conversations.html',
            controller: "ConversationsCtrl"
        })
        .when('/conversations/posts', {
            templateUrl: 'partials/posts.html',
            controller: "PostsCtrl"
        })
        .when('/conversations/new-post', {
            templateUrl: 'partials/new-post.html',
            controller: "NewPostCtrl"
        })
        .when('/conversations/edit-post', {
            templateUrl: 'partials/edit-post.html',
            controller: "EditPostCtrl"
        })
        .otherwise({
            redirectTo: '/404'
        });

        // $locationProvider.html5Mode(true);
    }]);