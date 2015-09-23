(function () {

  'use strict';

  angular.module('app')
    .service('Projects', function ($http, $timeout) {
      var vm = this;

      /**
       * Our main projects storage.
       *
       * @type {Array}
       */
      vm.projects = [];

      /**
       * Get out projects from the server.
       *
       * @returns {*}
       */
      vm.get = function get() {
        return $http.get('/projects')
          .then(function (res) {
            vm.projects.splice(0);
            res.data.forEach(function (project) {
              vm.projects.push(project);
            });

            $timeout(function () {
              vm.projects.push({
                title: 'FAKE PROJECTS',
                user: {
                  first_name: 'Steve',
                  last_name: 'Miller',
                  email: 'foo@bar.com'
                }
              });
            }, 5000);

            return vm.projects;
          });
      };
    });
}());