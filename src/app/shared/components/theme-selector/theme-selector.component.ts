import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkMenuModule } from '@angular/cdk/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ThemeService, Theme } from '../../services/theme.service';
import { combineLatestWith } from 'rxjs/operators';

@Component({
  selector: 'theme-selector',
  standalone: true,
  imports: [CommonModule, CdkMenuModule, MatTooltipModule],
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss']
})
export class ThemeSelectorComponent {
  themeMenuOpened = false;
  iconTheme = 'moon';

  themeActive$ = this.themeService.themeActive;
  systemThemeActive$ = this.themeService.systemThemeActive;

  constructor(public themeService: ThemeService){
    this.themeActive$.pipe(
      combineLatestWith(this.systemThemeActive$)
    ).subscribe(values => {
      const theme = values[0];
      const systemThemeActive = values[1];

      if(theme === 'light' && !systemThemeActive){
        this.iconTheme = 'sun';
        return;
      }else if(theme === 'dark' && !systemThemeActive){
        this.iconTheme = 'moon';
        return;
      }
      this.iconTheme = 'desktop';
    });
  }

  selectTheme(opt: string): void{
    const themes: any = {
      'light': () => {
        this.themeService.selectTheme(Theme.LIGHT);
        this.themeService.setSystemTheme(false);
      },
      'dark': () => {
        this.themeService.selectTheme(Theme.DARK);
        this.themeService.setSystemTheme(false);
      },
      'system': () => {
        this.themeService.selectSystemTheme();
      }
    };
    themes[opt]() ?? '';
  }
}
