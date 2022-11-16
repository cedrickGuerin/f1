import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { DerniereSessionComponent } from './derniere-session.component';

const routes: Routes = [
  {
    path: '',
    component: DerniereSessionComponent,
  }
];

@NgModule({
  declarations: [
    DerniereSessionComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
})
export class DerniereSessionModule { }
