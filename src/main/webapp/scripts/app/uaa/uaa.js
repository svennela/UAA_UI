'use strict';

angular.module('uaaUIApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('uaa', {
                abstract: true,
                parent: 'site'
            });
    });
