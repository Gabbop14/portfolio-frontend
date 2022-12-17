import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum Theme{
  DARK = 'dark',
  LIGHT = 'light'
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeActive$ = new BehaviorSubject<Theme>(Theme.LIGHT);
  private systemThemeActive$ = new BehaviorSubject<boolean>(false);
  private systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
    .matches;

  constructor() {}

  get themeActive(): Observable<Theme> {
    return this.themeActive$.asObservable();
  }

  protected setTheme(theme: Theme): void {
    this.themeActive$.next(theme);
  }

  get systemThemeActive(): Observable<boolean> {
    return this.systemThemeActive$.asObservable();
  }

  public setSystemTheme(active: boolean): void {
    this.systemThemeActive$.next(active);
  }

  public selectTheme(theme: Theme): void{
    if(theme === 'dark'){
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      this.setTheme(Theme.DARK);
      return;
    }
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    this.setTheme(Theme.LIGHT);
  }

  public selectSystemTheme(): void{
    this.setSystemTheme(true);
    this.systemTheme ? this.selectTheme(Theme.DARK) : this.selectTheme(Theme.LIGHT);
  }
}
