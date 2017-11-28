var app = angular.module('infestusApp', []);
app.config(function($httpProvider) {
    $httpProvider.defaults.headers.common["Content-type"] = 'application/json;charset=utf-8';
});
app.controller('myCtrl', function($scope, Service) {
    $scope.feed = [];
    $scope.init = function() {
        Service.getAll().then(function(r) {
            console.log(r);
            $scope.feed = r.data;
        }).catch(function(e) {
            console.log(e);
        })
    }
    $scope.init();
});