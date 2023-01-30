import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionDateUpdateComponent } from './completion-date-update.component';

describe('CompletionDateUpdateComponent', () => {
  let component: CompletionDateUpdateComponent;
  let fixture: ComponentFixture<CompletionDateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletionDateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletionDateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
