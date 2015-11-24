(function () {
  'use strict';

  angular
    .module('front')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('App started');
  }


  angular.element(document).ready(function () {
    angular.bootstrap(document, ['front']);
  });
})();
