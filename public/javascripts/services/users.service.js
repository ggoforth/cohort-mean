(function () {

  'use strict';

  angular.module('app')
    .service('Users', function ($http) {
      var vm = this;

      /**
       * Our user storage.
       *
       * @type {Array}
       */
      vm.users = [];

      /**
       * Get all users from the database
       */
      vm.get = function get() {
        return $http.get('/users')
          .then(function (res) {
            vm.users.splice(0);

            res.data.forEach(function (user) {
              vm.users.push(user);
            });

            return vm.users;
          });
      };
    });
}());