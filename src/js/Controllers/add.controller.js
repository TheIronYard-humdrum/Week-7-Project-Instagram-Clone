function AddController ($scope, $http, SERVER, $state) {

  $scope.addImage = (image) => {
    if (image.description === undefined) {
      image.description = 'No description given'
    }
    $http.post(SERVER.URL, image).then( (res) => {
      $state.go('root.home');
    });
  };
};

AddController.$inject = ['$scope', '$http', 'SERVER', '$state'];
export { AddController }