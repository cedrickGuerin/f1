import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { PalmaresComponent } from './palmares.component';

const routes: Routes = [
  {
    path: '',
    component: PalmaresComponent,
  }
];

@NgModule({
  declarations: [
    PalmaresComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
})
export class PalmaresModule { }
