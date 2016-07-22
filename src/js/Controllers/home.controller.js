function HomeController ($scope, $http, SERVER, $state) {

  $scope.images = [];

  init();

  function init () {
    $http.get(SERVER.URL).then( (res) => {
      $scope.images = res.data
    });
    $state.go('root.home');
  };

  $scope.deleteImage = (id) => {
    $http.delete(SERVER.URL + id).then( (res) => {
      $scope.images = $scope.images.filter( (gif) => {
        return image._id !== id;
      });
    });
  };

  $scope.favoriteMe = (image) => {
      image.likes === undefined ? image.likes = 1 : image.likes ++;
  }

  $scope.showDetailed = (url) => {
    $state.go('root.detail');
  }

}
HomeController.$inject = ['$scope', '$http', 'SERVER', '$state'];
export { HomeController }