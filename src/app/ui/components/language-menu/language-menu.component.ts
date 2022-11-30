import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CdkMenuModule} from '@angular/cdk/menu';
@Component({
  selector: 'language-menu',
  standalone: true,
  imports: [CommonModule, CdkMenuModule],
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.scss']
})
export class LanguageMenuComponent {

  languageMenuOpened = false;
  selectedLanguage = 'Español';

  changeLanguage(id: string): void {
    const languages: any = {
      spanish: 'Español',
      english: 'English'
    };

    this.selectedLanguage = languages[id] ?? 'Español';
  }

}
