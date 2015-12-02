import {Component} from 'angular2/angular2';
import {NgFor, NgIf} from 'angular2/angular2';
import {EventEmitter, Input, Output} from 'angular2/angular2';
import {DatePipe} from 'angular2/angular2';
import {PreviewPipe} from './preview_pipe';

@Component({
  selector: 'zn-article',
  templateUrl: 'app/components/article/article.part.html',
  directives: [NgFor, NgIf],
  pipes: [DatePipe, PreviewPipe]
})
export class ZNArticle {
  @Input() private data: any[] = [];
  @Output() private onSelect = new EventEmitter();
}