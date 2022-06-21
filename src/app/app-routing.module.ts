import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule),
  },
  {
    path: 'pilotes',
    loadChildren: () => import('./modules/pilotes/pilotes.module').then(mod => mod.PilotesModule),
  },
  {
    path: 'classement',
    loadChildren: () => import('./modules/classement/classement.module').then(mod => mod.ClassementModule),
  },
  {
    path: 'palmares',
    loadChildren: () => import('./modules/palmares/palmares.module').then(mod => mod.PalmaresModule),
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
