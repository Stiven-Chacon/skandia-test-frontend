import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectivecardComponent } from './objectivecard.component';

describe('ObjectivecardComponent', () => {
  let component: ObjectivecardComponent;
  let fixture: ComponentFixture<ObjectivecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjectivecardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectivecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
