(function() {
  'use strict';

  angular
    .module('BlogApp.admin')
    .controller('AdminListController', AdminListController);

  /** @ngInject */
  function AdminListController(Post) {
    var vm = this;

    vm.articles = [];

    activate();

    function activate() {
      vm.articles = Post.query();
    }
  }
})();
