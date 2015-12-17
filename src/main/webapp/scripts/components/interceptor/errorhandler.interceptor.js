'use strict';

angular.module('uaaUIApp')
    .factory('errorHandlerInterceptor', function ($q, $rootScope) {
        return {
            'responseError': function (response) {
                if (!(response.status == 401  )){
	                $rootScope.$emit('uaaUIApp.httpError', response);
	            }
                return $q.reject(response);
            }
        };
    });