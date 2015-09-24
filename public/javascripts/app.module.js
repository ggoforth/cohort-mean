(function () {

  'use strict';

  angular.module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      /**
       * Default Route.
       */
      $urlRouterProvider.otherwise('/projects');

      /**
       * Define our states.
       */
      $stateProvider
        .state('projects', {
          url: '/projects',
          templateUrl: 'javascripts/projects/index.html',
          controller: 'ProjectsController',
          controllerAs: 'projectsController',
          resolve: {
            projects: function (Projects) {
              //RETURNS A PROMISE, CONTROLLER IS CALLED WHEN PROMISE IS RESOLVED
              return Projects.get();
            }
          }
        })
        .state('projects.detail', {
          url: '/:projectId',
          templateUrl: 'javascripts/projects/detail.html',
          controller: 'ProjectController',
          controllerAs: 'projectController',
          resolve: {
            project: function (Projects, $stateParams, projects) {
              //RETURNS A PROJECT OBJECT
              return Projects.find($stateParams.projectId);
            }
          }
        })
        .state('projects.detail.edit', {
          url: '/edit',
          templateUrl: 'javascripts/projects/edit.html',
          controller: 'ProjectEditController',
          controllerAs: 'projectEditController'
        });
    });
}());