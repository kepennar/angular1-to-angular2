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
    vm.rateArticle = function(userRate) {
      Post.rate({id: vm.article.id, rate: userRate});
    };
    
    vm.displayComent = function() {
      vm.comments = Post.getComments({postId: $stateParams.postId});
    }
    
    vm.comment = function( newComment) {
      Post.comment({id: vm.article.id, text: newComment}).$promise
      .then(function() {
        vm.comments = Post.getComments({postId: $stateParams.postId});
      });
    };
  }
})();
