import {Component, NgFor, NgIf, NgClass, EventEmitter, Input, Output} from 'angular2/angular2';

import {ArticlesStore} from '../core/article/articles-store';
import {ZNArticle} from '../components/article/article';
import {Article} from '../core/article/model/Article';

@Component({
  selector: 'home',
  template: `
  <div class="main-content container">
    <div class="row" *ng-for="#article of articles">
      <zn-article
        [data]="article"
        (on-select)="home.goToDetails($event)"></zn-article>
    </div>
  </div>
  `,
  directives: [
    NgFor, NgIf, NgClass, ZNArticle
  ],
  providers: [ArticlesStore]
})
export class Home {
  private articles: Article[] = [];

  constructor(public articleStore: ArticlesStore) {

  }

  onInit() {
    this.articleStore.query()
      .subscribe(articles => this.articles = articles);
  }
}