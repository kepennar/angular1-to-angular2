import {Component} from 'angular2/angular2';
import {ZNNavbar} from './components/navbar/navbar';

import {RouteConfig} from 'angular2/router';
import { RouterOutlet } from 'angular2/router';

import {Home} from './sections/home/home';
import {ArticleDetails} from './sections/article-details/article-details';
import {AdminList} from './sections/admin/list/admin-list';
import {AdminEdit} from './sections/admin/edit/admin-edit';

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
  { path: '/article/:articleId', as: 'ArticleDetails', component: ArticleDetails },
  { path: '/admin', as: 'AdminList', component: AdminList },
  { path: '/admin/:articleId', as: 'AdminEdit', component: AdminEdit }
])
export class App {

}
	

  