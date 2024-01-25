import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionReportModalComponent } from './transaction-report-modal.component';

describe('TransactionReportModalComponent', () => {
  let component: TransactionReportModalComponent;
  let fixture: ComponentFixture<TransactionReportModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionReportModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionReportModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
