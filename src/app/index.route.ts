
/** @ngInject */
export function routeConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/sections/home/home.part.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .state('articleDetails', {
      url: '/article/:postId',
      templateUrl: 'app/sections/article-details/article-details.part.html',
      controller: 'ArticleDetailsController',
      controllerAs: 'details'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'app/sections/contact/contact.part.html',
      controller: 'ContactController',
      controllerAs: 'contact'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: 'app/sections/admin/list/admin-list.part.html',
      controller: 'AdminListController',
      controllerAs: 'admin'
    })
    .state('adminEdit', {
      url: '/admin/:postId',
      templateUrl: 'app/sections/admin/edit/admin-edit.part.html',
      controller: 'AdminEditController',
      controllerAs: 'admin'
    });

  $urlRouterProvider.otherwise('/');
}
