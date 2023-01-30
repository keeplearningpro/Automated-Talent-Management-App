import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolForCertificationComponent } from './enrol-for-certification.component';

describe('EnrolForCertificationComponent', () => {
  let component: EnrolForCertificationComponent;
  let fixture: ComponentFixture<EnrolForCertificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolForCertificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolForCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
