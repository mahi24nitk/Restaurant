app.controller('signup',function($scope,$http){
	$scope.restuser = {};
	$scope.signup = function(){
		console.log($scope.restuser);
		$http.post('/api/restaurant/signup',$scope.restuser)
		.success(function(data){
			$scope.sup = data;
			console.log(data);
		}).error(function(data){
			console.log(data);
		});
	};
});