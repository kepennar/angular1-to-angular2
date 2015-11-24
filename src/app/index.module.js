(function () {
  'use strict';

  angular
    .module('front', [
      'ngAnimate',
      'ngTouch',
      'ngSanitize',
      'ngResource',
      'ui.router',
      'front.home',
      'front.article-details',
      'front.admin',
      'front.contact'
    ]);

})();
