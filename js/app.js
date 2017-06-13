angular.module('assessment', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'mainCtrl'
    }).state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'mainCtrl'
    }).state('blog', {
      url: '/blog',
      templateUrl: 'views/blog.html',
      controller: 'mainCtrl'
    }).state('pets', {
      url: '/pets',
      templateUrl: 'views/pets.html',
      controller: 'mainCtrl'
    }).state('pet-bio', {
      url: '/bio/:id',
      templateUrl: 'views/pet-bio.html',
      controller: 'routes',
      resolve: {
        pet: function (mainService, $stateParams) {
          return mainService.getBio($stateParams.id).then(function (data) {
            return data;
          })
        }
      }
    });
    $urlRouterProvider.otherwise('/home');
  });
