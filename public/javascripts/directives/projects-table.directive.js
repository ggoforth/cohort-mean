(function () {

  'use strict';

  angular.module('app.ui')
    .directive('projectsTable', function () {
      return {
        restrict: 'EA',
        templateUrl: 'javascripts/directives/projects-table.html',
        scope: {
          projects: '=',
          remove: '=',
          log: '&'
        }
      };
    });
}());