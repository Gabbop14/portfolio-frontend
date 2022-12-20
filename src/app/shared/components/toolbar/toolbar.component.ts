import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SocialButtonConfig } from '../../models/social-button';
import { LanguageMenuComponent } from '../language-menu/language-menu.component';
import { LoginButtonComponent } from '../login-button/login-button.component';
import { SocialButtonComponent } from '../social-button/social-button.component';
import { ThemeSelectorComponent } from '../theme-selector/theme-selector.component';

@Component({
  selector: 'toolbar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatTooltipModule, LanguageMenuComponent, ThemeSelectorComponent, SocialButtonComponent, LoginButtonComponent],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  socialButtons: SocialButtonConfig[] = [
    {icon: 'lab la-linkedin', tooltipLabel: 'Linkedin', link: 'https://www.linkedin.com/in/gabriel-ruiz-425a4b15b/'},
    {icon: 'lab la-github', tooltipLabel: 'Github', link: 'https://github.com/Gabbop14'},
  ];

}
