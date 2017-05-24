crudApp.factory('StudentService', function($firebase){
    return $firebase(new Firebase('https://students-crud.firebaseio.com/'));
});