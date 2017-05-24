'use strict';

let crudApp = angular.module("crudApp", []);

crudApp.controller("studentsController", function studentsController(){

  this.clickedStudent = {};

  this.message = "";

  this.clearMessage = function(){
    this.message = "";
  };

  this.selectStudent = function(student){
    console.log(student);
    this.clickedStudent = student;
  };

  this.updateStudent = function(){
    this.studentsList.push(this.clickedStudent);
    this.message = "The student successfully updated";
  };

  this.deleteStudent = function(){
    this.studentsList.splice(this.studentsList[this.clickedStudent], 1);
    this.message = "The student successfully deleted";
  };

  this.saveStudent = function(){
    this.studentsList.push(this.newStudent);
    this.newStudent = {};
    this.message = "The new student successfully added";
  };

  this.studentsList = [
    {firstname: "Ivan" , lastname: "Franko", email: "i.franko@ukr.net"},
    {firstname: "Taras" , lastname: "Shevchenko", email: "t.shevchenko@ukr.net"},
    {firstname: "Lesya" , lastname: "Ukrainka", email: "l.ukrainka@ukr.net"}
  ];
});
