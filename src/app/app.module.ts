import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwitchCurrencyComponent } from './components/switch-currency/switch-currency.component';
import { SwitchLanguageComponent } from './components/switch-language/switch-language.component';
import { TableCryptoCurrencyComponent } from './components/table-crypto-currency/table-crypto-currency.component';
import { SortDirective } from './components/table-crypto-currency/sort.directive';

// Factory function required during AOT compilation
export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    SwitchCurrencyComponent,
    SwitchLanguageComponent,
    TableCryptoCurrencyComponent,
    SortDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule, 
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
