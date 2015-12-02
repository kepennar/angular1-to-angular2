import {Component, NgFor, EventEmitter, Input, Output} from 'angular2/angular2';
import {Router} from 'angular2/router';

import {ArticlesStore} from '../../core/article/articles-store';
import {ZNArticle} from '../../components/article/article';
import {Article} from '../../core/article/model/Article';

@Component({
  selector: 'home',
  template: `
  <div class="main-content container">
    <div class="row" *ng-for="#article of articles">
      <zn-article
        [data]="article"
        (on-select)="goToDetails($event)"></zn-article>
    </div>
  </div>
  `,
  directives: [
    NgFor, ZNArticle
  ],
  providers: [ArticlesStore]
})
export class Home {
  private articles: Article[] = [];

  constructor(private router: Router, private articleStore: ArticlesStore) {
  }

  onInit() {
    this.articleStore.query()
      .subscribe(articles => this.articles = articles);
  }
  goToDetails(article: Article) {
    this.router.navigate(['ArticleDetails', {articleId: article.id}]);
  }
}