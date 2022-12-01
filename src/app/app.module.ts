import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { ToolbarComponent } from './ui/components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarComponent,
    AboutMeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
