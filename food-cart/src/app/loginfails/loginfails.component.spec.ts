import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginfailsComponent } from './loginfails.component';

describe('LoginfailsComponent', () => {
  let component: LoginfailsComponent;
  let fixture: ComponentFixture<LoginfailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginfailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginfailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
