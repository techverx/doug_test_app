function MainCtrl($scope, $state, $localStorage, toastr, TodoService, todos) {

    "use strict";
    
    $scope.initialize = function() {
        $scope.todos = todos;
    };
    $scope.initialize();
    
    $scope.logout = function() {
        delete $localStorage.user;
        $state.go("login");
    };
    
    $scope.addTodo = function() {
        $scope.todos.unshift({
            description: ""
        });
    };
    
    $scope.saveTodo = function(index) {
        var todo = $scope.todos[index];
        if (todo) {
            if (todo.id) {
                TodoService.update(todo)
                .then(function(response) {
                }, function(error) {
                    toastr.error("Todo not saved. Please try again later.");
                });
            }
            else {
                TodoService.add(todo)
                .then(function(response) {
                    todo.id = response.id;
                }, function(error) {
                    toastr.error("Todo not saved. Please try again later.");
                });
            }
        }
    };
    
    $scope.deleteTodo = function(index) {
        var todo = $scope.todos[index];
        if (todo) {
            if (todo.id) {
                TodoService.delete(todo)
                .then(function(response) {
                    $scope.todos.splice(index, 1);
                }, function(error) {
                    toastr.error("Todo not deleted. Please try again later.");
                });
            }
            else {
                $scope.todos.splice(index, 1);
            }
        }
    }
};

app.controller('MainCtrl', MainCtrl);
MainCtrl.$inject = ['$scope'
                    , '$state'
                    , '$localStorage'
                    , 'toastr'
                    , 'TodoService'
                    , 'todos'];




           