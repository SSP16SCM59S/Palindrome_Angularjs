var myApp = angular.module("Palindrome",["ngRoute","PalindromeCtrlModule"]);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/",{
            templateUrl: "views/home.html"
        })
        .when("/palindrome",{
            templateUrl: "views/calculations.html",
            controller: "calculationCtrl"
        })
        .when("/landing",{
            templateUrl: "views/home.html",
            controller: "palindromeCtrl"
        })
        .otherwise({
            redirectTo: "/"
        })

})




