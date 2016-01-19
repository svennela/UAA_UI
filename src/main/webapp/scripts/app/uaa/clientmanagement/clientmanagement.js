'use strict';

angular.module('uaaUIApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('clientmanagment', {
                parent: 'uaa',
                url: '/clientmanagment',
                data: {
                    authorities: [],
                    pageTitle: 'ClientManagment'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/uaa/clientmanagment/clientmanagment.html',
                        controller: 'ClientManagmentController'
                    }
                }

            });
    });
