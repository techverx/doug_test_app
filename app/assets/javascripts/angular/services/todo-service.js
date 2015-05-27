app.factory("TodoService", function ($http, $q, $localStorage, $apiRoot) {
    
    var resourcePath = $apiRoot + "todos";

    return {
        list: function () {
            var url = resourcePath;
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: url
            }).success(function (data, status, header, config) {
                defer.resolve(data.todos);
            }).error(function (data, status, header, config) {
                defer.reject(data, status);
            });
            return defer.promise;
        },
        add: function(todo) {
            var url = resourcePath;
            var defer = $q.defer();
            $http({
                method: 'POST',
                url: url,
                data: {
                    todo: todo
                }
            }).success(function (data, status, header, config) {
                defer.resolve(data);
            }).error(function (data, status, header, config) {
                defer.reject(data, status);
            });
            return defer.promise;
        },
        update: function(todo) {
            var url = resourcePath + "/id/" + todo.id;
            var defer = $q.defer();
            $http({
                method: 'PUT',
                url: url,
                data: {
                    todo: todo
                }
            }).success(function (data, status, header, config) {
                defer.resolve(data);
            }).error(function (data, status, header, config) {
                defer.reject(data, status);
            });
            return defer.promise;
        },
        delete: function(todo) {
            var url = resourcePath + "/" + todo.id;
            var defer = $q.defer();
            $http({
                method: 'DELETE',
                url: url
            }).success(function (data, status, header, config) {
                defer.resolve(data);
            }).error(function (data, status, header, config) {
                defer.reject(data, status);
            });
            return defer.promise;
        }
    };
});