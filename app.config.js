'use strict';

angular.module('crudApp').
    config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'students-list/students-list.template.html',
            controller: 'studentsController',
            controllerAs: 'students'
        });

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
}]);