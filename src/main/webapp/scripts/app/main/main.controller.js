'use strict';

angular.module('uaaUIApp')
    .controller('MainController', function ($scope, $http,$window,$rootScope,$state) {

            $scope.isAuthenticated = function(){
                return false;
            }


         // set default data
                $scope.uaa={};
                $scope.uaa.url='http://localhost:8080/uaa/';
                $scope.uaa.clientId='app';
                $scope.uaa.clientSecret='appclientsecret';
                $scope.uaa.username='marissa';
                $scope.uaa.password='koala';
                $scope.error = null;
                $scope.errorMessage='';

                $scope.validateuaacredentials = function(){
                           console.log($scope.uaa);

                           //curl -v -d"username=marissa&password=koala&client_id=app&grant_type=password" -u "app:appclientsecret" http://localhost:8080/uaa/oauth/token
                                      /* */
                                       $http({
                                         method: "post",
                                         url: $scope.uaa.url+"oauth/token",
                                         data:  "client_id=" + $scope.uaa.clientId + "&client_secret=" + $scope.uaa.clientSecret + "&password="+$scope.uaa.password+"&username="+$scope.uaa.username+"&grant_type=password",
                                         withCredentials: false,
                                         headers: {
                                           'Content-Type': 'application/x-www-form-urlencoded'
                                           }
                                       })
                                          .success(function(data) {
                                                 $scope.error=false;
                                               //accessToken = data.access_token;
                                                console.log(data.access_token);
                                                $rootScope.uaatokendetails=data;
                                                var access_token = data.access_token ? data.access_token : null;
                                                   if(access_token) {

                                                    console.log('JWT:', access_token);
                                                    console.log('JWT DECODED:', $rootScope.parseJwt(access_token));


                                                }
                                                $state.go('tokendetails');

                                           })
                                           .error(function(data, status) {
                                               //console.log(data);
                                               // show error...
                                               $scope.error=true;
                                               $scope.errorMessage=data.error_description;
                                              // alert("ERROR: " + data);
                                           });


                       }



    });
