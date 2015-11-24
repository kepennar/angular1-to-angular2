(function () {
  'use strict';

  angular
    .module('front.article-details')
    .controller('ArticleDetailsController', ArticleDetailsController);

  /** @ngInject */
  function ArticleDetailsController($stateParams, Post) {
    var vm = this;

    activate();

    function activate() {
      vm.article = Post.get({postId: $stateParams.postId});
    }
    vm.rateArticle = function(postId, userRate) {
      Post.rate({id: postId, rate: userRate});
    };
    
    vm.displayComent = function() {
      vm.comments = Post.getComments({postId: $stateParams.postId});
    }
    
    vm.comment = function(postId, newComment) {
      Post.comment({id: postId, text: newComment}).$promise
      .then(function() {
        vm.comments = Post.getComments({postId: $stateParams.postId});
      })
    }
  }
})();
