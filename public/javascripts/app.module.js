(function () {

  'use strict';

  angular.module('app', ['ui.router', 'app.ui', 'ui.bootstrap'])
    .config(function ($stateProvider, $urlRouterProvider) {
      /**
       * Default Route.
       */
      $urlRouterProvider.otherwise('/projects');

      /**
       * Define our states.
       */
      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'partials/login/index.html',
          controller: 'LoginController',
          controllerAs: 'loginController'
        })
        .state('projects', {
          url: '/projects',
          templateUrl: 'partials/projects/index.html',
          controller: 'ProjectsController',
          controllerAs: 'projectsController',
          resolve: {
            users: function (Users) {
              //RETURNS A PROMISE, CONTROLLER IS CALLED WHEN PROMISE IS RESOLVED
              return Users.get();
            },
            projects: function (Projects, users) {
              //RETURNS A PROMISE, CONTROLLER IS CALLED WHEN PROMISE IS RESOLVED
              return Projects.get();
            }
          },
          data: {
            requiresLogin: true
          }
        })
        .state('projects.detail', {
          url: '/:projectId',
          templateUrl: 'partials/projects/detail.html',
          controller: 'ProjectController',
          controllerAs: 'projectController',
          resolve: {
            project: function (Projects, $stateParams, projects) {
              //RETURNS A PROJECT OBJECT
              return Projects.find($stateParams.projectId);
            }
          },
          data: {
            requiresLogin: true
          }
        })
        .state('projects.detail.edit', {
          url: '/edit',
          templateUrl: 'partials/projects/edit.html',
          controller: 'ProjectEditController',
          controllerAs: 'projectEditController',
          data: {
            requiresLogin: true
          }
        });
    })
    .run(function ($rootScope, Users, $state) {
      $rootScope.$on('$stateChangeStart', function (event, toState) {
        if (toState.data && toState.data.requiresLogin) {
          if (!Users.isLoggedIn()) {
            event.preventDefault();
            $state.go('login');
          }
        }
      });
    });
}());