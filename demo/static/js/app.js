var app = angular.module("MyModel", ["ngRoute"]);
app.config(["$routeProvider",function($routeProvider){
    $routeProvider.
        when('/basic',{
        // template:'<div>hello</div>',
        templateUrl:'basic',
        controller:'BasicController'
    }).
        when('/route2',{
        template:'<div>world</div>',
        controller:'DemoController'
    }).
        otherwise({
        redirectTo:'/'
    });        
}]);
