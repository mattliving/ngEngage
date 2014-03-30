angular.module('engageApp').controller('PostsCtrl', function($scope) {
  $scope.posts = [
    {
      title: 'Why you should #switch to a Nokia Lumia 920 and then buy a 1320 as well',
      scheduled: new moment('2014-03-14 23:05'),
      platform: 'twitter'
    },
    {
      title: 'Why you should #switch to a Nokia Lumia 920 and then buy a 1320 as well',
      scheduled: new moment('2014-03-14 23:05'),
      platform: 'twitter'
    },
    {
      title: 'Why you should #switch to a Nokia Lumia 920 and then buy a 1320 as well',
      scheduled: new moment('2014-03-14 23:05'),
      platform: 'facebook'
    }
  ];
});