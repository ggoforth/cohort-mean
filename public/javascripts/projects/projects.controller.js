(function () {

  'use strict';

  angular.module('app')
    .controller('ProjectsController', function (projects, Projects, $modal, $state) {
      var vm = this;
      vm.projects = projects;
      vm.remove = Projects.del;

      /**
       * Adding a new project.
       */
      vm.addProject = function addProject() {
        var modalInstance = $modal.open({
          templateUrl: 'javascripts/projects/new.html',
          controller: 'NewProjectCtrl',
          controllerAs: 'newProject',
          size: 'md'
        }).result.then(function (res) {
            Projects.post(res);
          });
      };
    });
}());