app.controller("DirectiveController",["$scope",function($scope){
    $scope.name = "Directive Page"
    $scope.condition = 1
    $scope.add= function(){
        $scope.condition += 1;
    }

    $scope.subtract = function(){
        $scope.condition -= 1;
    }
    $scope.books = [{id:0,name:"test book",price:"123"}];
    $scope.addbook = function(){
        $scope.books.push($scope.book);
        $scope.book = {}
    }

    $scope.edit = function(id){
    
    }

    $scope.deleteBook = function(id){
    
    }

}]);

