'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', function($scope,$position,$http) {

        // set default data
        $scope.uaa={};
        $scope.uaa.url='http://localhost:8080/uaa/';
        $scope.uaa.clientId='app';
        $scope.uaa.clientSecret='appclientsecret';
        $scope.uaa.username='marissa';
        $scope.uaa.password='koala';

        $scope.validateuaacredentials = function(){
            console.log($scope.uaa);

            //curl -v -d"username=marissa&password=koala&client_id=app&grant_type=password" -u "app:appclientsecret" http://localhost:8080/uaa/oauth/token
                       /* */
                        $http({
                          method: "post",
                          url: $scope.uaa.url+"oauth/token",
                          data:  "client_id=" + $scope.uaa.clientId + "&client_secret=" + $scope.uaa.clientSecret + "password="+$scope.uaa.password+"&username="+$scope.uaa.username+"&grant_type=password" + "&scope=read%20write",
                          withCredentials: true,
                          headers: {
                            'Content-Type': 'application/json; charset=utf-8'
                            }
                        })
                           .success(function(data) {
                                //accessToken = data.access_token;
                                console.log(data);
                            })
                            .error(function(data, status) {
                                console.log(data);
                               // alert("ERROR: " + data);
                            });

        
        }
      });
