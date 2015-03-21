var uid = 1;
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
        if ($scope.book.id == null){
            $scope.book.id = uid++; 
            $scope.books.push($scope.book);
        }else{
            for (i in $scope.books)
               if ($scope.books[i].id == $scope.book.id)
                  $scope.books[i] = $scope.book; 
        }
        $scope.book = {};
    }

    $scope.edit = function(id){
        for (i in $scope.books)
        {
            if ($scope.books[i].id == id)
                {
                   $scope.book = angular.copy($scope.books[i]); 
                }
        }
    }

    $scope.deleteBook = function(id){
        for (i in $scope.books){
            if ($scope.books[i].id == id)
                {
                    $scope.books.splice(i,1);
                }
        }
        $scope.book = {};
    
    }

}]);

