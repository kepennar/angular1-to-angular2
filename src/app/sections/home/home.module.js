(function() {
  'use strict';

  angular
    .module('BlogApp.home', [
			'BlogApp.core.post',
			'BlogApp.ui.navbar',
			'BlogApp.ui.article',
		]);
})();
