'use strict';

angular.module('uaaUIApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('tokendetails', {
                parent: 'uaa',
                url: '/tokendetails',
                data: {
                    authorities: [],
                    pageTitle: 'TokenDetails'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/uaa/tokendetails/tokendetails.html',
                        controller: 'TokenDetailsController'
                    }
                }

            });
    });
