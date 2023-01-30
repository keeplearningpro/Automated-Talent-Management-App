import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperuserFunctionsComponent } from './superuser-functions.component';

describe('SuperuserFunctionsComponent', () => {
  let component: SuperuserFunctionsComponent;
  let fixture: ComponentFixture<SuperuserFunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperuserFunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperuserFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
