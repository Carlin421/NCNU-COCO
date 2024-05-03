import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindactivityComponent } from './findactivity.component';

describe('FindactivityComponent', () => {
  let component: FindactivityComponent;
  let fixture: ComponentFixture<FindactivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindactivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
