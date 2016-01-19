'use strict';

angular.module('uaaUIApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('usermanagment', {
                parent: 'uaa',
                url: '/usermanagment',
                data: {
                    authorities: [],
                    pageTitle: 'UserManagment'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/uaa/usermanagment/usermanagment.html',
                        controller: 'UserManagmentController'
                    }
                }

            });
    });
