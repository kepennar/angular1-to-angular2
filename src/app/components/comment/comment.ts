import {Component, NgFor, NgIf, EventEmitter, Input, Output} from 'angular2/angular2';

import {adapter} from '../../adapter';

@Component({
  selector: 'zn-comment',
  templateUrl: 'app/components/comment/comment.part.html',
  directives: [
    NgFor, NgIf
  ]
})
export class ZNComment {
  
  @Input() data: string[] = [];
  
  @Output() onActivate = new EventEmitter();
  @Output() onSend = new EventEmitter();
    
  constructor() {
  }
  
  submitComment(newComment) {
    this.onSend.next(newComment);
  }
}
