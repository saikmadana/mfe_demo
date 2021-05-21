import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemotemComponent } from './remotem/remotem.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RemotemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'mfec',
        component: RemotemComponent
      }
    ])
  ]
})
export class RemotemModule { }
