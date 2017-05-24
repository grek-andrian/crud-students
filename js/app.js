'use strict';

let crudApp = angular.module("crudApp", []);

crudApp.controller("studentsController", function studentsController(){

  this.clickedStudent = {};

  this.saveStudent = function(){
    this.studentsList.push(this.newStudent);
    this.newStudent = {};
  };

  this.studentsList = [
    {firstname: "Ivan" , lastname: "Franko", email: "i.franko@ukr.net"},
    {firstname: "Taras" , lastname: "Shevchenko", email: "t.shevchenko@ukr.net"},
    {firstname: "Lesya" , lastname: "Ukrainka", email: "l.ukrainka@ukr.net"}
  ];
});
