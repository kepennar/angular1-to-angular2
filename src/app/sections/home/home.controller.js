(function() {
  'use strict';

  angular
    .module('BlogApp.home')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($state, Post) {
    var vm = this;

    vm.articles = [];

    activate();

    function activate() {
      vm.articles = Post.query();
    }
    vm.goToDetails = function(article) {
      $state.go('articleDetails', {postId: article.id});
    };

  }
})();
