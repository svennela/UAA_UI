'use strict';

angular.module('uaaUIApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


