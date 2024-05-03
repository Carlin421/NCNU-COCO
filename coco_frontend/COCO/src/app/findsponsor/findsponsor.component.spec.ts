import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindsponsorComponent } from './findsponsor.component';

describe('FindsponsorComponent', () => {
  let component: FindsponsorComponent;
  let fixture: ComponentFixture<FindsponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindsponsorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindsponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
