angular.module("PalindromeCtrlModule", [])

.controller("palindromeCtrl",["$scope",function ($scope) {

    document.getElementById("workspace").classList.remove('active');
    document.getElementById("home").classList.add('active');

    $scope.appDetails = {};
    $scope.appDetails.title = "Palindromes";
    $scope.appDetails.tagline = "Your One Stop for all Palindrome Problems!!";

}])

    .controller("calculationCtrl",["$scope",function ($scope) {

        document.getElementById("workspace").classList.add('active');
        document.getElementById("home").classList.remove('active');
    }]);
