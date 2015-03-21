var routerApp = angular.module("routerApp",["ui.router"]);
routerApp.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state("home",{
        url:'/home',
        templateUrl:'home.html'
    }).state('home.list',{
        url:'/list',
        templateUrl:'home-list.html',
        controller:function($scope){
             $scope.topics = ['Butterscotch', 'Black Current', 'Mango'];
        }
    }).state('home.paragraph',{
        url:'/paragraph',
        template:'I could sure use a scoop of ice-cream.'
    }).state('about',{
        url:'about',
        views:{
            '': { templateUrl: 'about.html' },
            'columnOne@about': { template: '' },
            'columnTwo@about': { 
                templateUrl: 'table-data.html',
                controller: 'Controller'
            }
        }
    });
});

routerApp.controller("Controller",function($scope){
    $scope.message = 'test';
    $scope.topics = [{
        name: 'Butterscotch',
        price: 50
    }, {
        name: 'Black Current',
        price: 100
    }, {
        name: 'Mango',
        price: 20
    }];
});
