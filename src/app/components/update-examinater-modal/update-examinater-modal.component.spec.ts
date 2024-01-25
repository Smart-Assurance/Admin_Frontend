import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExaminaterModalComponent } from './update-examinater-modal.component';

describe('UpdateExaminaterModalComponent', () => {
  let component: UpdateExaminaterModalComponent;
  let fixture: ComponentFixture<UpdateExaminaterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateExaminaterModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateExaminaterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
