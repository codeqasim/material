var views_modules = "./app/views/modules/"; // modules views folder
var app = angular.module('app', ['ngRoute','ngMeta']);

app.config(['$locationProvider', '$routeProvider','ngMetaProvider', function ($locationProvider, $routeProvider,ngMetaProvider) {

$routeProvider.

when('/', {
templateUrl: './app/views/home.html',
 data: {
      meta: {
        'title': 'Material CSS',
        'description': ''
      }
    }
}).

when('/getting-started', {
templateUrl: './app/views/web/getting-started.html',
 data: {
      meta: {
        'title': 'Getting Started',
        'description': ''
      }
    }
}).


when('/login', {
templateUrl: views_modules+'account/login.html',
 data: {
      meta: {
        'title': 'Login',
        'description': ''
      }
    }
}).

when('/signup', {
templateUrl: views_modules+'account/signup.html',
 data: {
      meta: {
        'title': 'Signup',
        'description': ''
      }
    }
}).

when('/blog', {
templateUrl: views_modules+'blog/index.html',
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
    templateUrl: './app/views/_elements/dropdown.html',
    };
})

.directive('card', function() {
    return {
    restrict: 'E',
    templateUrl: './app/views/_elements/card.html',
    };
})

app.controller('home', ['$http','$scope',function ($http,$scope) {

// var script = document.createElement('script');
// script.type = 'text/javascript';
// script.src = "./assets/js/prism.js";
// document.body.appendChild(script);

}

])

app.controller('blog', ['$http','$scope',function ($http,$scope) {

    
  $scope.blogs = [
    {
      "name":"friend1",
      "email":"email1@gmail.com"
    },
    {
      "name":"friend2",
      "email":"email2@gmail.com"
    },
    {
      "name":"friend3",
      "email":"email4@gmail.com"
    }
  ];

}

])


