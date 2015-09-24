(function () {

  'use strict';

  angular.module('app')
    .controller('ProjectController', function (project) {
      var vm = this;
      vm.project = project;
    });
}());