

var stocksApp = angular.module('stocksApp', ['ngRoute']);


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
		$http({method: "POST", data: {sss:"dd"}, url: "/rector"})
		.success(function(data){ console.log(data)});
	};

}]);

stocksApp.config(function($routeProvider){
	console.log("shulkjhgff")
	$routeProvider.when("/", {
		templateUrl: "<%= asset_path('templates/shuff.html.erb') %>",
		controller: "stocksCtrl"
	});
});

