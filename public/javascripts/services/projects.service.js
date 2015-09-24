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
       * Find a project in our vm.projects.
       *
       * @param projectId
       * @returns {*}
       */
      vm.find = function find(projectId) {
        return _.find(vm.projects, {_id: projectId});
      };

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

            return vm.projects;
          });
      };
    });
}());