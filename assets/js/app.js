var app = angular.module('app', ['ngRoute','ngMeta']);

app.config(['$locationProvider', '$routeProvider','ngMetaProvider', function ($locationProvider, $routeProvider,ngMetaProvider) {

$routeProvider.

when('/', {
templateUrl: './views/home.html',
 data: {
      meta: {
        'title': 'Booknow - Flights - Hotels - Cars and Tours ',
        'description': 'Book now is the best source for your online travel booking business. we offer last minute travel services such as flights hotels rooms tours and cars rental or transfer '
      }
    }
}).

when('/login', {
templateUrl: './views/login.html',
 data: {
      meta: {
        'title': 'Login',
        'description': ''
      }
    }
}).

when('/signup', {
templateUrl: './views/signup.html',
 data: {
      meta: {
        'title': 'Signup',
        'description': ''
      }
    }
}).


otherwise({
redirectTo: '/'
});

$locationProvider.html5Mode(true);
}])

.run(['ngMeta', function(ngMeta) {
    ngMeta.init();
}])

.directive('headdrop', function() {
    return {
        restrict: 'E',
templateUrl: './views/partials/headdrop.html',
    };
});


app.controller('Home', ['$http','$scope',function ($http,$scope) {



}]);




