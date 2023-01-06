import { NgModule } from '@angular/core';
import { MsnErrorDirective } from './directiva/msn-error.directive';



@NgModule({
  declarations: [
    MsnErrorDirective
  ],
  exports: [
    MsnErrorDirective
  ]
})
export class SharedModule { }
