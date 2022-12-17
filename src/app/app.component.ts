import { Component, OnInit } from '@angular/core';
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

  constructor(private themeService: ThemeService){}
  
  protected themeCheck(): void{
    if(this.userTheme === 'dark'){
      this.selectDocument.classList.add('dark');
      this.themeService.selectTheme(Theme.DARK);
      return;
    }
    this.themeService.selectTheme(Theme.LIGHT);
  }

  ngOnInit(): void {
    this.themeCheck();
  }

}
