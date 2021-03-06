'use strict';

angular.module('crudApp').
    config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.template.html'
        })
        .state('students', {
            url: '/students',
            template: '<students-list/>'
        })
        .state('groups', {
            url: '/groups',
            template: '<groups-list/>'
        });

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
}]);
