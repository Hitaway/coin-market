import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

import fr from '@angular/common/locales/fr';
import es from '@angular/common/locales/es';
import en from '@angular/common/locales/en';

import { Coin } from './coin';
import { CurrencyService } from '../../services/currency.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-table-crypto-currency',
  templateUrl: './table-crypto-currency.component.html',
  styleUrls: ['./table-crypto-currency.component.scss']
})
export class TableCryptoCurrencyComponent implements OnInit {

  public coins: Coin[] = [];
  public filteredCoints: Coin[] = [];
  public searchText: string = '';
  public currencyCode: string = '';
  public currentLanguage: string = '';
  
  constructor (
    public currencyService: CurrencyService,
    public languageService: LanguageService,
    private _http: HttpClient) {
    this.currencyService.getClickEvent().subscribe(()=>{
      this.currencyCode = this.currencyService.getCurrentCurrency().toUpperCase();
      this.callApiCoinGuecko();
    });
    this.languageService.getClickEvent().subscribe(()=>{
      this.currentLanguage =  this.languageService.getCurrentLanguage();
      this.formatNumberInLocale();
    });
  }
  
  ngOnInit(): void {
    this.callApiCoinGuecko();
  }
  
  public formatNumberInLocale(): void {
    switch (this.currentLanguage) {
      case 'fr':
        registerLocaleData(fr);
        break;
      case 'en':
        registerLocaleData(en);
        break;
      case 'es':
        registerLocaleData(es);
        break;
      default:
        console.log('This language does not exist');
    }
  }
  
  public callApiCoinGuecko(): void {
    this.coins = [];
    let currency = this.currencyService.getCurrentCurrency();
    for (let i=1; i <= 4; i ++) {
      this._http.get<Coin[]>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=25<&page=${i}&sparkline=false`).subscribe(
        (res) => {
          this.coins = this.coins.concat(res);
          this.coins = this.coins.sort((a, b) => a.market_cap_rank - b.market_cap_rank);
          this.filteredCoints = this.coins;
        },
        (err) => console.error(err)
      );
    }
  }
  
  public searchCoin(): void {
    this.filteredCoints = this.coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}
