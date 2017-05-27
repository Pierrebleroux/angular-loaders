import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpringLoaderComponent } from './spring-loader/spring-loader.component';
import { Squareception } from './squareception/squareception.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SpringLoaderComponent,
    Squareception
  ],
  exports: [
    SpringLoaderComponent,
    Squareception
  ]
})
export class AngularLoaders {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularLoaders
    };
  }
}
