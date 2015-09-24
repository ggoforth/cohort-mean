(function () {

  'use strict';

  angular.module('app')
    .service('Projects', function ($http, $state) {
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

      /**
       * Update a project.
       *
       * @param project
       * @returns {*}
       */
      vm.put = function put(project) {
        var data = {title: project.title};

        return $http.put('/projects/' + project._id, data)
          .then(function (res) {
            $state.go('projects.detail', {projectId: project._id});
          }, function (err) {
            //TODO: handle when we can't update a project.
          });
      };

      /**
       * Remove a project.
       *
       * @param projectId
       */
      vm.remove = function remove(projectId) {
        _.remove(vm.projects, {_id: projectId});
      };

      /**
       * Delete a project.
       *
       * @param projectId
       * @returns {*}
       */
      vm.del = function del(projectId) {
        return $http.delete('/projects/' + projectId)
          .then(function (res) {
            vm.remove(projectId);
            $state.go('projects');
          });
      };
    });
}());