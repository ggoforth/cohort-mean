(function () {

  'use strict';

  angular.module('app')
    .controller('ProjectsController', function (projects) {
      var vm = this;
      vm.projects = projects;
    });
}());