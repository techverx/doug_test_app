app.service('Interceptor', function($localStorage) {
    var service = this;
    service.request = function(config) { 
        var user = $localStorage.user;
        if (user) {
            config.headers.authorization = "Token " + user.api_token;
        }
        return config;
    }; 
});