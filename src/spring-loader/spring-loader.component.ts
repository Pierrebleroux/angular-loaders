import { Component, Input } from '@angular/core';

@Component({
  selector: 'spring-loader',
  template: `
    <div id="container" [style.width]="size" [style.height]="halfSize">
      <div id="loader" 
        [style.border-top-color]="color"
        [style.border-right-color]="color"
        [style.width]="size"
        [style.height]="size"></div>
    </div>
  `,
  styleUrls: ['./spring-loader.scss']
})
export class SpringLoaderComponent {
  @Input() size = '70px';
  @Input() halfSize = '35px';
  @Input() color = 'white';
}
