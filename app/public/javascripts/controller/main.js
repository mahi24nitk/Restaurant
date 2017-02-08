var app = angular.module('myapp', ['ngRoute','ngCookies']);
app.config(['$routeProvider',function($routeProvider,$locationProvider){
  
             $routeProvider.
              when('/',{
                      templateUrl : '/partial/home.html',
                       controller : 'restaurant'
                     
                  }).
                  when('/signin',{
                      templateUrl : '/partial/signin.html',
                      controller : 'signin'
                  }).
                   when('/signup',{
                      templateUrl : '/partial/signup.html',
                      controller : 'signup'
                  }).
                   
                   when('/detail',{
                      templateUrl : '/partial/detail.html',
                       controller:'restaurant'
                    
                      
                  }).
                   when('/addrestaurant',{
                      templateUrl : '/partial/addrestaurant.html',
                       controller:'restaurant'
                    
                      
                  }).
                   when('/bookreserve',{
                      templateUrl : '/partial/book.html',
                       controller:'rbook'
                    
                      
                  }).

                   
                    when('/logout',{
                      controller:'myctr'
                      

                     
                
                  }).
                    otherwise({
                             redirectTo:'/'
                    });
           
}]);
 
 app.run(function($rootScope,$cookies){
  if($cookies.get('token') && $cookies.get('currentUser')){
    $rootScope.token = $cookies.get('token');
    $rootScope.currentUser =$cookies.get('currentUser');
  }
 });

app.controller('myctr',function($scope,$cookies,$location,$rootScope,$http){
	
  $scope.logout = function(){
     $rootScope.token =null;
     $rootScope.currentUser =null;
    $cookies.remove('token');
    $cookies.remove('currentUser');
    $location.url('/');

  }
});