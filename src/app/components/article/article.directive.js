(function() {
  'use strict';

	angular.module('BlogApp.ui.article')
	.directive('znArticle', znArticle);
	
	function znArticle() {
		return {
      restrict: 'E',
      templateUrl: 'app/components/article/article.part.html',
      scope: {
      },
      controller: ArticleController,
      controllerAs: 'article',
      bindToController: {
        data: '=',
        onSelect: '&'
      }
    };
	}
  
  /** @ngInject */
  function ArticleController() {
     this.preview = this.data.text.length > 500 ? this.data.text.slice(0, 499) + ' ...' :
     this.data.text;
  }
})();