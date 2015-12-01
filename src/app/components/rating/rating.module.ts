import {ZNRating} from './rating';

import {adapter} from '../../adapter';

import * as angular from 'angular';

export let ZnRatingModule = angular.module('BlogApp.ui.rating', []);
ZnRatingModule.directive('znRating', adapter.downgradeNg2Component(ZNRating));