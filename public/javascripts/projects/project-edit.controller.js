(function () {

  'use strict';

  angular.module('app')
    .controller('ProjectEditController', function (project, Projects) {
      var vm = this;
      vm.project = project;
      vm.update = Projects.put;
    });
}());