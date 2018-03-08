var myapp = angular.module('restarent', ['ui.router']);


myapp.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
            url: '/home',
            templateUrl: '/components/producthome.html',
            controller:'loginCtrl'
    })
    .state('home1', {
            url: '/home1',
            templateUrl: '/components/producthome1.html',
            controller:'loginCtrl1'
    })

}]);

myapp.controller('loginCtrl', function($scope, $http) {  

  $scope.listLocation=function(searchid) {
  	$http.get("/home/data?location="+searchid)
    .then(function(response) {
    	$scope.myWelcome=[];
        $scope.myWelcome = response.data;
         console.log("result data",response);
         if(response.data.length){
           $('.js-mainTable').show();
         }else{
         	alert("No data Found");
         }
    });
  } 
});  

myapp.controller('loginCtrl1', function($scope, $http) {  
 
}); 
