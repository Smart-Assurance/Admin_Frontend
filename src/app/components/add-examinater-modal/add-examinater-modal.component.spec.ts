import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExaminaterModalComponent } from './add-examinater-modal.component';

describe('AddExaminaterModalComponent', () => {
  let component: AddExaminaterModalComponent;
  let fixture: ComponentFixture<AddExaminaterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExaminaterModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExaminaterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
