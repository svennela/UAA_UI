 'use strict';

angular.module('uaaUIApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-uaaUIApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-uaaUIApp-params')});
                }
                return response;
            }
        };
    });
