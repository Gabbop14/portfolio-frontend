import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LanguageMenuComponent } from '../language-menu/language-menu.component';

@Component({
  selector: 'toolbar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatToolbarModule, MatTooltipModule, LanguageMenuComponent],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

}
