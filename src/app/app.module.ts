import { EducationComponent } from './sections/education/education.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { ProjectsComponent } from './sections/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
