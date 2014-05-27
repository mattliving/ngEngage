# ngEngage
### An Angular prototype of the conversations feature

Features:
* Single page Angular app with hash-based url routing
* Create a new post
* Edit an existing post
* View a list of posts

## How to install and run the app

* run `git clone git@github.com:mattliving/ngEngage.git`
* make sure you have npm installed and run `npm install`
* run `bower install`
* run `brunch watch -s` to compile files and run the app

## App structure

The entry point to the app is `app/scripts/app.js`. Here you will see a list of modules
that the app depends on, as well as configuration for the routes in the app. Each route
has an options object, that describes whether it will redirect or instantiate a controller
with a designated template. This app will begin by instantiating the "ConversationsCtrl", 
found in `app/scripts/controllers/conversations.js`.

### Conversations Controller

This controller is extremely simple. It requires in a few modules using Angular's dependancy 
injection system and performs an HTTP request for a static json file and saves this data
onto the scope object. The scope is the glue that binds the data model to the templates in 
AngularJS.

### New Post Controller

The new post controller is responsible for the post creation flow. I have implemented it as a
series of "stages" (views) defined in an array on the scope object, called `$scope.stages`. In the `new-post.html`
file, each stage is represented by a `stage` directive, which are swapped between using the `ng-switch` 
command with the value stored in the `$scope.currentStage` variable. "Directives" in Angular are 
the mechanism for extending HTML with your own behaviour - they are its building blocks. 

The `stage` directive has its own `isolated scope`, but here it communicates with its parent scope 
by calling the "nextFunc" function, which will in turn execute the "next" function in the context of 
the parent scope, passing with it an object containing the clicked on item. This enables the `NewPostCtrl` 
to maintain the state of the current stage.


