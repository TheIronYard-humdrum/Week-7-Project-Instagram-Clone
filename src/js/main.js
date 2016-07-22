// Import AngularJS $ 3rd Party Modules
import angular from 'angular';
import 'angular-ui-router';

// Import our Config & Constants
import { config } from './config';
import { appConstant } from './app.constant'

import { HomeController } from './Controllers/home.controller'
import { AddController } from './Controllers/add.controller'

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('SERVER', appConstant)
  .controller('HomeController', HomeController)
  .controller('AddController', AddController);

  