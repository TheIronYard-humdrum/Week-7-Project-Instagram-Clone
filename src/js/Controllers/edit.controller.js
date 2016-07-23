function EditController ($scope, $http, SERVER, $state, $stateParams) {

  $scope.editImage = {};
  init ();

  function init() {
    $http.get(SERVER.URL + $stateParams.imageID).then( (res) => {
      $scope.editImage = res.data;
    });
  }

  $scope.updateImage = (editImage, newImage) => {
    $http.put(SERVER.URL + $stateParams.imageID, editImage).then ( (res) => {

    });
    $state.go('root.home');
    // would like this to go back to the description page.
    // $state.go('root.detail.editImage._id')
  }

}

EditController.$inject = ['$scope', '$http', 'SERVER', '$state', '$stateParams']
export { EditController }