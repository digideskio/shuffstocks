

var stocksApp = angular.module('stocksApp', ['ngRoute']);


stocksApp.controller("stocksCtrl", ["$scope", "$filter", "$http", function($scope, $filter, $http) {

	$scope.stockSubmission = null;

	$scope.stocksArray = [];

	$scope.load = null;

	$scope.reassign = function(item){
		$scope.currentItem = item;
		console.log(item);
	}

	$scope.displayName = function(object){
	 	return object["rss"]["channel"]
	};

	$scope.submit = function(item){
		console.log(item)
		$http({
			method: "POST",
			params: {"stock": item},
			url: "/rector",
			headers: {
        	'Content-type': 'application/json'
    }

		})
		.success(function(data){
			$scope.stocksArray.push(data);
			console.log(data);
			console.log($scope.stocksArray)
		});
	};



	setInterval(function(){
	console.log("s")
	},
	1000);

}]);

stocksApp.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl: "<%= asset_path('templates/shuff.html.erb') %>",
		controller: "stocksCtrl"
	});
});

