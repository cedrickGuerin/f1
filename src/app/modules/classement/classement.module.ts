import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { ClassementComponent } from './classement.component';

const routes: Routes = [
  {
    path: '',
    component: ClassementComponent,
  }
];

@NgModule({
  declarations: [
    ClassementComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
})
export class ClassementModule { }
