import {bootstrap} from 'angular2/angular2';
import {App} from './App';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(App, [ROUTER_PROVIDERS, HTTP_PROVIDERS])