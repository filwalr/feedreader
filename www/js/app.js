(function(){

var app = angular.module('feedreader', ['ionic']);


app.controller('FeedCtrl', function($http, $scope) {

  $scope.stories = [];

  $scope.message = {
   text: 'hello world!',
   time: new Date()
  };

  $http.get('https://www.reddit.com/.json')
    .success(function(response) {
      angular.forEach(response.data.children, function(child) {
        $scope.stories.push(child.data);
      });
    });



});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

}());