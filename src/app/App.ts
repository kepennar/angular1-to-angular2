import {Component} from 'angular2/angular2';
import {ZNNavbar} from './components/navbar/navbar';

import {RouteConfig} from 'angular2/router';
import { RouterOutlet } from 'angular2/router';

import {Home} from './sections/home/home';
import {ArticleDetails} from './sections/article-details/article-details';

@Component({
  selector: 'app',
	directives: [RouterOutlet, ZNNavbar],
	template: `
		<zn-navbar></zn-navbar>
		<div class="main-content container">
			<router-outlet></router-outlet>
		</div>
	`})
@RouteConfig([
  { path: '/', as: 'Home', component: Home },
  { path: '/article/:articleId', as: 'ArticleDetails', component: ArticleDetails }
])
export class App {

}
	

  