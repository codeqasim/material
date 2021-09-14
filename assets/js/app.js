var views_modules = "./app/views/modules/"; // modules views folder
var app = angular.module('app', ['ngRoute','ngMeta']);

app.config(['$locationProvider', '$routeProvider','ngMetaProvider', function ($locationProvider, $routeProvider,ngMetaProvider) {

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "./assets/js/prism.js";
document.body.appendChild(script);

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

when('/components', {
templateUrl: './app/views/web/components.html',
 data: {
      meta: {
        'title': 'Getting Started',
        'description': ''
      }
    }
}).

when('/components-inputs', {
templateUrl: './app/views/web/inputs.html',
 data: {
      meta: {
        'title': 'Inputs',
        'description': ''
      }
    }
}).

when('/components-buttons', {
templateUrl: './app/views/web/buttons.html',
 data: {
      meta: {
        'title': 'Inputs',
        'description': ''
      }
    }
}).

when('/components-skeleton', {
templateUrl: './app/views/web/skeleton.html',
 data: {
      meta: {
        'title': 'Skeleton',
        'description': ''
      }
    }
}).

when('/components-tables', {
templateUrl: './app/views/web/tables.html',
 data: {
      meta: {
        'title': 'Tables',
        'description': ''
      }
    }
}).

when('/components-radio', {
templateUrl: './app/views/web/radio.html',
 data: {
      meta: {
        'title': 'Radio',
        'description': ''
      }
    }
}).

when('/components-linear', {
templateUrl: './app/views/web/linear.html',
 data: {
      meta: {
        'title': 'Linear',
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
// redirectTo: document.location.pathname
});

// enabling HTML5 history 
$locationProvider.html5Mode(true);
}])

// init ng meta 
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


function checkbox(source) {

var checkboxes = document.querySelectorAll('input[name="checkbox"]');
for (var i = 0; i < checkboxes.length; i++) {
if (checkboxes[i] != source)
checkboxes[i].checked = source.checked;
}
}