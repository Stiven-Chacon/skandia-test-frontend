import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialcardComponent } from './financialcard.component';

describe('FinancialcardComponent', () => {
  let component: FinancialcardComponent;
  let fixture: ComponentFixture<FinancialcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
