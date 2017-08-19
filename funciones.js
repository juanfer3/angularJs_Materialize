
app.controller('CrearController', function ($route, $scope, $http, $routeParams) {
    $scope.us;
    $scope.cedula;
    $scope.rol;
    $scope.user;
    $scope.contrasena;
    $scope.users;
    $scope.cont;
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
            'nombre':$scope.nombre,
            'cedula':$scope.cedula,
            'usuario': $scope.user,
            'contrasena': $scope.contrasena,
            'rol': $scope.rol

        };
        $scope.metodo = "soy el metodo post";
        alert(this.user);
        $http({
            method: 'POST',
            data: this.data,
            url: 'node_modules/Controller/InsertarEmpleados.php'
        }).then(function (respose) {
            alert(respose.data);
            console.log(respose.config);
            console.log(respose);
            window.location.href='http://localhost/angularJs_Materialize/index.html#!/Listar';
        }, function (error) {
            alert(":(");
        });
    };
    $scope.getUsers = function () {
        $http({
            method: 'POST',
            url: "node_modules/Controller/ListarEmpleados.php"
        }).then(function (response) {
            
            console.log(response.data);
            $scope.users = response.data;
            $scope.cont =$scope.users.length;;
            console.log(this.cont);
            
        }), function (falla) {
            alert("falla en la conexion");
        };
    };
    $scope.info= $scope.getUsers();
});
