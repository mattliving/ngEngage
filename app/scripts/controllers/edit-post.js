angular.module('engageApp').controller('EditPostCtrl', function($scope, $http, $rootScope, $routeParams) {

    // Normally we would use $http or a $resource service
    // here for an api call to retrieve the object. I'm using
    // a bootstrapped json object on the $rootScope for simplicity.
    $http.get('/json/posts.json').success(function(data) {
      $scope.post = data.posts[$routeParams.id];
    });

    $scope.currentView = 'listView';

    $scope.done = function(item) {
        // $scope.post
        // $scope.post.$save();
        $scope.currentView = 'listView';
    }

    $scope.setView = function(view) {
        $scope.currentView = view;
    }
});