'use strict';

angular.module('uaaUIApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('zonemanagement', {
                parent: 'uaa',
                url: '/zonemanagement',
                data: {
                    authorities: [],
                    pageTitle: 'ZoneManagement'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/uaa/zonemanagement/zonemanagement.html',
                        controller: 'ZoneManagementController'
                    }
                }

            });
    });
