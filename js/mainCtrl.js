angular
  .module('assessment')
  .controller('mainCtrl', function ($scope, $http, mainService) {
    var pets = mainService.getPets();
    pets.then(function (data) {
      $scope.pets = data.data;
    });
    $scope.showPetImage = true;
  });
