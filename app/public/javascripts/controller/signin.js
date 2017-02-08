app.controller('signin',function($scope,$http,$rootScope,$cookies,$location){
	$scope.restuser = {};
	$scope.signin = function(){
		console.log($scope.restuser);
		$http.post('/api/restaurant/signin',$scope.restuser)
		.success(function(data){
			$scope.sig = data;
			$rootScope.token = data.token;
			$rootScope.currentUser = $scope.restuser.email;
			$cookies.put('token',data.token);
			$cookies.put('currentUser',$scope.restuser.email);
			if(data.token){
			 $location.url('/');
			}
			console.log(data);
		}).error(function(data){
			console.log(data);
		});
	};
	
	});