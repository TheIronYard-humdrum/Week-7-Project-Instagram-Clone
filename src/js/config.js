function config ($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('root', {
    abstract: true,
    templateUrl: 'templates/layout.tmpl.html'
  })
  .state('root.home', {
    url: '/',
    templateUrl: 'templates/home.tmpl.html',
    controller: 'HomeController'
  })
  .state('root.detail', {
    url: '/detail/:imageID',
    templateUrl: 'templates/detail.tmpl.html',
    controller: 'DetailController'
  })
  .state('root.add', {
    url: '/add',
    templateUrl: 'templates/add.tmpl.html',
    controller: 'AddController'
  });

  $urlRouterProvider.otherwise('/');

}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };