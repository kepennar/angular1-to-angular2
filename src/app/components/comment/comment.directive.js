(function () {
  'use strict';

  angular
    .module('front.ui.comment')
    .directive('znComment', znComment);
    
    /** @ngInject */
    function znComment() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/comment/comment.part.html',
        scope: {
        },
        controller: CommentController,
        controllerAs: 'comment',
        bindToController: {
          data: '=',
          onSend: '&',
          onActivate: '&'
        }
      };
    }
    function CommentController() {
    }

})();
