var app= angular.module('App',['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/pagina1',
    {
    templateUrl: 'hola.html'
    }
    .when('/hola',
    {
    templateUrl: 'hola.html'
    }
 );
       
    
});