(function () {

  'use strict';

  angular.module('app')
    .controller('ProjectsController', function (projects, Projects) {
      var vm = this;
      vm.projects = projects;
      vm.remove = Projects.del;
    });
}());