app.controller('restaurant',function($scope,$http,$location,$rootScope){
	$scope.restaurant = {};
	$scope.b ={};
	$scope.r ={};
	
		load();
		
	function load(){
	$http.get('/api/restaurant/restinformation')
	.success(function(data){
		console.log(data);
		$scope.info = data;
		
		
	}).error(function(data){
		console.log(data);
	});
   };   
/*function bookingdata(id){
   	
   	 $http.get('/api/restaurant/bookingdata/' ,$rootScope.pro._id ,
       	{headers:
           {'authorization':$rootScope.token}
        })
      .success(function(data){
      	console.log(data);
      	$scope.bd = data;
      }).error(function(data){
      	console.log(data);	
      });
   };*/

 $scope.book =function(id){

      console.log(id);
      
      $http.post('/api/restaurant/booking/' +id ,$scope.b,
       	{headers:
           {'authorization':$rootScope.token}
        })
      .success(function(data){
      	console.log(data);
      	$http.get('/api/restaurant/bookingdata/' +id ,
       	{headers:
           {'authorization':$rootScope.token}
        })
      .success(function(data){
      	console.log(data);
      	$scope.bd = data;
      }).error(function(data){
      	console.log(data);	
      });

      }).error(function(data){
      	console.log(data);
      });
    
   };  
   $scope.bookdelete = function(id,lid) {
   	console.log(id);
   	 $http.delete('/api/restaurant/bookdelete/' +id ,
       	{headers:
           {'authorization':$rootScope.token}
        })
   	
   	.success(function(data){
   		console.log(data);
   		$http.get('/api/restaurant/bookingdata/' +lid ,
       	{headers:
           {'authorization':$rootScope.token}
        })
      .success(function(data){
      	console.log(data);
      	$scope.bd = data;
      }).error(function(data){
      	console.log(data);	
      });

   		
   	}).error(function(data){
   		console.log(data);
   	});
   };
   $scope.edit = function (id){
   	
       $http.get('/api/restaurant/edit/' +id ,
       	{headers:
           {'authorization':$rootScope.token}
        })
   	
	.success(function(data){
		console.log(data);
		$scope.b = data;
		
		
	}).error(function(data){
		console.log(data);
	});
   };
   $scope.update = function (id){
   	    
      $http.put('/api/restaurant/update/' +$scope.b._id,$scope.b)
       	
   	
	.success(function(data){
		console.log(data);
		$http.get('/api/restaurant/bookingdata/' +id ,
       	{headers:
           {'authorization':$rootScope.token}
        })
      .success(function(data){
      	console.log(data);
      	$scope.bd = data;
      }).error(function(data){
      	console.log(data);	
      });

      }).error(function(data){
      	console.log(data);
      });
		
		
	
   };

   $scope.check = function(){
          if(!$rootScope.token){
			$location.url('/signin');
		}else{
			$location.url('/addrestaurant');
     }
 }
	$scope.addrestaurant = function(){
		
			
		
	console.log($scope.restaurant);
	    $http.post('/api/restaurant/restinformation',$scope.restaurant,
           {headers:
           {'authorization':$rootScope.token}
        }
		)
	   .success(function(data){
		console.log(data);
		load();


		
	}).error(function(data){
		console.log(data);
	});
 	
};
   $scope.detail = function (id){
   	
       $http.get('/api/restaurant/detail/' +id)
   	
	.success(function(data){
		console.log(data.address);
		$rootScope.pro = data;
			console.log($rootScope.pro._id);

	}).error(function(data){
		console.log(data);
	});
   }
    $scope.remove = function (id){
   	
      $http.delete('/api/restaurant/remove/' +id ,
       	{headers:
           {'authorization':$rootScope.token}
        })
   	
	.success(function(data){
		console.log(data);
		load();
		
	}).error(function(data){
		console.log(data);
	});
   };
$scope.bookreserve = function(id){
	$scope.in = false;
	if($rootScope.token){
       $scope.in = true;
       $http.get('/api/restaurant/bookingdata/' +id ,
       	{headers:
           {'authorization':$rootScope.token}
        })
      .success(function(data){
      	console.log(data);
      	$scope.bd = data;
      }).error(function(data){
      	console.log(data);	
      });

      
     
    
	}
	else{
		$location.url('/signin');
	}
};
 $scope.addreview = function(id){
 
 	$scope.rvw = false;
 	if($rootScope.token){
 		$scope.rvw = true;
 	}else{
 		$location.url('/signin');
 	}
 	$http.get('/api/restaurant/review/' +id)
   	
	.success(function(data){
		console.log(data);
		$scope.rws = data;
	  

	}).error(function(data){
		console.log(data);
	});


 };
 $scope.addrvw = function(id){
 	console.log($scope.r);
 	
 	   $http.post('/api/restaurant/review/' +id,$scope.r)
   	
	.success(function(data){
		console.log(data);
		$scope.rw = data;
	  

	}).error(function(data){
		console.log(data);
	});
	  $http.get('/api/restaurant/review/' +id)
   	
	 .success(function(data){
		console.log(data);
		$scope.rws = data;
	  

	}).error(function(data){
		console.log(data);
	});


 };
  

   
});