let app = angular.module('App', ['ngRoute', 'ngMaterial', 'ngMessages']); 



app.config(['$routeProvider', '$mdThemingProvider', function ($routeProvider, $mdThemingProvider) {
    console.log('Route config loaded');


    $mdThemingProvider.theme('default')
    .primaryPalette('red')
    .accentPalette('yellow');

    $routeProvider
        .when('/', {
            redirectTo: '/projects'
        })
        .when('/clients', {
            templateUrl: 'views/clients.html',
            controller: 'ClientsController as vm'
        })
        .when('/tasks', {
            templateUrl: 'views/tasks.html',
            controller: 'TasksController as vm'
        })
        .when('/reports', {
            templateUrl: 'views/reports.html',
            controller: 'ReportsController as vm'
        })
        .otherwise( { template: '<h1>404</h1>' });
}]);

