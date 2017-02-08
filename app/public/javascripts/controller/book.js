app.controller('rbook',function($scope,$cookies,$location,$rootScope,$http){
	$scope.b ={};
  $scope.booking =function(){
      console.log($scope.b);
      $http.post('/api/restaurant/booking',$scope.b)
      .success(function(data){
      	console.log(data);
      	

      }).error(function(data){
      	console.log(data);
      });
    $http.get('/api/restaurant/bookingdata')
      .success(function(data){
      	console.log(data);
      	$scope.bd = data;
      }).error(function(data){
      	console.log(data);
      });
   };
});