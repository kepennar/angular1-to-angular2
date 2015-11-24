(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('front'));

    it('should do something', inject(function($controller) {
      var vm = $controller('HomeController');

    }));
  });
})();
