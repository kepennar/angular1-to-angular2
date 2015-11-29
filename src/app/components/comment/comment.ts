import {Component, NgFor, NgIf} from 'angular2/angular2';

import {adapter} from '../../adapter';

@Component({
  selector: 'zn-comment',
  inputs: ['data'],
  events: ['onActivate', 'onSend'],
  templateUrl: 'app/components/comment/comment.part.html',
  directives: [
    NgFor, NgIf
  ]
})
export class ZNComment {
  private data: string;
  
  constructor() {
    console.log(this.data);
  }
}
