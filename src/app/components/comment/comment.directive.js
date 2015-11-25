(function () {
  'use strict';

  angular
    .module('front.ui.commentsList')
    .component('znComment', {
      templateUrl: 'app/components/comment/comment.part.html',
      bindings: {
        data: '=',
        onSend: '&',
        onActivate: '&'
      }
    });
})();
