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
        $scope.calcDetails.y = -1;
        $scope.myValue = false;
        $scope.resValue = false;

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

        $scope.findPalindrome = function () {
            var min = parseInt(document.getElementById("min").value);
            var max = parseInt(document.getElementById("max").value);

            if(min!= "" && max!="")
            {
                if(min >=0 && max>=0)
                {

                    if(max>=min)
                    {

                        $scope.calcDetails.y = Strings.checkPalindrome(min,max);
                    }
                    else
                    {
                        $scope.calcDetails.y = Strings.checkPalindrome(max,min);
                    }

                    $scope.resValue = true;

                    if($scope.calcDetails.y == -1)
                    {
                        document.getElementById("res").value = " No Palindrome Found in the given range!";
                    }
                    else
                    {
                        document.getElementById("res").value = $scope.calcDetails.y + " is the largest Palindrome in the given range!";
                    }


                }
                else if(min <0 && max >= 0)
                {
                    $scope.calcDetails.y = Strings.checkPalindrome(min,max);
                    $scope.resValue = true;

                    if($scope.calcDetails.y == -1)
                    {
                        document.getElementById("res").value = " No Palindrome Found in the given range!";
                    }
                    else
                    {
                        document.getElementById("res").value = $scope.calcDetails.y + " is the largest Palindrome in the given range!";
                    }
                }
                else if(max<0 && min>=0)
                {
                    $scope.calcDetails.y = Strings.checkPalindrome(max,min);
                    $scope.resValue = true;

                    if($scope.calcDetails.y == -1)
                    {
                        document.getElementById("res").value = " No Palindrome Found in the given range!";
                    }
                    else
                    {
                        document.getElementById("res").value = $scope.calcDetails.y + " is the largest Palindrome in the given range!";
                    }
                }
                else
                {
                    if(min >= max)
                    {
                        min = (-2*min)+min;
                        max = (-2*max)+max;
                        $scope.calcDetails.y = Strings.checkPalindromeNeg(min,max);
                        $scope.resValue = true;

                        if($scope.calcDetails.y == -1)
                        {
                            document.getElementById("res").value = " No Palindrome Found in the given range!";
                        }
                        else
                        {
                            document.getElementById("res").value = "-"+$scope.calcDetails.y + " is the largest Palindrome in the given range! (- is ignored)";
                        }
                    }
                    else
                    {
                        min = (-2*min)+min;
                        max = (-2*max)+max;
                        $scope.calcDetails.y = Strings.checkPalindromeNeg(max,min);
                        $scope.resValue = true;

                        if($scope.calcDetails.y == -1)
                        {
                            document.getElementById("res").value = " No Palindrome Found in the given range!";
                        }
                        else
                        {
                            document.getElementById("res").value = "-"+$scope.calcDetails.y + " is the largest Palindrome in the given range! (- is ignored)";
                        }
                    }
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

        string.checkPalindrome = function (num1,num) {

            var a,b,temp=0;
            b=num;
            while(num>=num1)
            {
                while(num>0)
                {
                    a=num%10;
                    num=parseInt(num/10);
                    temp=temp*10+a;
                }
                if(temp==b)
                {
                    return temp;
                    break;
                }
                else
                {
                    num = b -1;
                    b = b - 1 ;
                    a = 0;
                    temp = 0;
                }

            }
            return -1;
        }

        string.checkPalindromeNeg = function (num,num1) {
            var a,b,temp=0;
            b=num;
            console.log(num+" "+num1);
            while(num<=num1)
            {
                console.log(num+" "+b);
                while(num>0)
                {
                    a=num%10;
                    num=parseInt(num/10);
                    temp=temp*10+a;
                }
                if(temp==b)
                {
                    return temp;
                    break;
                }
                else
                {
                    num = b +1;
                    b = b + 1 ;
                    a = 0;
                    temp = 0;
                }
                console.log(num+" "+b);
            }
            return -1;
        }

        return string;

    });
