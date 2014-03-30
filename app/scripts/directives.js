/* Directives */

var directives = angular.module('engageAppDirectives', []);

directives.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
