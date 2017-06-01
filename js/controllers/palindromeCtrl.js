angular.module("PalindromeCtrlModule", [])

.controller("palindromeCtrl",["$scope",function ($scope) {

    document.getElementById("workspace").classList.remove('active');
    document.getElementById("home").classList.add('active');

    $scope.appDetails = {};
    $scope.appDetails.title = "Palindromes";
    $scope.appDetails.tagline = "Your One Stop for all Palindrome Problems!!";

}])

    .controller("calculationCtrl",["$scope","Strings",function ($scope,Strings) {

        document.getElementById("workspace").classList.add('active');
        document.getElementById("home").classList.remove('active');

        $scope.calcDetails = {};
        $scope.calcDetails.x = false;
        $scope.myValue = false;

        $scope.checkPalindrome = function () {
            var input = document.getElementById("palindrome").value;
            input = input.replace(/^\s+|\s+$/g, '');
            if(input != "")
            {
                $scope.calcDetails.x = Strings.palindrome(input);

                if($scope.calcDetails.x == true)
                {
                    $scope.myValue = true;
                    document.getElementById("result").value = "Yup That's a Palindrome!!";
                }
                else
                {
                    $scope.myValue = true;
                    document.getElementById("result").value = "Looks like this one is not a Palindrome!!";
                }
            }

        };
    }])

    .factory("Strings",function () {
        var string={};

        string.palindrome = function (str) {
            var nopunctuation = str.replace(/\W/g,"");
            var nospaces = nopunctuation.replace(/\s/g,"");
            var finalstring = nospaces;

            var len = finalstring.length;
            for ( var i = 0; i < Math.floor(len/2); i++ ) {
                if (finalstring[i] !== finalstring[len - 1 - i]) {
                    return false;
                }
            }
            return true;
        }
        return string;

    });

