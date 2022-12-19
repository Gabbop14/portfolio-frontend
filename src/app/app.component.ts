import { Component, OnInit } from '@angular/core';
import { Language, Languages } from './shared/models/languages';
import { LanguageService } from './shared/services/language.service';
import { Theme, ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portfolio-frontend';
  selectDocument = document.documentElement;
  userTheme = localStorage.getItem('theme');
  systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  constructor(private themeService: ThemeService, private languageService: LanguageService){}
  
  protected themeCheck(): void{
    if(this.userTheme === 'dark'){
      this.selectDocument.classList.add('dark');
      this.themeService.selectTheme(Theme.DARK);
      return;
    }
    this.themeService.selectTheme(Theme.LIGHT);
  }

  protected langCheck(): void{
    const storageLang = localStorage.getItem('lang');
    if(storageLang){
      const storageLangObj: Language = JSON.parse( storageLang );
      this.languageService.selectLanguage(storageLangObj);
      return;
    }
    this.languageService.selectLanguage(Languages[0]);
  }

  ngOnInit(): void {
    this.themeCheck();
    this.langCheck();
  }

}
