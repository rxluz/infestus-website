'use strict';

app.service('Service', Service)

function Service($http) {
    var vm = this;

    vm.getAll = function() {
        return $http.get('http://api.infestus.cc/api/feed');
    };
}