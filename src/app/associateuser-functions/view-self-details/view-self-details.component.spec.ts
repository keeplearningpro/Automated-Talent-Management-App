import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSelfDetailsComponent } from './view-self-details.component';

describe('ViewSelfDetailsComponent', () => {
  let component: ViewSelfDetailsComponent;
  let fixture: ComponentFixture<ViewSelfDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSelfDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSelfDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
