
import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';
import { Observable } from 'angular2/angular2';
import {Article} from './model/Article';
import {Comment} from './model/Comment';
import {Rate} from './model/Rate';

@Injectable()
export class ArticlesStore {

  constructor(public http: Http) { 
  }

  query(): Observable<Article[]> {
    return this.http.get('api/posts/')
    .map(res => {
      return res.json().map(this.articleMapper);
    });
  }
  
  update(article: Article) {
    return this.http.put(`api/posts/${article.id}`, JSON.stringify(article));
  }
  
  getComments(article: Article) {
    return this.http.get(`api/posts/${article.id}/comments`);
  }
  
  rate(rate: Rate) {
    return this.http.post(`api/posts/${rate.id}/rate`, JSON.stringify(rate));
  }
  
  comment(comment: Comment) {
    return this.http.get(`api/posts/${comment.postId}/comments`, comment);
  }
  
  private articleMapper(article) {
    return {
      id: article.id,
      createdAt: new Date(article.createdAt),
      name: article.name,
      text: article.text,
      userRate: article.userRate,
      numRates: article.userRate,
    };
  }
}