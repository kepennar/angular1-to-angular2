(function() {
  'use strict';

  angular
    .module('front.admin')
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
