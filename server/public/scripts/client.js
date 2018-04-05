let app = angular.module('App', ['ngRoute']); 



app.config(function ($routeProvider) {
    console.log('Route config loaded');

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
        .otherwise( { template: '<h1>404</h1>' });
});

