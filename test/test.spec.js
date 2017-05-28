describe('students-list controller', function () {

//beforeEach(module('crudApp'));
beforeEach(angular.mock.module('crudApp'));

beforeEach(inject(function($controller) {
       studentsController = $controller("studentsController");

}));

	it('should handle names correctly', function(){

			studentsController.firstname = 'George';
			studentsController.lastname = 'Harrison';
      studentsController.email = 'g.harrison@ukr.net';
      studentsController.group = 'history';

			 expect(studentsController.message).toBeDefined();
	});
});


//beforeEach(inject(function($controller){
//  studentsController = $controller('studentsController', {
//    dataSvc: mockDataSvc
//  });
//}));



//beforeEach(module('crudApp'));


//var assert = chai.assert;

//describe('Array', function() {
//  describe('#indexOf()', function() {
//    it('should return -1 when the value is not present', function() {
//      assert.equal(-1, [1,2,3].indexOf(4));
//    });
//  });
//});
