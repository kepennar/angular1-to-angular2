(function () {
  'use strict';

  angular
    .module('front.ui.rating')
    .directive('znRating', znRating);
    
    /** @ngInject */
    function znRating() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/rating/rating.part.html',
        scope: {
        },
        controller: RatingController,
        controllerAs: 'rating',
        bindToController: {
          currentRate: '=',
          max: '@',
          onRate: '&'
        }
      };
    }
    function RatingController() {
    }

})();
