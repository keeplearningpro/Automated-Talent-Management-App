import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateActionsComponent } from './associate-actions.component';

describe('AssociateActionsComponent', () => {
  let component: AssociateActionsComponent;
  let fixture: ComponentFixture<AssociateActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
