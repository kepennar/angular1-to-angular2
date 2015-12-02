import {Component} from 'angular2/angular2';
import {NgFor} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {ArticlesStore} from '../../../core/article/articles-store';
import {Article} from '../../../core/article/model/Article';

@Component({
  selector: 'admin-list',
  templateUrl: 'app/sections/admin/list/admin-list.part.html',
  directives: [
    NgFor, ROUTER_DIRECTIVES
  ],
  providers: [ArticlesStore]
})
export class AdminList {
  private articles: Article[]= [];
  
  constructor(private articlesStore: ArticlesStore) {
  }
  onInit() {
    this.articlesStore.query()
      .subscribe(articles => this.articles = articles);
  }
}
