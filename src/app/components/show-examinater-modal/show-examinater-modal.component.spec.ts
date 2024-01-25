import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExaminaterModalComponent } from './show-examinater-modal.component';

describe('ShowExaminaterModalComponent', () => {
  let component: ShowExaminaterModalComponent;
  let fixture: ComponentFixture<ShowExaminaterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowExaminaterModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowExaminaterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
