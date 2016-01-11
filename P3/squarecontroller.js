            app.factory('multiplication',function(){
                var product={};
            product.multiply=function(a,b){
                return a*b;
            }
            return product;
            });
            app.service('squareproduct',function(multiplication){
                var x={};
                x.square=function(a){
                    return multiplication.multiply(a,a);
                }
                return x;
            });
            app.controller('mycontroller',function($scope,squareproduct){
                $scope.compute=function(){
                    $scope.result=squareproduct.square($scope.number);
                }   
            });