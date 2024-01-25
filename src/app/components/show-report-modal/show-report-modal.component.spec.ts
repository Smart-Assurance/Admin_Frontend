import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReportModalComponent } from './show-report-modal.component';

describe('ShowReportModalComponent', () => {
  let component: ShowReportModalComponent;
  let fixture: ComponentFixture<ShowReportModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowReportModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowReportModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
