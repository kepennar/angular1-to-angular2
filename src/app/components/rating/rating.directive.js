(function () {
  'use strict';

  angular
    .module('BlogApp.ui.rating')
    .component('znRating', {
      templateUrl: 'app/components/rating/rating.part.html',
      bindings: {
        currentRate: '=',
        max: '@',
        onRate: '&'
      }
    });

})();
