import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressMessageComponentComponent } from './progress-message-component.component';

describe('ProgressMessageComponentComponent', () => {
  let component: ProgressMessageComponentComponent;
  let fixture: ComponentFixture<ProgressMessageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressMessageComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressMessageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
