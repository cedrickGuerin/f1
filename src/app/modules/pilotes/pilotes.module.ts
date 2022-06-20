import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { PilotesComponent } from './pilotes.component';

const routes: Routes = [
  {
    path: '',
    component: PilotesComponent,
  }
];

@NgModule({
  declarations: [
    PilotesComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
})
export class PilotesModule { }
