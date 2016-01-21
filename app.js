angular.module('myApp', ['ngMessages'])
	   .controller('mainCtrl', function($scope) {
	   	$scope.mealPrice=10;
	   	$scope.tax=8.5;
	   	$scope.tip=20;
	   	$scope.subtotal = 0;
	   	$scope.counter = 0;
	   	$scope.totalTip = 0;

	   	$scope.getSubtotal = function(){
	   		$scope.subtotal = $scope.mealPrice + (($scope.tax/100) * $scope.mealPrice);
	   		return $scope.subtotal;
	   	}

	   	$scope.getTip = function(){
	   		$scope.tipCash = (($scope.tip/100) * $scope.mealPrice);
	   		return $scope.tipCash;
	   	}

	   	$scope.processAll = function(){
	   		$scope.getSubtotal();
	   		$scope.getTip();
	   		$scope.counter++;
	   		$scope.totalTip += ($scope.getTip());	   	
	   	}

	   	$scope.reset =  function(){
	   		$scope.mealPrice=0;
	   		$scope.tax=0;
	   		$scope.tip=0;
	   		$scope.subtotal = 0;
	   		$scope.counter = 0;
	   		$scope.totalTip = 0;
	   		$scope.counter = 0;
	   		$scope.totalTip = 0;
	   		$scope.tipCash = 0;
	   	}
	   });