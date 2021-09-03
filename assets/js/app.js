var app = angular.module('app', ['ngRoute','ngMeta']);

app.config(['$locationProvider', '$routeProvider','ngMetaProvider', function ($locationProvider, $routeProvider,ngMetaProvider) {

$routeProvider.

when('/', {
templateUrl: './views/home.html',
 data: {
      meta: {
        'title': 'Material CSS',
        'description': ''
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

when('/blog', {
templateUrl: './views/blog/index.html',
 data: {
      meta: {
        'title': 'Blog',
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

.directive('dropdown', function() {
    return {
    restrict: 'E',
    templateUrl: './views/_elements/dropdown.html',
    };
})

.directive('card', function() {
    return {
    restrict: 'E',
    templateUrl: './views/_elements/card.html',
    };
})

app.controller('home', ['$http','$scope',function ($http,$scope) {

}]);




