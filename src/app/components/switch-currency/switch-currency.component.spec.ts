import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCurrencyComponent } from './switch-currency.component';

describe('SwitchCurrencyComponent', () => {
  let component: SwitchCurrencyComponent;
  let fixture: ComponentFixture<SwitchCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
