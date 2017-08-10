var app= angular.module('myApp',['ngRoute']);

app.config(function($routeProvider) {
    
    $routeProvider.when('/pagina1',{
    templateUrl: 'p1.html'
    })
    .when('/hola',
    {
    templateUrl: 'hola.html'
    });

       
    
});