import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContractModalComponent } from './show-contract-modal.component';

describe('ShowContractModalComponent', () => {
  let component: ShowContractModalComponent;
  let fixture: ComponentFixture<ShowContractModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowContractModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowContractModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
