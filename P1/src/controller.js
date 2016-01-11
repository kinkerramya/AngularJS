app.controller("mycontroller", function ($scope) {
    $scope.student={
        firstname: "Ramya Reddy",
        lastname: "Kinkiri Venkata reddy",
        fees:2400,
        subjects: [ {name: 'English', marks: 45},
                 {name: 'Telugu', marks: 67},
                 {name: 'Hindi', marks: 88},
                 {name: 'Maths', marks: 90} ],
        fullname: function() {
            return $scope.student.firstname+" "+$scope.student.lastname;
        }
    };
});