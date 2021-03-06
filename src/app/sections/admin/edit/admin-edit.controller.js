(function() {
  'use strict';

  angular
    .module('front.admin')
    .controller('AdminEditController', AdminEditController);

  /** @ngInject */
  function AdminEditController($state, $stateParams, Post) {
    var vm = this;

    vm.articles = [];
    
    vm.editTitle = false;
    vm.editText = false;
    
    activate();

    function activate() {
      var postId = $stateParams.postId;
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
      var postId = article.id;
      var promise;
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
