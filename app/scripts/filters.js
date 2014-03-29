var filters = angular.module('engageAppFilters', []);

filters.filter('interpolate', ['version', function(version) {
    return function(text) {
        return String(text).replace(/\%VERSION\%/mg, version);
    }
}]);