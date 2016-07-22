#### Week 7 Project - Build an Instargam 'Clone' with AngularJS
---
Learning Angular JS
---

[Surge](http://tiy-humdrum-project-instagram-cone.surge.sh/)

* Used and `<i>` tag wrapped in an `<a>` tag to use fontAwesome icon as my link.

  ```html
  <a href="/#/detail/{{ image._id }}">
    <i class="fa fa-bars fa-lg" aria-hidden="true"></i>
  </a>
  ```

* Used `$stateParams` to carry `$scope` data from home page to detail page

* Used `:imageID` to make 'ghost pages', pages that take object id and inserts it as the http address so data pulled from server stays unique to particular scope we want.
  ```javascript
  .state('root.detail', {
    url: 'detail/:imageID',
    templateUrl: '/tempalte.location'
    controller: 'DetailController'
  })
  ```
  * `templateUrl` - _Url_  **NOT**  URL