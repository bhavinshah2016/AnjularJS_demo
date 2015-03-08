var app = angular.module("MyModel", ["ngRoute"]);
app.config(["$routeProvider",function($routeProvider){
    $routeProvider.
        when('/directive',{
        // template:'<div>hello </div>',
        templateUrl:'directive',
        controller:'DirectiveController'
    }).
        when('/basic',{
        templateUrl:'basic',
        controller:'BasicController'
    }).
        otherwise({
        redirectTo:'/'
    });        
}]);
