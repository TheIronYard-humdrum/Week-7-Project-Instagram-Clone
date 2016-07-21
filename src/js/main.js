// Import AngularJS $ 3rd Party Modules
import angular from 'angular';
import 'angular-ui-router';

// Import our Config & Constants
import { config } from './config';
import { appConstant } from './app.constant'

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('SERVER', appConstant)