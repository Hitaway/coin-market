import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-switch-language',
  templateUrl: './switch-language.component.html',
  styleUrls: ['./switch-language.component.scss']
})
export class SwitchLanguageComponent {

  constructor (
    public translate: TranslateService,
    public languageService: LanguageService
  ) {
    translate.addLangs(this.languageService.getListLanguages());
    translate.setDefaultLang(this.languageService.getDefaultLanguage());
    this.languageService.setCurrentLanguage(this.languageService.getDefaultLanguage());
  }

  // Switch language
  public translateLanguageTo(lang: string): void {
    this.translate.use(lang);
    this.languageService.setCurrentLanguage(lang);
    this.languageService.sendChangeLanguageEvent();
  }

}
