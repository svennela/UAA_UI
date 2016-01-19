'use strict';

angular.module('uaaUIApp')
    .controller('ZoneManagmentController', function ($scope, $timeout,$window,$http,$rootScope,$state) {
            console.log($rootScope.uaatokendetails);


             if($rootScope.istokendpresent()) {

                     $scope.decodedtoken= $rootScope.parseJwt($rootScope.uaatokendetails.access_token);

             }else{
                // if not token then go to homepage
                $state.go('home');
             }


    });
