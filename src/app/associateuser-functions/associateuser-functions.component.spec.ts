import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateuserFunctionsComponent } from './associateuser-functions.component';

describe('AssociateuserFunctionsComponent', () => {
  let component: AssociateuserFunctionsComponent;
  let fixture: ComponentFixture<AssociateuserFunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateuserFunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateuserFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
