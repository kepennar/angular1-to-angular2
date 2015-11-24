(function () {
  'use strict';

  angular
    .module('front')
    .directive('znNavbar', znNavbar);

  /** @ngInject */
  function znNavbar() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.part.html',
      scope: {
      },
      controller: NavbarController,
      controllerAs: 'navbar',
      bindToController: true
    };
  }
  /** @ngInject */
  function NavbarController(moment) {
    var vm = this;
    vm.collapsed = true;
  }

})();
