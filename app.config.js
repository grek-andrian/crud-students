angular
    .module('crudApp')
    .config(config);

function config($stateProvider, $locationProvider) {
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
}