import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Language, Languages } from '../models/languages';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translateService: TranslateService) {}

  private selectedLanguage$ = new BehaviorSubject<Language>( Languages[0] );

  get selectedLanguage(): Observable<Language> {
    return this.selectedLanguage$.asObservable();
  }

  selectLanguage(lang: Language): void {
      this.selectedLanguage$.next(lang);
      localStorage.setItem('lang', JSON.stringify(lang) );
      this.translateService.use( lang.locale );
  }
}
