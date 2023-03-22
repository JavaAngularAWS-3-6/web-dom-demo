import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketResolveButtonComponent } from './ticket-resolve-button.component';

describe('TicketResolveButtonComponent', () => {
  let component: TicketResolveButtonComponent;
  let fixture: ComponentFixture<TicketResolveButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketResolveButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketResolveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
