'use strict';

let crudApp = angular.module("crudApp", ["firebase"]);

crudApp.controller("studentsController", function studentsController($firebaseArray){
  var ref = firebase.database().ref();
  this.studentsList = $firebaseArray(ref);

  this.clickedStudent = {};

  this.message = "";

  this.clearMessage = function(){
    this.message = "";
  };

  this.selectStudent = function(student){
    this.clickedStudent = student;
  };

  this.updateStudent = function(){
    //var id = this.id;
    //var record = this.studentsList.$getRecord(id);
      this.studentsList.$save({
          firstname: this.clickedStudent.firstname,
          lastname: this.clickedStudent.lastname,
          email: this.clickedStudent.email
      }).then(function(ref){
          console.log(ref.key)
      });
    this.studentsList.push(this.clickedStudent);
    this.message = "The student successfully updated";
  };

  this.deleteStudent = function(){
    this.studentsList.$remove(this.clickedStudent);
    this.message = "The student successfully deleted";
  };

  this.saveStudent = function(){
    this.studentsList.$add({
          firstname: this.newStudent.firstname,
          lastname: this.newStudent.lastname,
          email: this.newStudent.email
      }).then(function(ref){
        var id = ref.key;
    });
    this.newStudent = {};
    this.message = "The new student successfully added";
    };
    //this.studentsList = [
    //    {firstname: "Ivan" , lastname: "Franko", email: "i.franko@ukr.net"},
    //    {firstname: "Taras" , lastname: "Shevchenko", email: "t.shevchenko@ukr.net"},
    //    {firstname: "Lesya" , lastname: "Ukrainka", email: "l.ukrainka@ukr.net"}
    //];

});
