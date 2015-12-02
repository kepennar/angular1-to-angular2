import {Component, NgIf} from 'angular2/angular2';
import {RouteParams} from 'angular2/router';

import {ArticlesStore} from '../../core/article/articles-store';
import {CommentsStore} from '../../core/article/comments-store';
import {ZNComment} from '../../components/comment/comment';
import {ZNRating} from '../../components/rating/rating';
import {Article} from '../../core/article/model/Article';

@Component({
  selector: 'article-details',
  template: `
  <div *ng-if="article" class="container main-content article-details">
    <div class="row">
      <div class="text-center">
        <article>
          <h1>{{article.name}}</h1>
          <span class="date">{{article.createdAt | date}}</span>
          <p>
            {{article.text}}
          </p>
        </article>
  
        <zn-rating
          [current-rate]="article.userRate" 
          (on-rate)="rateArticle($event)" 
          max="5">
        </zn-rating>
        <zn-comment 
          [data]="comments" 
          (on-activate)="displayComment()" 
          (on-send)="comment($event)">
        </zn-comment>
  
      </div>
    </div>
  </div>
  `,
  directives: [
    NgIf, ZNComment, ZNRating
  ],
  providers: [ArticlesStore, CommentsStore]
})
export class ArticleDetails {
  private articleId: string;
  private article: Article;
  private comments: Comment[];

  constructor(
    private articlesStore: ArticlesStore,
    private commentsStore: CommentsStore,
    private routeParam: RouteParams) {
      
    this.articleId = this.routeParam.get('articleId');
  }
  onInit() {
    this.articlesStore.getById(this.articleId)
      .subscribe(article => this.article = article);
  }
  displayComment() {
    this.commentsStore.getComments(this.article)
    .subscribe(comments => this.comments = comments)
  }
  comment(newComment) {
    this.commentsStore.comment({articleId: this.article.id, text: newComment})
    .subscribe(
      () => this.displayComment(),
      (err) => console.error(err)
    );
  }
  rateArticle(userRate) {
    this.articlesStore.rate({articleId: this.article.id, rate: userRate})
      .subscribe(
        () => console.log('rated'),
        (err) => console.error(err)
      );
  }
}