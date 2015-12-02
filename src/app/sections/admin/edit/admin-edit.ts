import {Component} from 'angular2/angular2';
import {NgFor} from 'angular2/angular2';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import {ArticlesStore} from '../../../core/article/articles-store';
import {Article} from '../../../core/article/model/Article';

@Component({
  selector: 'article-edit',
  templateUrl: 'app/sections/admin/edit/admin-edit.part.html',
  directives: [
    NgFor, ROUTER_DIRECTIVES
  ],
  providers: [ArticlesStore]
})
export class AdminEdit {
  private articleId: string;
  private article: Article;
  
  private editTitle: boolean= false;
  private editText: boolean= false;
  
  constructor(
    private articlesStore: ArticlesStore,
    private router: Router,
    private routeParam: RouteParams) {
      
    this.articleId = this.routeParam.get('articleId');
  }
  ngOnInit() {
    if (this.articleId) {
     this.articlesStore.getById(this.articleId)
      .subscribe(article => this.article = article); 
    } else {
      this.editTitle = true;
      this.editText = true;
    }
  }
  
  save(article) {
    const articleId = article.id;
    let observable;
    if (articleId) {
      observable = this.articlesStore.update(article);
    } else {
      observable = this.articlesStore.create(article);
    }
    observable.subscribe(() => this.router.navigate(['AdminList']));
  }
  delete(article) {
    this.articlesStore.delete(article)
    .subscribe(() => this.router.navigate(['AdminList']));
  }
}