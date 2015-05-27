var app = angular
        .module('app', [
            'ui.router',
            'ui.bootstrap',
            'angular-loading-bar',
            'ngStorage',
            'ngCookies',
            'toastr',
            'xeditable',
            'permission'
        ]);
        
app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'assets/angular/templates/login.html',
            controller: 'LoginCtrl'
        })
        .state('index', {
            url: '/',
            templateUrl: 'assets/angular/templates/index.html',
            controller: 'MainCtrl',
            resolve: {
                todos: function(TodoService) {
                    return TodoService.list();
                }
            },
            data: {
                    permissions: {
                        only: ['authenticated'],
                        redirectTo: 'login'
                    }
                }
        });   
        $httpProvider.interceptors.push('Interceptor');
    });

app.run(['$rootScope', '$localStorage', function ($rootScope, $localStorage) {
    $rootScope.$on('$stateChangeSuccess', function(event, to, toParams, from, fromParams) {
        
    });
}]);
         
app.config(["$provide", function ($provide) {
    $provide.value("$apiRoot", "/api/v1/");
}]);

app.run(function (Permission, UserService, $http, $localStorage) {
    Permission.defineRole('authenticated', function () {
        if (!$localStorage.user) {
            return false;
        }
        return true;
    });
});

