import { Component, Input } from '@angular/core';

@Component({
  selector: 'squareception',
  template: `
    <div class="group">
      <div class="bigSquare">
        <div class="square first"></div>
        <div class="square second"></div>
        <div class="square third"></div>
        <div class="square fourth"></div>
      </div>
    </div>
  `,
  styleUrls: ['./squareception.scss']
})
export class Squareception {
  @Input() color = 'white';
}
