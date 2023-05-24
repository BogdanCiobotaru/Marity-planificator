import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneFramesComponent } from './phone-frames.component';

describe('PhoneFramesComponent', () => {
  let component: PhoneFramesComponent;
  let fixture: ComponentFixture<PhoneFramesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneFramesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneFramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
