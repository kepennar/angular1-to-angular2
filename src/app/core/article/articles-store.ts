
import {Injectable} from 'angular2/angular2';
import {Http, Headers} from 'angular2/http';
import { Observable } from 'angular2/angular2';
import {Article} from './model/Article';

import {Rate} from './model/Rate';

const JSON_HEADERS = new Headers();
JSON_HEADERS.append('Accept', 'application/json');
JSON_HEADERS.append('Content-Type', 'application/json');


@Injectable()
export class ArticlesStore {

  constructor(public http: Http) {
  }

  query(): Observable<Article[]> {
    return this.http.get('/api/posts/')
      .map(res => res.json().map(this.articleMapper));
  }

  getById(articleId: string): Observable<Article> {
    return this.http.get(`/api/posts/${articleId}`)
      .map(res => this.articleMapper(res.json()));
  }

  update(article: Article) {
    return this.http.put(`/api/posts/${article.id}`,
      JSON.stringify(article),
      { headers: JSON_HEADERS });
  }

  rate(rate: Rate) {
    return this.http.post(`/api/posts/${rate.articleId}/rate`, JSON.stringify(rate),
      { headers: JSON_HEADERS })
      .map(res => res.json());
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