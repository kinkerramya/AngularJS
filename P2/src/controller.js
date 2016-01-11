 mainApp.controller('mycontroller',function($scope){
    $scope.reset=function(){
        $scope.firstname="Ramya";
        $scope.lastname="kinker";
        $scope.email="rkinkiri@gmail.com";
    }
    $scope.reset();
});