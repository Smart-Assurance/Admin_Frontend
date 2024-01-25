import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowClientModalComponent } from './show-client-modal.component';

describe('ShowClientModalComponent', () => {
  let component: ShowClientModalComponent;
  let fixture: ComponentFixture<ShowClientModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowClientModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowClientModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
