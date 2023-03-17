import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedTitleComponent } from './feed-title.component';

describe('FeedTitleComponent', () => {
  let component: FeedTitleComponent;
  let fixture: ComponentFixture<FeedTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
