var app = angular.module('myapp', ['ngRoute']);
app.config(['$routeProvider',function($routeProvider,$locationProvider){
  
             $routeProvider.
              when('/',{
                      templateUrl : '/partial/home.html',
                       controller : 'myctr'
                     
                  }).
                  when('/signin',{
                      templateUrl : '/partial/signin.html',
                      controller : '/controller/signin'
                  }).
                   when('/signup',{
                      templateUrl : '/partial/signup.html',
                      controller : '/controller/signup'
                  }).
                   
                   when('/detail',{
                      templateUrl : '/partial/detail.html',
                       controller:'myctr'
                    
                      
                  }).
                   when('/addrestaurant',{
                      templateUrl : '/partial/addrestaurant.html',
                       controller:'/controller/restaurant'
                    
                      
                  }).

                   
                    when('/logout',{
                      controller:'myctr'
                      

                     
                
                  }).
                    otherwise({
                             redirectTo:'/'
                    });
           
}]);
 

app.controller('myctr',function($scope){
	$scope.name ="mahendra";
});