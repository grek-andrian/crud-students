angular.module('studentsList').controller('studentsController', function studentsController($firebaseArray) {
    var ref = firebase.database().ref().child("students");
    this.studentsList = $firebaseArray(ref);

    this.clickedStudent = {};

    this.message = "";

    this.clearMessage = function() {
        this.message = "";
    };

    this.selectStudent = function (student) {
        this.clickedStudent = student;
    };

    this.updateStudent = function() {
        var record = this.studentsList.$getRecord(this.clickedStudent.$id);
        record.firstname = this.clickedStudent.firstname;
        record.lastname = this.clickedStudent.lastname;
        record.email = this.clickedStudent.email;

        this.studentsList.$save(record).then(function (ref) {
            console.log("edited record with id " + ref.key);
        });
        this.message = "The student successfully updated";
    };

    this.deleteStudent = function() {
        this.studentsList.$remove(this.clickedStudent);
        this.message = "The student successfully deleted";
    };

    this.saveStudent = function() {
        this.studentsList.$add({
            firstname: this.newStudent.firstname,
            lastname: this.newStudent.lastname,
            email: this.newStudent.email
        }).then(function (ref) {
            console.log("added record with id " + ref.key);
        });
        this.newStudent = {};
        this.message = "The new student successfully added";
    }
}
);