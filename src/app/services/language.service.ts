import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  public listLanguages: string[] = ['en', 'es', 'fr'];
  public currentLanguage: string = '';
  public defaultLanguage: string = 'en';
  public subject = new Subject<any>();
  
  constructor () { }
  
  public getListLanguages(): string[] {
    return this.listLanguages;
  }
  
  public getCurrentLanguage(): string {
    return this.currentLanguage;
  }
  
  public getDefaultLanguage(): string {
    return this.defaultLanguage;
  }
  
  public setCurrentLanguage(lang: string): void {
    this.currentLanguage = lang;
  }
  
  public sendChangeLanguageEvent(): void {
    this.subject.next();
  }

  public getClickEvent(): Observable<any> {
     return this.subject.asObservable();
  }
  
}
