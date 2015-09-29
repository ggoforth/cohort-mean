(function () {

  'use strict';

  angular.module('app')
    .controller('NewProjectCtrl', function ($scope, $modalInstance, Users) {
      var vm = this;

      /**
       * Our application users.
       *
       * @type {users|resolve.users|Function|*|Array}
       */
      vm.users = Users.users;

      /**
       * Our project object.
       *
       * @type {{}}
       */
      vm.project = {user: _.first(vm.users)._id};

      /**
       * Closing our modal.
       */
      vm.close = function close() {
        $modalInstance.close(vm.project);
      };

      /**
       * Dismiss the modal without saving.
       */
      vm.dismiss = function dismiss() {
        $modalInstance.dismiss();
      };
    });
}());