import {Component} from 'angular2/angular2';
import {NgClass} from 'angular2/angular2';
import {EventEmitter, Input, Output} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'zn-navbar',
  templateUrl: 'app/components/navbar/navbar.part.html',
  directives: [NgClass, ROUTER_DIRECTIVES]
})
export class ZNNavbar {
  private collapsed: boolean= true;
}
