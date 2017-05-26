
//angular.module('studentsList').
//component('studentsList', {
 //   templateUrl: 'students-list/students-list.template.html',
//    controller: 'studentsController',
//    controllerAs: 'students'
//});




import controller  from './students-list.controller.js'
import template    from './students-list/students-list.template.html'

const studentList = {
    template,
    controller,
    controllerAs: 'students'
}

angular.module('studentsList')
    .component('studentsList', studentsList);
