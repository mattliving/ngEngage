/* Directives */

var directives = angular.module('engageAppDirectives', ['engageAppServices']);

directives.directive('postPreview', function() {
    return {
        restrict: 'EA',
        templateUrl: '/partials/post-preview.html',
        scope: {
            post: '='
        },
        link: function(scope, elem, attrs) {

        }
    }
});

directives.directive('contentInput', function() {
    return {
        restrict: 'EA',
        templateUrl: '/partials/content-input.html',
        scope: {
            post: '='
        },
        link: function(scope, elem, attrs) {
            scope.editingImageUrl = false;
        }
    }
});

directives.directive('destinations', function() {
    return {
        restrict: 'EA',
        templateUrl: '/partials/destinations.html',
        scope: {
            item: '='
        },
        link: function(scope, elem, attrs) {

        }
    }
});

directives.directive('stage', function($window, postConfig) {
    return {
        restrict: 'EA',
        transclude: true,
        templateUrl: '/partials/stage.html',
        scope: {
            heading: '@',
            display: '@',
            items: '=',
            nextFunc: '&next',
            closeFunc: '&close'
        },
        link: function(scope, elem, attrs) {

            if (_.isString(scope.items)) {

                // we are creating a new post, so we need to request the
                // options for it from a suitable backend service
                if (_.isFunction(postConfig[scope.items])) {
                    scope.items = postConfig[scope.items].call();
                }
                else {
                    scope.items = postConfig[scope.items];
                }
            }
            else if (_.isObject(scope.items)) {}

            scope.toggleSelected = function(item) {
                item.selected = !item.selected;
            }

            scope.back = function() {
                $window.history.back();
            }
        }
    }
});

directives.directive('setHeight', function($window, $rootScope) {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            // elem.css('height', elem[0].offsetWidth);
            elem.height(elem.outerWidth());
            angular.element($window).bind('resize', function() {
                scope.$apply(function() {
                    // elem.css('height', elem[0].offsetWidth);
                })
            });
        }
    }
});

directives.directive('fillHeight', function($window) {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            // elem.css('height', elem[0].offsetWidth);
            var $$window = $($window);
            var diff = $$window.height() - elem.parent().height();
            elem.height(diff);
            $$window.bind('resize', function() {
                scope.$apply(function() {
                    diff = $$window.height() - elem.parent().height();
                    elem.height(diff);
                })
            });
        }
    }
});
