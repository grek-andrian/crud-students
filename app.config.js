'use strict';

angular.module('crudApp').
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'students-list/students-list.template.html',
            controllerAs: 'studentsController'
        })
        .when('/students/edit/:id', {
            templateUrl: 'students-list/students-list.template.html',
            controller: 'studentsController'
        })
        .when('/students/new', {
            templateUrl: 'students-list/students-list.template.html',
            controller: 'studentsController'
        });
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
}]);