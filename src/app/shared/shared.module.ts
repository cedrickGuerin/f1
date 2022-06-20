import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    // Layout components
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    // Layout components
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    // Modules
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  entryComponents: [
    
  ]
})

export class SharedModule {
}
