import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteassociateComponent } from './deleteassociate.component';

describe('DeleteassociateComponent', () => {
  let component: DeleteassociateComponent;
  let fixture: ComponentFixture<DeleteassociateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteassociateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteassociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
