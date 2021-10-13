import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCryptoCurrencyComponent } from './table-crypto-currency.component';

describe('TableCryptoCurrencyComponent', () => {
  let component: TableCryptoCurrencyComponent;
  let fixture: ComponentFixture<TableCryptoCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCryptoCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCryptoCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
