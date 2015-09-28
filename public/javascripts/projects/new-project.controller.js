(function () {

  'use strict';

  angular.module('app')
    .controller('NewProjectCtrl', function ($modalInstance, Users) {
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
      vm.project = {};

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