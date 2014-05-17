angular.module('engageApp').controller('NewPostCtrl', function($scope, $window, $location, Post) {

    $scope.stages = [
        'type',
        // 'template',
        'destinations',
        'content',
        'timing',
        // 'schedule',
        // 'tag',
        // 'target',
        // 'targetGender',
        // 'targetRelationship',
        // 'targetInterestedIn',
        // 'targetEducation',
        // 'targetLanguage',
        // 'targetLocation',
        'preflightCheck'
    ];

    // instantiate a new Post $resource object (see services.js)
    $scope.post = new Post();

    $scope.index = 0;
    $scope.currentStage = $scope.stages[$scope.index];

    $scope.next = function(item) {
        if (typeof item !== 'undefined') {

            $scope.post[$scope.currentStage] = item;

            if ($scope.currentStage === 'type') {
                // post.$save();
                // persist the post and server returns object with new id
                // navigate to /conversations/posts/:newId/edit
                // $location.path('/conversations/posts/' + post.id + '/edit');
                $scope.publish();
            }
            else if ($scope.currentStage === 'timing') {

                // if user chooses to schedule their post, we want to
                // show the schedule widget next, otherwise we skip it
                if (item.scheduled === 'schedule') {
                    $scope.stages.splice($scope.index+1, 0, 'schedule');
                }
            }
        }

        $scope.currentStage = $scope.stages[
            (++$scope.index < $scope.stages.length)
            ? $scope.index
            : $scope.stages.length-1
        ];
    }

    $scope.save = function() {
        // save as template
    }

    $scope.publish = function() {
        // post.$save();
        $location.path('/conversations/posts/' + 4 + '/edit');
    }

    $scope.back = function() {
        $window.history.back();
    }

});