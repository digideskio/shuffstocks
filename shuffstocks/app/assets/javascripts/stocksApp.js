

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
	 	return object["fundamentals"];
	};

	// $scope.checkForIrregularities = function(name){
	// 	var array = ["Common Stock"]
	// }

	$scope.parse = function(data){
		var stock = {}
		stock.news = JSON.parse(data.news)
		stock.description = stock.news.rss.channel.description
		stock.name = stock.description.split(" ").splice(4).join(" ");
		// stock.name = $scope.checkForIrregularities(stock.name)
		stock.newsArticles = stock.news.rss.channel.item
		stock.price = data.fundamentals.bid
		return stock
	}

	$scope.cons = function(data){
		console.log("This is from the console: ", data)
	}

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
			var stock = $scope.parse(data)
			$scope.stocksArray.push(stock);
		});
	};


}]);

stocksApp.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "<%= asset_path('templates/shuff.html.erb') %>",
		controller: "stocksCtrl"
	})
});

