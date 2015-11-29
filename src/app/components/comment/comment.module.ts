import {ZNComment} from './comment';
import {adapter} from '../../adapter';

import * as angular from 'angular';

export let ZnCommentModule = angular.module('BlogApp.ui.commentsList', []);
ZnCommentModule.directive('znComment', adapter.downgradeNg2Component(ZNComment));