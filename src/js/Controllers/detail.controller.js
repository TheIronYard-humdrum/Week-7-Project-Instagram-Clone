function DetailController ($scope, $http, $stateParams, SERVER) {

  $scope.detailImage = {};
  $scope.imageID = $stateParams.imageID
  init();
  function init () {
    $http.get(SERVER.URL + $stateParams.imageID).then( (res) => {
      $scope.detailImage = res.data;
    });
  }

}


DetailController.$inject = ['$scope', '$http', '$stateParams', 'SERVER']
export { DetailController }