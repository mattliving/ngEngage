var services = angular.module('engageAppServices', []);

services.value('version', '0.0.1');

services.factory('Post', function($resource) {
    return $resource('api/v1/conversations/posts/:id', {id: '@id'}, {update: {method: "PUT"}});
});

services.factory('postConfig', function() {
    return  {
        'type': [
            {
                content: {
                    'type': 'twitter'
                },
                style: {
                    text: 'Tweet',
                    icon: 'twitter',
                    background: '#55acee'
                }
            },
            {
                content: {
                    'type': 'facebook'
                },
                style: {
                    text: 'Post',
                    icon: 'facebook',
                    background: '#4c66a4'
                }
            },
            {
                content: {
                    'type': 'googleplus'
                },
                style: {
                    text: 'Post',
                    icon: 'googleplus',
                    background: '#f6d147'
                }
            }
        ],
        'template': {

        },
        'destinations': function(params) {
            return [
                {
                    'title': 'Nokia Music',
                    'likes': '607K',
                    'url': 'www.facebook.com/nokiamusic',
                    'icon': 'http://conversations.nokia.com/wp-content/uploads/2013/06/NokiaMusicIcon.png',
                    'background-image': 'http://upload.wikimedia.org/wikipedia/commons/1/13/Mountains_on_the_Horizon.jpg'
                },
                {
                    'title': 'Nokia',
                    'likes': '11M',
                    'url': 'www.facebook.com/nokia',
                    'icon': 'http://www.topnews.in/usa/files/Nokia-Logo-Blue.jpg',
                    'background-image': 'http://upload.wikimedia.org/wikipedia/commons/9/9f/Glacier_two_medicine_lake.jpg'
                },
                {
                    'title': 'NokiaStage',
                    'likes': '2',
                    'url': 'www.facebook.com/nstageglobal',
                    'icon': 'http://www.topnews.in/usa/files/Nokia-Logo-Blue.jpg',
                    'background-image': 'http://upload.wikimedia.org/wikipedia/commons/0/0d/1997-08-tema-rab-sunset-pan.jpg'
                }
            ]
        },
        'content': {

        },
        'timing': [
            {
                content: {
                    scheduled: 'schedule'
                },
                style: {
                    text: 'Schedule',
                    subtext: 'Publish as a tab onto a Facebook fan page',
                    icon: 'calendar',
                    background: 'orange'
                }
            },
            {
                content: {
                    scheduled: moment()
                },
                style: {
                    text: 'Post now',
                    subtext: 'Embed your campaign into a webpage',
                    icon: 'publish',
                    background: 'gray'
                }
            }
        ],
        'schedule': {

        },
        'tag': {

        },
        'target': {

        },
        'targetGender': {

        },
        'targetRelationship': {

        },
        'targetInterestedIn': {

        },
        'targetEducation': {

        },
        'targetLanguage': {

        },
        'targetLocation': {

        },
        'preflightCheck': {

        }
    }
});