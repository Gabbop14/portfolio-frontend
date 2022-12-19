import { CdkMenuModule } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { map, Observable } from 'rxjs';
import { Languages } from '../../models/languages';
import { LanguageService } from '../../services/language.service';
@Component({
  selector: 'language-menu',
  standalone: true,
  imports: [CommonModule, CdkMenuModule, MatTooltipModule, TranslateModule],
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.scss'],
})
export class LanguageMenuComponent implements OnInit {
  languageMenuOpened = false;
  selectedLanguageName$?: Observable<string>;
  languages = Languages;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.selectedLanguageName$ = this.languageService.selectedLanguage.pipe(
      map((x) => x.name)
    );
  }

  changeLanguage(locale: string): void {
    const langForSelect = this.languages.find((x) => x.locale === locale);
    if (langForSelect) {
      this.languageService.selectLanguage(langForSelect);
    }
  }
}
