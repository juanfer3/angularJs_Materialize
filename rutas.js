var app = angular.module('myApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'Fragmentos/Home.html'
    })
        .when('/Home', {
        templateUrl: 'Fragmentos/Home.html'
    })
        .when('/Listar', {
        templateUrl: 'Fragmentos/Listar.html'
    })
        .when('/Editar', {
        templateUrl: 'Fragmentos/Editar.html'
    })
        .when('/Ver', {
        templateUrl: 'Fragmentos/Ver.html'
    })
        .when('/Crear', {
        templateUrl: 'Fragmentos/Crear.html'
    });
});
app.controller('CrearController', function ($scope, $http) {
    $scope.us;
    $scope.cedula;
    $scope.rol;
    $scope.user;
    $scope.contrasena;
 
	$scope.id = "1";
    $scope.x;
    $scope.tomo;
    $scope.con = function () {
        $http({
            method: 'POST',
            url: 'node_modules/modelo/prueba.php'
        }).then(function (response) {
            this.tomo = response.data;
            console.log(response.data);
            alert(tomo);
            $scope.x = this.tomo;
        }, function (error) {
            alert("no");
        });
    };
    
	$scope.insert = function () {
         $scope.data = {
            'metodo': "POST",
            'usuario': $scope.user,
			'contrasena':$scope.contrasena,
    		'rol':$scope.rol
    
		};
		$scope.metodo="soy el metodo post";
		alert(this.user);
		$http({
            method: 'POST',
            data:this.data,
      	   url:'node_modules/Controller/InsertarEmpleado.php'
        }).then(function (respose) {
//            alert(respose.data);
//            console.log(respose.config);
//            console.log(respose);
        }, function (error) {
            alert(":(");
        });
    };
    $scope.enviar = function () {
        alert(this.nombre);
        alert(this.cedula);
        alert(this.rol);
        alert(this.user);
        alert(this.contrasena);
    };
});
