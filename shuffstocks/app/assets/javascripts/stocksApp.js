var stocksApp = angular.module('stocksApp', []);

stocksApp.controller("stocksCtrl", ["$scope", "$filter", "$http", function($scope, $filter, $http) {

	$scope.stockSubmission = null;

	$scope.stocksArray = [
		{ name: "Apple Computer", symbol: "AAPL", news: "Stuff that goes here"},
		{ name: "Microsoft", symbol: "MSFT", news: "We are all dying of starvation because we're doing terribly."}
	];

	$scope.currentItem = null;

	$scope.reassign = function(item){
		$scope.currentItem = item;
		console.log(item);
	}

	$scope.submit = function(){
		$http({method: "POST", data:$scope.stockSubmission, url: "/rector"})
		.success(function(data){ console.log(data)});
	};

}]);

