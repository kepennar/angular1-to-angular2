(function() {
  'use strict';

  angular
    .module('BlogApp.admin')
    .controller('AdminEditController', AdminEditController);

  /** @ngInject */
  function AdminEditController($state, $stateParams, Post) {
    var vm = this;

    vm.articles = [];
    
    vm.editTitle = false;
    vm.editText = false;
    
    activate();

    function activate() {
      const postId = $stateParams.postId;
      if (postId) {
        vm.article = Post.get({postId: postId} );
        vm.edit
      } else {
        vm.article = new Post();
        vm.editTitle = true;
        vm.editText = true;
      }
    }
    vm.save = function(article) {
      const postId = article.id;
      let promise;
      if (postId) {
        promise = article.$update();
      } else {
       promise = article.$save();
      }
      promise.then(function() {
        $state.go('admin');
      }); 
    };
    
    vm.delete = function(article) {
      article.$delete()
      .then(function() {
        $state.go('admin');
      });
    };
  }
})();
