import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminatersComponent } from './examinaters.component';

describe('ExaminatersComponent', () => {
  let component: ExaminatersComponent;
  let fixture: ComponentFixture<ExaminatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExaminatersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExaminatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
