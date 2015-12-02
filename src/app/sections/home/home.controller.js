(function () {
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
      Post.query().$promise
        .then(function (articles) {
          vm.articles = articles.map(mapArticle);
        });
    }
    
    vm.goToDetails = function (article) {
      $state.go('articleDetails', { postId: article.id });
    };

  }
  function mapArticle(article) {
    return {
      id: article.id,
      createdAt: new Date(article.createdAt),
      name: article.name,
      text: article.text,
      userRate: article.userRate,
      numRates: article.numRates
    };
  }
})();
