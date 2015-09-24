(function () {

  'use strict';

  angular.module('app')
    .controller('ProjectEditController', function (project) {
      var vm = this;
      vm.project = project;
    });
}());