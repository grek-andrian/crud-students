'use strict';

angular.module('crudApp').
    config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'students-list/students-list.template.html',
            controller: 'studentsController',
            controllerAs: 'students'
        })
        .state('groups', {
            url: '/group',
            templateUrl: 'groups-list/groups-list.template.html',
            controller: 'groupsController',
            controllerAs: 'groups'
        });

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
}]);