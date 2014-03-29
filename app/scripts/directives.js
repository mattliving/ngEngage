/* Directives */

var directives = angular.module('engageAppServices', []);

directives.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
