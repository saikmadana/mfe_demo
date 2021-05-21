import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemotecComponent } from './remotec/remotec.component';

const routes: Routes = [
  {
    path: '',
    component: RemotecComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
