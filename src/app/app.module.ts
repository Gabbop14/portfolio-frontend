import { EducationComponent } from './sections/education/education.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
      defaultLanguage: 'es',
    }),
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
