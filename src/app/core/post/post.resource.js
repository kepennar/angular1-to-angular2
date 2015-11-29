(function () {
  'use strict';

  angular
    .module('BlogApp.core.post')
    .factory('Post', function ($resource) {
      return $resource('api/posts/:postId/:action', { postId: '@id' }, {
        update: {
          method: 'PUT'
        },
        getComments: {
          method: 'GET', params: {action: 'comments'}, isArray: true
        },
        rate: {
          method: 'POST', params: { action: 'rate' }
        },
        comment: {
          method: 'POST', params: { action: 'comments' }
        }
      });
    });
})();
