import { studentsController } from './students-list.controller.js';
import { studentsList } from './students-list.component.js';

angular
    .module('studentsList', ['ui.router'])
    .controller('studentsController', studentsController)
    .component('studentsList', studentsList);