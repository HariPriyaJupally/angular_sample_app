

var JSONController = function($scope) {
    let Student = {
        FirstName : "Hari Priya" ,
        LastName : "Jupally",
        Email : "S533990@nwmissouri.edu",
        message:"hello world"
    }

    $scope.Student = Student;
}

angular.module("myApp").controller("Student",JSONController);