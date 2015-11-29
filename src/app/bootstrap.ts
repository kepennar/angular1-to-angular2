
import 'zone.js';
import 'reflect-metadata';
import * as angular from 'angular';

import {adapter} from './adapter';

import {routeConfig} from './index.route';

import './components/comment/comment.module';

angular.module('BlogApp', [
  'ngAnimate',
  'ngTouch',
  'ngSanitize',
  'ngResource',
  'ui.router',
  'BlogApp.home',
  'BlogApp.article-details',
  'BlogApp.admin',
  'BlogApp.contact'
])
.config(routeConfig);

adapter.bootstrap(document.body, ['BlogApp']);