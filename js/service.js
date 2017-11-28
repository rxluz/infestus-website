'use strict';

app.service('Service', Service)

function Service($http) {
    var vm = this;

    vm.getAll = function() {
        return $http.get('https://api.infestus.cc/api/feed');
    };
}
