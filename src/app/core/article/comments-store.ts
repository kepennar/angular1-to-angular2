
import {Injectable} from 'angular2/angular2';
import {Http, Headers} from 'angular2/http';
import { Observable } from 'angular2/angular2';
import {Comment} from './model/Comment';

const JSON_HEADERS = new Headers();
JSON_HEADERS.append('Accept', 'application/json');
JSON_HEADERS.append('Content-Type', 'application/json');


@Injectable()
export class CommentsStore {

  constructor(public http: Http) {
  }

  getComments(article: Article) {
    return this.http.get(`/api/posts/${article.id}/comments`)
      .map(res => res.json());
  }
  comment(comment: Comment) {
    return this.http.post(`/api/posts/${comment.articleId}/comments`, JSON.stringify(comment),
      { headers: JSON_HEADERS });
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