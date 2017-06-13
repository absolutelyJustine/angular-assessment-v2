angular.module('assessment').service('mainService', function ($http) {
  var baseUri = 'https://practiceapi.devmountain.com/pets';
  this.getPets = function () {
    return $http({
      method: 'GET',
      url: baseUri
    }).then(function (data) {
      return data;
    })
  };
  this.getBio = function (id) {
    return $http.get(baseUri + "/" + id).then(function (data) {
      return data.data;
    })
  };
});
