import {Component, NgFor, NgIf, EventEmitter, Input, Output} from 'angular2/angular2';

@Component({
  selector: 'zn-comment',
  templateUrl: 'app/components/comment/comment.part.html',
  directives: [
    NgFor, NgIf
  ]
})
export class ZNComment {
  
  @Input() private data: string[] = [];
  
  @Output() private  onActivate = new EventEmitter();
  @Output() private  onSend = new EventEmitter();
    
  constructor() {
  }
}
