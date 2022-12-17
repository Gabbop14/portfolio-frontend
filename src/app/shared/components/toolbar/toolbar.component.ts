import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LanguageMenuComponent } from '../language-menu/language-menu.component';
import { ThemeSelectorComponent } from '../theme-selector/theme-selector.component';

@Component({
  selector: 'toolbar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatTooltipModule, LanguageMenuComponent, ThemeSelectorComponent],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

}
