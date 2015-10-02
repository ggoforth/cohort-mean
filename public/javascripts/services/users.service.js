(function () {

  'use strict';

  angular.module('app')
    .service('Users', function ($http, User, $state) {
      var vm = this;

      /**
       * The current user object.
       *
       * @type {null}
       */
      vm.currentUser = null;

      /**
       * The current users token.
       *
       * @type {null}
       */
      vm.currentUserToken = null;

      /**
       * Our user storage.
       *
       * @type {Array}
       */
      vm.users = [];

      /**
       * Find a user with a given id.
       *
       * @param userId
       * @returns {*}
       */
      vm.find = function find(userId) {
        return _.find(vm.users, {_id: userId});
      };

      /**
       * Get all users from the database
       */
      vm.get = function get() {
        return $http.get('/users')
          .then(function (res) {
            vm.users.splice(0);

            res.data.forEach(function (user) {
              vm.users.push(new User(user));
            });

            return vm.users;
          });
      };

      /**
       * Login a user with the provided credentials.
       *
       * @param creds
       * @returns {*}
       */
      vm.login = function login(creds) {
        return $http.post('/login', creds)
          .then(function (res) {
            vm.currentUser = res.data.user;
            vm.currentUserToken = res.data.token;
          });
      };

      /**
       * Is the current user logged in?
       *
       * @returns {boolean}
       */
      vm.isLoggedIn = function isLoggedIn() {
        return !!vm.currentUser;
      };
    });
}());