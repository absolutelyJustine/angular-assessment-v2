angular.module('assessment').directive("pet", function () {
  return {
    restrict: "E", templateUrl: 'views/pet.html', link: function ($scope, element) {
      element.addClass('pet')
    }
  }
});
