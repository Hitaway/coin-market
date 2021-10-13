import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-switch-language',
  templateUrl: './switch-language.component.html',
  styleUrls: ['./switch-language.component.scss']
})
export class SwitchLanguageComponent {

  public languages: string[] = ['en', 'es', 'fr'];

  constructor (public translate: TranslateService) {
    translate.addLangs(this.languages);
    translate.setDefaultLang('en');
  }

  // Switch language
  public translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

}
