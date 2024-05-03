import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupclubComponent } from './signupclub.component';

describe('SignupclubComponent', () => {
  let component: SignupclubComponent;
  let fixture: ComponentFixture<SignupclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupclubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
