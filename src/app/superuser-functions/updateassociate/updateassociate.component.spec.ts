import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateassociateComponent } from './updateassociate.component';

describe('UpdateassociateComponent', () => {
  let component: UpdateassociateComponent;
  let fixture: ComponentFixture<UpdateassociateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateassociateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateassociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
