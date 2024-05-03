import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupbrandComponent } from './signupbrand.component';

describe('SignupbrandComponent', () => {
  let component: SignupbrandComponent;
  let fixture: ComponentFixture<SignupbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupbrandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
