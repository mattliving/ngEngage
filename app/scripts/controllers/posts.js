angular.module('engageApp').controller('PostsCtrl', function($scope, $rootScope, $http) {

    $http.get('/json/posts.json').success(function(data) {
      $rootScope.posts = data.posts;
    });

});