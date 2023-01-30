import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalldetailsComponent } from './getalldetails.component';

describe('GetalldetailsComponent', () => {
  let component: GetalldetailsComponent;
  let fixture: ComponentFixture<GetalldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetalldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetalldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
