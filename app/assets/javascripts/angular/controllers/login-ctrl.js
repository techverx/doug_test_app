function LoginCtrl($scope, $state, $localStorage, toastr, UserService) {

    "use strict";
    
    $scope.initialize = function() {
        $scope.email = "";
        $scope.password = "";
    };
    $scope.initialize();
   
    $scope.login = function() {
        UserService.authenticate($scope.email, $scope.password)
        .then(function(response) {
            $localStorage.user = response.user;
            $state.go("index");
        }, function(data) {
            toastr.error(data.message);
        });
    };
};

app.controller('LoginCtrl', LoginCtrl);
LoginCtrl.$inject = ['$scope'
                    , '$state'
                    , '$localStorage'
                    , 'toastr'
                    , 'UserService'];




           