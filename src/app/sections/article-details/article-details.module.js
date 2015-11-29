(function() {
  'use strict';

  angular
    .module('BlogApp.article-details', [
			'BlogApp.core.post',
			'BlogApp.ui.rating',
			'BlogApp.ui.commentsList'
		]);
})();
