app.factory("UserService", function ($http, $q, $localStorage, $apiRoot) {
    
    var resourcePath = $apiRoot + "users";

    return {
        authenticate: function (email, password) {
            var url = resourcePath + "/authenticate/";
            var defer = $q.defer();
            $http({
                method: 'POST',
                url: url,
                data: {
                    email: email,
                    password: password
                }
            }).success(function (data, status, header, config) {
                defer.resolve(data);
            }).error(function (data, status, header, config) {
                defer.reject(data, status);
            });
            return defer.promise;
        }
    };
});