import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FullscreenOverlayContainer, OverlayContainer } from '@angular/cdk/overlay';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
