import {adapter} from '../../adapter';
import {Component, NgFor, NgIf, NgClass, EventEmitter, Input, Output} from 'angular2/angular2';

interface Star {
  index: number;
  selected: boolean;
}

@Component({
  selector: 'zn-rating',
  templateUrl: 'app/components/rating/rating.part.html',
  directives: [
    NgFor, NgIf, NgClass
  ]
})
export class ZNRating {
  @Input() private currentRate: number;
  @Input() private max: number;
  private stars: Star[];

  @Output() onRate = new EventEmitter();

  /**
   * Initialize component => Create the right numbers of stars
   */
  onInit() {
    this.stars = [];
    for (var i = 0; i < this.max; i++) {
      this.stars.push({
        index: i + 1,
        selected: i <= this.currentRate
      });
    }
  }
  
  /**
   * If currentChange input is modified => Update component
   */
  onChanges(changeRecord) {
    if (changeRecord.hasOwnProperty('currentRate') && this.stars) {
      this.selectRate(changeRecord.currentRate.currentValue);
    }
  }
  
  /**
   * Update component state
   */
  selectRate(selectedRate) {
    this.currentRate = selectedRate;
    this.stars.forEach(star => {
       if (star.index <= selectedRate) {
         star.selected = true;
       } else {
         star.selected = false;
       }
    });
  }
}