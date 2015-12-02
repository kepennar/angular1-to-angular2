import {bootstrap, provide} from 'angular2/angular2';
import {App} from './App';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(App, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS,
	provide(APP_BASE_HREF, {useValue: '/'})])