import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { Coin } from './coin';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-table-crypto-currency',
  templateUrl: './table-crypto-currency.component.html',
  styleUrls: ['./table-crypto-currency.component.scss']
})
export class TableCryptoCurrencyComponent implements OnInit {

  public clickEventSubscription: Subscription;
  public coins: Coin[] = [];
  public filteredCoints: Coin[] = [];
  public searchText: string = '';
  
  constructor(
    private _currencyService:CurrencyService, 
    private _http: HttpClient) {
    this.clickEventSubscription = this._currencyService
      .getClickEvent()
      .subscribe(()=>{
        this.updateTable();
    })
  }
  
  ngOnInit(): void {
    this.getCoins();
  }

  public updateTable(): void {
    this.coins = [];
    this.getCoins();
  }
  
  public getCoins(): void {
    let currency = this._currencyService.getCurrentCurrency();
    for (let i=1; i <= 1; i ++) {
    // for (let i=1; i <= 4; i ++) {
      this._http.get<Coin[]>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250<&page=${i}&sparkline=false`).subscribe(
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
